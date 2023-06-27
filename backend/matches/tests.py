from django.contrib.auth import get_user_model
from django.test import TestCase
from django.utils import timezone
from rest_framework.test import APIClient
from rest_framework import status
import datetime

from .models import MatchOffer, Match, PostMatchFeedback
from ../communities/models import Community
from ../notifications/models import Notification


"""
    Test suite for RankIt's match offer -> match -> post-match feedback logistics.

    APIs
    - /matchoffer POST CREATE
    - /matchoffer/<id>/accept POST UPDATE
        - /match/ POST CREATE
    - /matchoffer/<id>/decline POST UPDATE
    - /match/<id>/cancel POST UPDATE
    - /postmatchfeedback/ POST CREATE
    
    - handling notification logic?
    
    - GETs (analytics)
    list of match offers
    list of match results
    number of wins and loses
    
    """


class MatchOfferTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        """Set up a submitter user, an opponent user, a community object, and an API client"""

        cls.submitter = get_user_model().objects.create_user(
            email='chris@email.com',
            password='testpass123',
            first_name='Chris',
            last_name='Fok'
        )
        cls.opponent = get_user_model().objects.create_user(
            email='jim@emamil.com',
            password='testpass123',
            first_name='Jim',
            last_name='Tanaka',
        )
        cls.community = Community.objects.create(
            country='Japan',
            city='Tokyo',
            name='Tokyo National Badminton Gym',
        )
        cls.match_offer = MatchOffer.objects.create(
            submitter=cls.submitter,
            opponent=cls.opponent,
            start_datetime=datetime.datetime(2023, 7, 10, 17, 0, 0),
            end_datetime=datetime.datetime(2023, 7, 10, 18, 0, 0),
            community=cls.community,
            status='Pending',
            is_counter_offer=False,
            last_offer_id=None,
        )
        cls.client = APIClient()

    def test_create_match_offer(self):
        """
        Test when submitter makes a match offer to an opponent
        - POST to /api/v1/matchoffer/ to CREATE a new MatchOffer model
        - Return in the HTTP response the details of the MatchOffer and the nested details of the users and community
        - Exist in database
        """

        match_offer_data = {
            'submitter_id': str(self.submitter.id),
            'opponent_id': str(self.opponent.id),
            'start_datetime': '2023-07-15 17:00:00',
            'end_datetime': '2023-07-15 18:00:00',
            'community_id': str(self.community.id),
            'status': 'Pending',
            'is_counter_offer': False,
            'last_offer_id': None,
        }

        # Login and make POST to CREATE MatchOffer
        self.client.login(email='chris@email.com', password='testpass123')

        response = self.client.post('/api/v1/matchoffer/', match_offer_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Response should have MatchOffer details for frontend rendering
        data = response.data
        self.assertEqual(data['id'], 2)
        self.assertEqual(data['submitter']['first_name'], 'Chris')  # full user detail
        self.assertEqual(data['opponent']['first_name'], 'Jim')  # full user detail
        self.assertEqual(data['start_date'], '2023-07-15 17:00:00')
        self.assertEqual(data['end_datetime'], '2023-07-15 18:00:00')
        self.assertEqual(data['community']['name'], 'Tokyo National Badminton Gym')  # full community detail
        self.assertEqual(data['status'], 'Pending')

        # Check if MatchOffer exists in database
        self.assertTrue(MatchOffer.objects.filter(pk=data['id']).exists())

        self.client.logout()

    def test_accept_match_offer(self):
        """
        Test when an opponent accepts a MatchOffer
        - PUT to /api/v1/matchoffer/<id>/accept to UPDATE the MatchOffer model
        - API should create a new Match model with status "Pending"
        - Return in the HTTP response the details of the Match and its nested details
        - Exist in database
        """
        # Login and make PUT to UPDATE MatchOffer
        self.client.login(email='jim@email.com', password='testpass123')

        response = self.client.put(f'/api/v1/matchoffer/{self.match_offer.id}/accept')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Response should have Match details for frontend rendering
        data = response.data
        self.assertEqual(data['id'], 1)
        self.assertEqual(data['match_offer']['id'], 1)  # full matchoffer detail
        self.assertEqual(data['match_offer']['status'], 'Accepted')
        self.assertEqual(data['submitter']['first_name'], 'Chris')  # full user detail
        self.assertEqual(data['opponent']['first_name'], 'Jim')  # full user detail
        self.assertEqual(data['status'], 'Pending')

        # Check if Match exists in database
        self.assertTrue(Match.objects.filter(pk=data['id']).exists())
        self.client.logout()

    def test_decline_match_offer(self):
        """
        Test when an opponent declines a MatchOffer
        - PUT to /api/v1/matchoffer/<id>/decline to UPDATE the MatchOffer model
        - Return in the HTTP response MatchOffer detail
        """
        # Login and make PUT to UPDATE MatchOffer
        self.client.login(email='jim@email.com', password='testpass123')

        response = self.client.put(f'/api/v1/matchoffer/{self.match_offer.id}/decline')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Response should have Match details for frontend rendering
        data = response.data
        self.assertEqual(data['id'], 1)
        self.assertEqual(data['submitter']['first_name'], 'Chris')  # full user detail
        self.assertEqual(data['opponent']['first_name'], 'Jim')  # full user detail
        self.assertEqual(data['start_date'], '2023-07-15 17:00:00')
        self.assertEqual(data['end_datetime'], '2023-07-15 18:00:00')
        self.assertEqual(data['community']['name'], 'Tokyo National Badminton Gym')  # full community detail
        self.assertEqual(data['status'], 'Declined')

        self.client.logout()

    def test_forbid_accept_or_decline_match_offer(self):
        """
        Test when any user other than the opponent accepts/declines a MatchOffer
        - Should throw HTTP_403_FORBIDDEN
        """
        self.client.login(email='chris@email.com', password='testpass123')

        response = self.client.put(f'/api/v1/matchoffer/{self.match_offer.id}/accept')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        response = self.client.put(f'/api/v1/matchoffer/{self.match_offer.id}/decline')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        self.client.logout()

    def test_counter_match_offer(self):
        """
        Test when the opponent makes a counteroffer for the submitter
        - PUT to api/v1/matchoffer/<id>/decline to UPDATE MatchOffer status to declined
        - POST to api/v1/matchoffer/ to CREATE new Matchoffer with is_counter_offer = True and last_offer_id = NOT None
        """

        self.client.login(email='jim@email.com', password='testpass123')

        response = self.client.put(f'/api/v1/matchoffer/{self.match_offer.id}/decline')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Response should have Match details for frontend rendering
        match_offer = response.data
        self.assertEqual(match_offer['id'], 1)
        self.assertEqual(match_offer['status'], 'Declined')

        match_counteroffer_data = {
            'submitter_id': str(self.opponent.id),
            'opponent_id': str(self.submitter.id),
            'start_datetime': '2023-07-15 17:00:00',
            'end_datetime': '2023-07-15 18:00:00',
            'community_id': str(self.community.id),
            'status': 'Pending',
            'is_counter_offer': True,
            'last_offer_id': match_offer['id'],
        }

        # Make counteroffer
        response = self.client.post('/api/v1/matchoffer/', match_counteroffer_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Response should have MatchOffer details for frontend rendering
        match_counteroffer = response.data
        self.assertEqual(match_counteroffer['id'], 2)
        self.assertEqual(match_counteroffer['submitter']['first_name'], 'Chris')  # full user detail
        self.assertEqual(match_counteroffer['opponent']['first_name'], 'Jim')  # full user detail
        self.assertEqual(match_counteroffer['start_date'], '2023-07-15 17:00:00')
        self.assertEqual(match_counteroffer['end_datetime'], '2023-07-15 18:00:00')
        self.assertEqual(match_counteroffer['community']['name'], 'Tokyo National Badminton Gym')  # full community detail
        self.assertEqual(match_counteroffer['status'], 'Pending')
        self.assertEqual(match_counteroffer['is_counter_offer'], True)
        self.assertEqual(match_counteroffer['last_offer_id'], 1)

        # Check if new MatchOffer exists in database
        self.assertTrue(MatchOffer.objects.filter(pk=match_counteroffer['id']).exists())

        self.client.logout()


class PostMatchFeedbackTest(MatchOfferTest):

    @classmethod
    def setUpTestData(cls):
        """Inherit the submitter, the opponent, the community, the match offer, and the API client"""
        cls.match = Match.objects.create(
            match_offer=self.match_offer,
            submitter=self.submitter,
            opponent=self.opponent,
            status='Pending',
        )

    def test_cancel_match(self):
        """
        Test when submitter or opponent cancels the match before match date
        - PUT to /api/v1/match/<id>/cancel to UPDATE status and add reason_phrase
        """
        self.client.login(email='chris@email.com', password='testpass123')

        response = self.client.put(f'/api/v1/match/{self.match.id}/cancel')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        data = response.data
        self.assertEqual(data['id'], 1)
        self.assertEqual(data['match_offer']['id'], 1)
        self.assertEqual(data['submitter']['first_name'], 'Chris')  # full user detail
        self.assertEqual(data['opponent']['first_name'], 'Jim')  # full user detail
        self.assertEqual(data['status'], 'Cancelled')
        self.assertEqual(data['match_cancelled_reason_phrase'], 'Submitter cancelled match')  # Reason phrase

        self.client.logout()

    def test_both_submit_feedback_with_same_submitted_scores(self):
        """
        Test the ideal case when submitter and opponent both submit feedback with the same scores
        - POST to /api/v1/postmatchfeedback/ to CREATE new PostMatchFeedback
        """

        submitter_feedback = {
            'match_id': self.match.id,
            'user_id': self.submitter.id,
            'user_is_match_offer_submitter': True,
            'submitter_score': 21,
            'opponent_score': 15,
            'match_competitive_rating': 8,
            'peer_skill_level_received': 8,
            'peer_sportsmanship_rating_received': 4,
            'peer_feedback_blurb_received': 'Definitely play Chris again. Great player.',
        }

        opponent_feedback = {
            'match_id': self.match.id,
            'user_id': self.opponent.id,
            'user_is_match_offer_submitter': False,
            'submitter_score': 21,
            'opponent_score': 15,
            'match_competitive_rating': 9,
            'peer_skill_level_received': 5,
            'peer_sportsmanship_rating_received': 5,
            'peer_feedback_blurb_received': 'Jim is a nice player.',
        }

        # Submitter logins and gives feedback. Status should be 'Awaiting confirmation'. No scores are confirmed in Match model.
        self.client.login(email='chris@email.com', password='testpass123')
        response = self.client.post(f'/api/v1/postmatchfeedback/', submitter_feedback)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['match']['status'], 'Awaiting confirmation')  # TODO: Possible constant
        self.assertEqual(response.data['match']['submitter_score'], None)
        self.assertEqual(response.data['match']['opponent_score'], None)
        self.client.logout()

        # Submitter logins and gives feedback. Status should be 'Confirmed'. Scores are confirmed in Match model.
        self.client.login(email='jim@email.com', password='testpass123')
        response = self.client.post(f'/api/v1/postmatchfeedback/', opponent_feedback)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['match']['status'], 'Match confirmed')  # TODO: Possible constant
        self.assertEqual(response.data['match']['submitter_score'], 21)
        self.assertEqual(response.data['match']['opponent_score'], 15)
        self.client.logout()

    def test_both_submit_feedback_with_different_submitted_scores(self):
        """
        Test when submitter and opponent submits different scores
        - POST to /api/v1/postmatchfeedback/
        -
        """

        submitter_feedback = {
            'match_id': self.match.id,
            'user_id': self.submitter.id,
            'user_is_match_offer_submitter': True,
            'submitter_score': 21,
            'opponent_score': 15,
            'match_competitive_rating': 8,
            'peer_skill_level_received': 8,
            'peer_sportsmanship_rating_received': 4,
            'peer_feedback_blurb_received': 'Definitely play Chris again. Great player.',
        }

        opponent_feedback = {
            'match_id': self.match.id,
            'user_id': self.opponent.id,
            'user_is_match_offer_submitter': False,
            'submitter_score': 20,
            'opponent_score': 21,
            'match_competitive_rating': 9,
            'peer_skill_level_received': 5,
            'peer_sportsmanship_rating_received': 5,
            'peer_feedback_blurb_received': 'Jim is a nice player.',
        }

        # Submitter logins and gives feedback. Status should be 'Awaiting confirmation'. No scores are confirmed in Match model.
        self.client.login(email='chris@email.com', password='testpass123')
        response = self.client.post(f'/api/v1/postmatchfeedback/', submitter_feedback)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['match']['status'], 'Awaiting confirmation')  # TODO: Possible constant
        self.assertEqual(response.data['match']['submitter_score'], None)
        self.assertEqual(response.data['match']['opponent_score'], None)
        self.client.logout()

        # Submitter logins and gives feedback. Status should be 'Confirmed'. Scores are confirmed in Match model.
        self.client.login(email='jim@email.com', password='testpass123')
        response = self.client.post(f'/api/v1/postmatchfeedback/', opponent_feedback)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['match']['status'], 'Cancelled')
        self.assertEqual(response.data['match']['submitter_score'], None)
        self.assertEqual(response.data['match']['opponent_score'], None)
        self.assertEqual(response.data['match']['match_cancelled_reason_phrase'], 'Match scores conflicted')  # TODO: Possible constant
        self.client.logout()

        # Check if a match score resubmission notification is sent out to both
        # self.assertEqual(Notification.objects.filter(
        #     user=self.submitter).first().message,
        #     'Match scores conflicted. Which one is it? 21-15 or 20-21?'
        # )  # TODO: Possible constant
        # self.assertEqual(Notification.objects.filter(
        #     user=self.opponent).first().message,
        #     'Match scores conflicted. Which one is it? 21-15 or 20-21?'
        # )  # TODO: Possible constant

    def test_only_one_submits_feedback(self):

        submitter_feedback = {
            'match_id': self.match.id,  # match_id = 1, ref match_offer_id = 1 with play date on 2023/07/10
            'user_id': self.submitter.id,
            'user_is_match_offer_submitter': True,
            'submitter_score': 21,
            'opponent_score': 15,
            'match_competitive_rating': 8,
            'peer_skill_level_received': 8,
            'peer_sportsmanship_rating_received': 4,
            'peer_feedback_blurb_received': 'Definitely play Chris again. Great player.',
        }

        # Same day submission, 2 hours after match
        current_valid_time = timezone.datetime(2023, 7, 10, 20, 0, 0)
        timezone.override(current_valid_time)

        # Submitter logins and gives feedback. Status should be 'Awaiting confirmation'. No scores are confirmed in Match model.
        self.client.login(email='chris@email.com', password='testpass123')

        response = self.client.post(f'/api/v1/postmatchfeedback/', submitter_feedback)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['match']['status'], 'Awaiting confirmation')  # TODO: Possible constant
        self.assertEqual(response.data['match']['submitter_score'], None)
        self.assertEqual(response.data['match']['opponent_score'], None)

        # Get details of match 24 hours after with only one PostMatchFeedback
        current_invalid_time = timezone.datetime(2023, 7, 11, 20, 0, 0)
        timezone.override(current_invalid_time)

        # Saves in get_queryset to check time  # TODO: Should be doable
        response = self.client.get(f'/api/v1/match/{self.match.id}')
        self.assertEqual(response.data['status'], 'Confirmed')
        self.assertEqual(response.data['submitter_score'], '21')
        self.assertEqual(response.data['opponent_score'], '15')

        # Clean up by resetting the current time
        self.client.logout()
        timezone.deactivate()

    def test_neither_submits_feedback(self):
        """UPDATE MatchOffer"""

        # Get details of match 24 hours after with no PostMatchFeedback
        current_time = timezone.datetime(2023, 7, 11, 20, 0, 0)
        timezone.override(current_time)

        self.client.login(email='chris@email.com', password='testpass123')

        # Saves in get_queryset to check time  # TODO: Should be doable
        response = self.client.get(f'/api/v1/match/{self.match.id}')
        self.assertEqual(response.data['status'], 'Cancelled')
        self.assertEqual(response.data['submitter_score'], None)
        self.assertEqual(response.data['opponent_score'], None)

        self.client.logout()

        # Clean up by resetting the current time
        timezone.deactivate()


# class ProofOfMatchTest(PostMatchFeedbackTest):
#
#     @classmethod
#     def setUpTestData(cls):
#         """Inherit the submitter, the opponent, the community, the match offer, the match, and the API client"""
#         cls.submitter_notification = Notifcation.objects.create(
#             user=self.submitter,
#             message='Match scores conflicted. Which one is it? 21-15 or 20-21?',
#             is_read=False
#         )
#         cls.opponent_notifcation = Notifcation.objects.create(
#             user=self.opponent,
#             message='Match scores conflicted. Which one is it? 21-15 or 20-21?',
#             is_read=False
#         )
#
#     def test_same_resubmitted_scores(self):
#         pass
#
#     def test_different_resubmitted_scores(self):
#         pass
#
#     def test_only_one_resubmitted_score(self):
#         pass
