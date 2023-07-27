from django.db import transaction
from django.db.models import Q
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.middleware.csrf import get_token
from rest_framework.decorators import api_view, permission_classes

from .permissions import IsPlayerOrAnyReadOnly, IsOpponent, IsSubmitter, IsReporterOrAnyReadOnly
from .models import MatchOffer, Match, PostMatchFeedback
from .serializers import MatchOfferSerializer, MatchSerializer, PostMatchFeedbackSerializer
from service.rating import update_rating
from ranks.models import Skill
from notifications.service import send_notification
from notifications.models import NotificationType


@api_view(('GET',))
@permission_classes((AllowAny,))
def csrf(request):
    return Response({'csrfToken': get_token(request)})


class MatchOfferViewSet(viewsets.ModelViewSet):
    """
    View set for the MatchOffer model
    """

    queryset = MatchOffer.objects.all()
    serializer_class = MatchOfferSerializer
    permission_classes = [IsAdminUser | IsAuthenticated | IsOpponent | IsSubmitter]

    def get_queryset(self):
        """Queryset is only the MatchOffers that includes the user as submitter/opponent"""
        user = self.request.user
        if user.is_superuser:
            return MatchOffer.objects.all()
        return MatchOffer.objects.filter(Q(submitter=user) | Q(opponent=user))

    def get_permissions(self):
        """Get permission class depending on the action"""
        # Only the admin can destroy a MatchOffer
        if self.action in ['destroy']:
            return [IsAdminUser()]
        # Any authenticated user can create/detail/retrieve a MatchOffer
        if self.action in ['create', 'retrieve', 'list']:
            return [IsAuthenticated()]
        # Only opponent can accept/decline a MatchOffer
        if self.action in ['accept', 'decline']:
            return [IsOpponent()]
        # Only submitter can rescind a MatchOffer
        if self.action in ['rescind']:
            return [IsSubmitter()]
        return super().get_permissions()

    @action(detail=True, methods=['PUT'], url_path='accept')
    def accept(self, request, pk=None):
        """A custom action for the opponent to accept a MatchOffer"""
        match_offer = self.get_object()
        # Update the MatchOffer status
        match_offer.status = MatchOffer.Status.ACCEPTED
        # Begin database transaction
        with transaction.atomic():
            match_offer.save()
            if match_offer.status == MatchOffer.Status.ACCEPTED:
                # Create a new Match object automatically upon acceptance
                match = Match.objects.create(
                    match_offer=match_offer,
                    submitter=match_offer.submitter,
                    opponent=match_offer.opponent,
                    status=Match.Status.PENDING,
                )
                # Return the full Match object with the nested MatchOffer object
                serializer = MatchSerializer(match)
                return Response(serializer.data)
        # TODO: Otherwise if transaction failed
        serializer = self.get_serializer(match_offer)
        return Response(serializer.data)

    @action(detail=True, methods=['PUT'], url_path='decline')
    def decline(self, request, pk=None):
        """A custom action for the opponent to decline a MatchOffer"""
        # Update the MatchOffer status
        match_offer = self.get_object()
        match_offer.status = MatchOffer.Status.DECLINED
        match_offer.save()
        # Return the full MatchOffer object with the nested User objects
        serializer = self.get_serializer(match_offer)
        return Response(serializer.data)

    @action(detail=True, methods=['PUT'], url_path='rescind')
    def rescind(self, request, pk=None):
        """A custom action for the submitter to rescind a MatchOffer"""
        # Update the MatchOffer Status
        match_offer = self.get_object()
        match_offer.status = MatchOffer.Status.RESCINDED
        match_offer.save()
        # Return the full MatchOffer object with the nested User objects
        serializer = self.get_serializer(match_offer)
        return Response(serializer.data)


