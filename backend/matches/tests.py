from django.contrib.auth import get_user_model
from django.test import TestCase
import datetime

from .models import Match


class MatchTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user1 = get_user_model().objects.create_user(
            username="chris",
            email="chris@email.com",
            password="password",
            first_name="Chris",
            last_name="Fok",
            dob=datetime.datetime.strptime('05-02-2002', "%d-%m-%Y").date(),
            gender="M",
        )
        cls.user2 = get_user_model().objects.create_user(
            username="sam",
            email="sam@email.com",
            password="password",
            first_name="Sam",
            last_name="Kim",
            dob=datetime.datetime.strptime('04-06-1989', "%d-%m-%Y").date(),
            gender="M",
        )
        cls.match = Match.objects.create(
            submitter=cls.user1,
            opponent=cls.user2,
            submitter_score=21,
            opponent_score=18
        )

    def test_match_model(self):
        self.assertEqual(self.match.submitter.username, "chris")
        self.assertEqual(self.match.opponent.username, "sam")

