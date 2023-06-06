from django.contrib.auth import get_user_model
from django.test import TestCase


class UsersManagersTests(TestCase):

    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            username="normal-user",
            email="normal@user.com",
            password="password",
            first_name="Normal",
            last_name="User",
            age=21,
            gender="M",
        )
        self.assertEqual(user.username, "normal-user")
        self.assertEqual(user.email, "normal@user.com")
        self.assertEqual(user.first_name, "Normal")
        self.asserEqual(user.last_name, "User")
        self.assertEqual(user.age, 21)
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
            age=42,
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