class MatchViewSet(viewsets.ModelViewSet):
    """
    View set for the Match model
    """

    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    permission_classes = [IsAdminUser | IsAuthenticated | IsPlayerOrAnyReadOnly]

    def get_queryset(self):
        user = self.request.user
        if user.is_superuser:
            return Match.objects.all()
        return Match.objects.filter(Q(submitter=user) | Q(opponent=user))

    def get_permissions(self):
        # Only admin can destroy a Match
        if self.action in ['destroy']:
            return [IsAdminUser()]
        if self.action in ['create', 'retrieve', 'list']:
            return [IsAuthenticated()]
        # Only a player (submitter/opponent) of the match can cancel a match
        if self.action in ['cancel']:
            return [IsPlayerOrAnyReadOnly()]
        return super().get_permissions()

    @action(detail=True, methods=['PUT'], url_path='cancel')
    def cancel(self, request, pk=None):
        """A custom action for the player to cancel the match"""
        match = self.get_object()
        # Update the match status
        match.status = Match.Status.CANCELLED
        # Update the cancel reasons
        if request.user == match.submitter:
            match.cancelled_reason_phrase = Match.CancelledReasonPhrase.SUBMITTER_CANCELLED
        else:
            match.cancelled_reason_phrase = Match.CancelledReasonPhrase.OPPONENT_CANCELLED
        match.save()
        # Return the full Match details with the nested MatchOffer and User objects
        serializer = self.get_serializer(match)
        return Response(serializer.data)


