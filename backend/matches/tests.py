from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
import datetime

from .models import Community, MatchOffer, Match, PostMatchFeedback


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
            start_datetime=datetime.datetime(2023, 7, 30, 17, 0, 0),
            end_datetime=datetime.datetime(2023, 7, 30, 18, 0, 0),
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
            'start_datetime': '2023-07-31 17:00:00',
            'end_datetime': '2023-07-31 18:00:00',
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
        self.assertEqual(match_counteroffer['start_date'], '2023-07-31 17:00:00')
        self.assertEqual(match_counteroffer['end_datetime'], '2023-07-31 18:00:00')
        self.assertEqual(match_counteroffer['community']['name'], 'Tokyo National Badminton Gym')  # full community detail
        self.assertEqual(match_counteroffer['status'], 'Pending')
        self.assertEqual(match_counteroffer['is_counter_offer'], True)
        self.assertEqual(match_counteroffer['last_offer_id'], 1)

        # Check if new MatchOffer exists in database
        self.assertTrue(MatchOffer.objects.filter(pk=match_counteroffer['id']).exists())

        self.client.logout()


class PostMatchFeedbackTest(MatchOfferTest):

    def test_both_submit_feedback_with_same_submitted_scores(self):
        """CREATE PostMatchFeedback"""
        pass

    def test_both_submit_feedback_with_different_submitted_scores(self):
        """CREATE PostMatchFeedback and Set some self attribute for ProofOfMatchTest"""
        pass

    def test_only_one_submits_feedback(self):
        pass

    def test_neither_submits_feedback(self):
        """UPDATE MatchOffer"""
        pass


class ProofOfMatchTest(PostMatchFeedbackTest):

    def test_same_resubmitted_scores(self):
        pass

    def test_different_resubmitted_scores(self):
        pass

    def test_only_one_resubmitted_score(self):
        pass
