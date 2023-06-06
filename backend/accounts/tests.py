from django.contrib.auth import get_user_model
from django.test import TestCase
import datetime


class UsersManagersTests(TestCase):

    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            username="normal-user",
            email="normal@user.com",
            password="password",
            first_name="Normal",
            last_name="User",
            dob=datetime.datetime.strptime('05-02-2002', "%d-%m-%Y").date(),
            gender="M",
        )
        self.assertEqual(user.username, "normal-user")
        self.assertEqual(user.email, "normal@user.com")
        self.assertEqual(user.first_name, "Normal")
        self.asserEqual(user.last_name, "User")
        self.assertEqual(user.dob, datetime.datetime(2002, 2, 5))
        self.assertEqual(user.gender, "M")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

        with self.assertRaises(TypeError):
            User.objects.create_user()
        with self.assertRaises(TypeError):
            User.objects.create_user(username="", email="")
        with self.assertRaises(ValueError):
            User.objects.create_user(username="", email="", password="foo")

    def test_create_superuser(self):
        User = get_user_model()
        admin = User.objects.create_superuser(
            username="super-user",
            email="super@user.com",
            password="password",
            first_name="Super",
            last_name="User",
            dob=datetime.datetime.strptime('05-02-1990', "%d-%m-%Y").date(),
            gender="M",
        )
        self.assertEqual(admin.username, "super-user")
        self.assertEqual(admin.email, "super@user.com")
        self.assertTrue(admin.is_active)
        self.assertTrue(admin.is_staff)
        self.assertTrue(admin.is_superuser)

        with self.assertRaises(ValueError):
            User.objects.create_superuser(
                email="super@user.com", password="foo", is_superuser=False)