class PostMatchFeedbackViewSet(viewsets.ModelViewSet):
    """
    View set for the PostMatchFeedback model
    """

    queryset = PostMatchFeedback.objects.all()
    serializer_class = PostMatchFeedbackSerializer
    permission_classes = [IsAdminUser | IsReporterOrAnyReadOnly]

    def get_queryset(self):
        """Queryset is only the feedbacks that the user gave or received"""
        user = self.request.user
        if user.is_superuser:
            return PostMatchFeedback.objects.all()
        return PostMatchFeedback.objects.filter(Q(reporter=user) | Q(match__submitter=user) | Q(match__opponent=user))

    def get_permissions(self):
        # Only admin can destroy a PostMatchFeedback
        if self.action in ['destroy']:
            return [IsAdminUser()]
        # Only a reporter can create or retrieve the feedback
        if self.action in ['create', 'retrieve', 'list']:
            return [IsReporterOrAnyReadOnly()]
        return super().get_permissions()

    def create(self, request, *args, **kwargs):
        """
        Logic when creating/POSTING so that
        - the scores are compared and confirmed if the same
        - the user ratings are updated based on the feedback OR
        - the match is cancelled if the scores differ OR
        - the match is awaiting confirmation if the other player hasn't submitted the feedback
        """

        curr_feedback = request.data

        # case 4: First feedback without offer
        if curr_feedback.get('match_id') is None or curr_feedback.get('match_id') == "":
            with transaction.atomic():
                match = Match.objects.create(
                    submitter_id=curr_feedback.get('reporter_id'),
                    opponent_id=curr_feedback.get('opponent_id'),
                    status=Match.Status.AWAITING_CONFIRMATION,
                )

                request.data['match_id'] =  match.id
                request.data.pop('opponent_id')

                # Create Notification object
                send_notification(
                    NotificationType.Entity.MATCH,
                    NotificationType.Description.MATCH_CREATED,
                    match.id,
                    match.submitter,  # who is also the reporter
                    [match.opponent, ],
                )

                return super().create(request, *args, **kwargs)

        # case 1: First feedback with offer
        # case 2: Second feedback with offer
        # case 3: Second feedback without offer
        match_id = curr_feedback.get('match_id')
        match = Match.objects.filter(id=match_id).first()

        other_feedback = PostMatchFeedback.objects.filter(match_id=match_id).first()

        # If this is the second post-match feedback of this match
        if other_feedback:

            # If reported scores match
            if (
                    (other_feedback.submitter_score == int(curr_feedback.get('submitter_score'))) &
                    (other_feedback.opponent_score == int(curr_feedback.get('opponent_score')))
            ):
                with transaction.atomic():

                    # Update Match object
                    match.status = Match.Status.CONFIRMED
                    match.submitter_score = curr_feedback.get('submitter_score')
                    match.opponent_score = curr_feedback.get('opponent_score')
                    match.save()

                    # Update
                    if match.submitter_score > match.opponent_score:
                        match.submitter.matches_won += 1
                        match.submitter.matches_played += 1
                        match.submitter.save()
                        match.opponent.matches_played += 1
                        match.opponent.save()
                    else:
                        match.opponent.matches_won += 1
                        match.opponent.matches_played += 1
                        match.opponent.save()
                        match.submitter.matches_played += 1
                        match.submitter.save()

                    # Update user object with the current feedback
                    user = match.opponent if curr_feedback.get('reporter_is_submitter') else match.submitter

                    if curr_feedback.get('peer_skill_level_given'):
                        user.n_skill_level_received += 1
                        user.overall_skill_level = (
                            (user.overall_skill_level + int(curr_feedback.get('peer_skill_level_given'))) /
                            user.n_skill_level_received
                        )
                    if curr_feedback.get('peer_sportsmanship_rating_given'):
                        user.n_sportsmanship_rating_received += 1
                        user.overall_sportsmanship_rating = (
                            (user.overall_sportsmanship_rating + int(curr_feedback.get('peer_sportsmanship_rating_given'))) /
                            user.n_sportsmanship_rating_received
                        )
                    if curr_feedback.get('match_competitiveness_rating'):
                        user.n_match_competitiveness_rating_received += 1
                        user.overall_match_competitiveness_rating = (
                            (user.overall_match_competitiveness_rating + int(curr_feedback.get('match_competitiveness_rating'))) /
                            user.n_match_competitiveness_rating_received
                        )
                    user.save()

                    # Update user with other feedback
                    user = match.submitter if curr_feedback.get('reporter_is_submitter') else match.opponent

                    if curr_feedback.get('peer_skill_level_given'):
                        user.n_skill_level_received += 1
                        user.overall_skill_level = (
                                (user.overall_skill_level + other_feedback.peer_skill_level_given) /
                                user.n_skill_level_received
                        )
                    if curr_feedback.get('peer_sportsmanship_rating_given'):
                        user.n_sportsmanship_rating_received += 1
                        user.overall_sportsmanship_rating = (
                                (user.overall_sportsmanship_rating + other_feedback.peer_sportsmanship_rating_given) /
                                user.n_sportsmanship_rating_received
                        )
                    if curr_feedback.get('match_competitiveness_rating'):
                        user.n_match_competitiveness_rating_received += 1
                        user.overall_match_competitiveness_rating = (
                            (user.overall_match_competitiveness_rating + int(curr_feedback.get('match_competitiveness_rating'))) /
                            user.n_match_competitiveness_rating_received
                        )
                    user.save()

                    # Update skill
                    skill1 = Skill.objects.filter(user=match.submitter).first()
                    mu1, sigma1, score1 = skill1.mu, skill1.sigma, match.submitter_score

                    skill2 = Skill.objects.filter(user=match.opponent).first()
                    mu2, sigma2, score2 = skill2.mu, skill2.sigma, match.opponent_score

                    new_mu1, new_sigma1, new_mu2, new_sigma2 = update_rating(mu1, sigma1, score1, mu2, sigma2, score2)
                    skill1.mu = new_mu1
                    skill1.sigma = new_sigma1
                    skill1.skill = new_mu1 - 3 * new_sigma1
                    skill1.save()

                    skill2.mu = new_mu2
                    skill2.sigma = new_sigma2
                    skill2.skill = new_mu2 - 3 * new_sigma2
                    skill2.save()

            # If reported scores conflict
            else:
                # Update Match object
                match.status = Match.Status.CANCELLED
                match.cancelled_reason_phrase = Match.CancelledReasonPhrase.CONFLICTED_REPORTED_SCORES
                match.save()

        # If this is the first post-match feedback for this match
        else:

            # Update Match object
            match.status = Match.Status.AWAITING_CONFIRMATION
            match.save()

        request.data.pop('opponent_id')
        return super().create(request, *args, **kwargs)
