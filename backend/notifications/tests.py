from django.test import TransactionTestCase, TestCase
from django.contrib.auth import get_user_model
from django.core.management import call_command
from django.conf import settings
import datetime
import os

from .service import send_notification
from .models import NotificationType, NotificationObject, NotificationTrigger, Notification
from matches.models import MatchOffer, Match, PostMatchFeedback
from communities.models import Community


class NotificationServiceTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        """Set up the submitter, the opponent, the community, the match offer, the match, and the API client"""

        fixture_path = os.path.join(settings.BASE_DIR, 'fixtures/notification_type.yaml')
        call_command('loaddata', fixture_path)

        cls.admin = get_user_model().objects.create_superuser(
            email='admin@email.com',
            password='testpass123',
        )

        cls.submitter = get_user_model().objects.create_user(
            email='chris@email.com',
            password='testpass123',
            username='chris',
        )
        cls.opponent = get_user_model().objects.create_user(
            email='jim@email.com',
            password='testpass123',
            username='jim'
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
        cls.match = Match.objects.create(
            match_offer=cls.match_offer,
            submitter=cls.submitter,
            opponent=cls.opponent,
            status='Pending',
        )

    def test_send_match_offer(self):

        # Send a notification
        send_notification(
            NotificationType.Entity.MATCH_OFFER,
            NotificationType.Description.MATCH_OFFER_SENT,
            self.match_offer.id,
            self.submitter,
            [self.opponent, ],
        )

        # Check the NotificationObject, NotificationTrigger, and Notification exists.
        self.assertTrue(
            NotificationObject.objects.filter(
                entity_id=self.match_offer.id,
                notification_type__description=NotificationType.Description.MATCH_OFFER_SENT
            ).exists()
        )
        self.assertTrue(
            NotificationTrigger.objects.filter(
                actor=self.submitter
            ).exists()
        )

        notif = Notification.objects.get(
            notifier=self.opponent,
        )
        self.assertTrue(notif)
        self.assertEqual(notif.message, "chris@email.com sent you a match offer!")

    def test_decline_match_offer(self):
        pass

    def test_rescind_match_offer(self):
        pass

    def test_accept_match_offer_and_create_match(self):

        # Send a notification
        send_notification(
            NotificationType.Entity.MATCH_OFFER,
            NotificationType.Description.MATCH_OFFER_ACCEPTED,
            self.match_offer.id,
            self.opponent,  # opponent accepts
            [self.submitter, ],  # submitter is notified
        )

        # Send another
        send_notification(
            NotificationType.Entity.MATCH,
            NotificationType.Description.MATCH_CREATED,
            self.match.id,
            self.admin,
            [self.submitter, self.opponent, ],
        )

        self.assertEqual(
            Notification.objects.get(
                notifier=self.submitter,
                notification_object__notification_type__entity="MatchOffer",
            ).message,
            "jim@email.com accepted your match offer!"
        )

        self.assertEqual(
            Notification.objects.get(
                notifier=self.opponent,
                notification_object__notification_type__entity="Match",
            ).message,
            "Your match chris@email.com vs jim@email.com is scheduled!"
        )

    def test_cancel_match(self):
        pass

    def test_report_post_match_feedback(self):
        pass
