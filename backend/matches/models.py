from django.conf import settings
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _

from communities.models import Community


class MatchOffer(models.Model):

    class MatchOfferType(models.TextChoices):
        BADMINTON_SINGLES = "S", _("Singles")

    class MatchOfferStatus(models.TextChoices):
        PENDING = "P", _("Pending")
        DECLINED = "D", _("Declined")
        ACCEPTED = "A", _("Accepted")

    submitter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='match_offer_submitter',
        on_delete=models.CASCADE
    )
    opponent = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='match_offer_opponent',
        on_delete=models.CASCADE
    )
    community = models.ForeignKey(
        Community,
        on_delete=models.CASCADE()
    )
    type = models.CharField(
        _("match offer type"),
        choices=MatchOfferType.choices,
        max_length=20,
        default=MatchOfferType.BADMINTON_SINGLES,
    )
    start_datetime = models.DateTimeField(
        null=False,
    )
    end_datetime = models.DateTimeField(
        null=False,
    )
    status = models.CharField(
        _("match offer status"),
        choices=MatchOfferStatus.choices,
        max_length=20,
        default=MatchOfferStatus.PENDING,
    )
    is_counter_offer = models.BooleanField(
        default=False,
    )
    last_offer_id = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True,)
    update_at = models.DateTimeField(auto_now=True,)

    def __str__(self):
        return \
            f"""
            MatchOffer {self.id} for {self.type} with status {self.status}
            submitted by {self.submitter.username} to {self.opponent.username}
            on {self.start_datetime}
            """


class Match(models.Model):

    class MatchStatus(models.TextChoices):
        PENDING = "P", _("Pending")
        CANCELLED = "C", _("Cancelled")
        AWAITING_CONFIRMATION = "A", _("Awaiting confirmation")
        PLAYED = "P", _("Played")

    class MatchCancelledReasonPhrase(models.TextChoices):
        SUBMITTER_CANCELLED = "SC", _("The submitter cancelled the match")
        OPPONENT_CANCELLED = "OC", _("The opponent cancelled the match")
        NO_POST_MATCH_FEEDBACK = "NPMF", _("Neither submitter/opponent submitted post match feedback")
        CONFLICTED_REPORTED_SCORES = "CRS", _("Reported scores in post match feedback don't match after resubmission")

    match_offer = models.ForeignKey(
        MatchOffer,
        on_delete=models.CASCADE,
    )
    submitter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='match_submitter',
        on_delete=models.CASCADE,
    )
    opponent = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='match_opponent',
        on_delete=models.CASCADE,
    )
    submitter_score = models.IntegerField(
        null=True,
        blank=True,
    )
    opponent_score = models.IntegerField(
        null=True,
        blank=True,
    )
    status = models.CharField(
        _("match status"),
        choices=MatchStatus.choices,
        max_length=20,
        default=MatchStatus.PENDING,
    )
    cancelled_reason_phrase = models.CharField(
        _("match cancelled reason phrase"),
        choices=MatchCancelledReasonPhrase.choices,
        max_length=20,
        null=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return \
            f"""
            Match {self.id} with status {self.status} between
            submitter {self.submitter.username} and opponent {self.opponent.username}
            on {self.match_offer.start_datetime}
            """


class PostMatchFeedback(models.Model):

    match = models.ForeignKey(
        Match,
        on_delete=models.CASCADE,
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    user_is_submitter = models.BooleanField(
        null=False,
    )
    submitter_score = models.IntegerField(
        null=False,
    )
    opponent_score = models.IntegerField(
        null=False,
    )

    # Perceived competitiveness of the match (easy, moderate, hard sliding scale 1-10)
    match_competitiveness_rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)]
    )
    # Perceived skill level of the other person (beginner, intermediate, expert, sliding scale 1-5)
    peer_skill_level_given = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    # Overall and sportsmanship of the other person (1-5 Uber stars)
    peer_sportsmanship_rating_given = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    # Airbnb review
    peer_feedback_blurb_given = models.TextField(
        null=True
    )

    def __str__(self):
        return \
            f"""
            PostMatchFeedback completed by {self.user.username}
            for match between {self.match.submitter.username} & {self.match.opponent.username}
            on {self.match.match_offer.start_datetime}
            """
