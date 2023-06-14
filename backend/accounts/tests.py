from django.test import TestCase
from django.http import HttpResponse
from django.contrib.auth import get_user_model
from django.db.utils import IntegrityError
from rest_framework.test import APIClient
from rest_framework import status

import datetime
from unittest.mock import patch
import json


class UserManagerTests(TestCase):
    """
    Tests for CustomUserManager that can create a user with only
    an email and password at minimum.
    """
    def test_create_user(self):
        """Test create a normal user"""
        User = get_user_model()

        # Create a normal user
        user = User.objects.create_user(
            username="normal-user",
            email="normal@user.com",
            password="password",
            first_name="Normal",
            last_name="User",
            dob=datetime.datetime.strptime('05-02-2002', "%d-%m-%Y").date(),
            gender="M",
        )

        # Assert the data type and default values
        self.assertEqual(user.username, "normal-user")
        self.assertEqual(user.email, "normal@user.com")
        self.assertEqual(user.first_name, "Normal")
        self.assertEqual(user.last_name, "User")
        self.assertEqual(user.dob, datetime.date(2002, 2, 5))
        self.assertEqual(user.gender, "M")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

        # TypeError if no email nor password
        with self.assertRaises(TypeError):
            User.objects.create_user()
        # TypeError if no password
        with self.assertRaises(TypeError):
            User.objects.create_user(email="")
        # ValueError if email is empty
        with self.assertRaises(ValueError):
            User.objects.create_user(email="", password="foo")

    def test_create_superuser(self):
        """Test create a superuser"""
        User = get_user_model()

        # Create a superuser
        admin = User.objects.create_superuser(
            email="super@user.com",
            password="password",
        )
        self.assertEqual(admin.email, "super@user.com")
        self.assertTrue(admin.is_active)
        self.assertTrue(admin.is_staff)
        self.assertTrue(admin.is_superuser)

        with self.assertRaises(ValueError):
            User.objects.create_superuser(
                email="super@user.com", password="foo", is_superuser=False
            )

    def test_duplicate_username(self):
        """Duplicated username not allowed in database"""
        User = get_user_model()
        user = User.objects.create_user(
            username="normal-user",
            email="normal1@user.com",
            password="password",
        )
        with self.assertRaises(IntegrityError):
            User.objects.create_user(
                username="normal-user",
                email="normal2@user.com",
                password="password",
            )

    def test_duplicate_email(self):
        """Duplicated email not allowed in database"""
        User = get_user_model()
        user = User.objects.create_user(
            username="normal-user-1",
            email="normal@user.com",
            password="password",
        )
        with self.assertRaises(IntegrityError):
            User.objects.create_user(
                username="normal-user-2",
                email="normal@user.com",
                password="password",
            )


class DefaultRegistrationTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_default_registration(self):
        """test POST to registration endpoint"""

        # Not required to specify all fields
        registration_data = {
            'email': 'chris@email.com',
            'password1': 'testpass123',
            'password2': 'testpass123',
        }

        # Send a POST request to the registration endpoint
        response = self.client.post('/api/v1/accounts/registration/', registration_data)

        # Check the response status code
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Assert access and refresh tokens exist
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

        # Add additional assertions to check the response data
        account_detail = response.data['user']
        self.assertEqual(account_detail['id'], 1)
        self.assertEqual(account_detail['email'], 'chris@email.com')
        self.assertEqual(account_detail['first_name'], "")
        self.assertEqual(account_detail['last_name'], "")
        self.assertEqual(account_detail['gender'], "")
        self.assertIsNone(account_detail['dob'])

        self.assertTrue(get_user_model().objects.filter(email="chris@email.com", is_active=True).exists())


class GoogleSigninTest(TestCase):
    def setUp(self):
        self.client = APIClient()

        # Google provides some default values for later account setup
        self.EXPECTED_RESPONSE = {
            "status_code": status.HTTP_201_CREATED,
            "data": {
                "access": "ACCESS_TOKEN",
                "refresh": "REFRESH_TOKEN",
                "user": {
                    "id": 1,
                    "email": "christopherfkk@uni.minerva.edu",
                    "username": "kar_keung_christopher_fok",  # Google fill
                    "first_name": "Kar Keung Christopher",  # Google fill
                    "last_name": "Fok",  # Google fill
                    "dob": None,
                    "gender": "",
                }
            }
        }

    def test_google_sign_in(self):
        """test POST to google endpoint"""

        # Frontend: clicking "Sign-in with Google" obtains an access token to be sent to backend
        data_from_frontend = {
            'access_token': 'google_oauth2_access_token'
        }

        with patch.object(APIClient, 'post', return_value=self.EXPECTED_RESPONSE) as MOCK_POST_RESPONSE:
            self.client.post('/api/v1/accounts/google/', data_from_frontend)

        response = MOCK_POST_RESPONSE.return_value
        self.assertEqual(response["status_code"], status.HTTP_201_CREATED)

        # Assert access and refresh tokens exist
        self.assertIn('access', response["data"])
        self.assertIn('refresh', response["data"])

        # Add additional assertions to check the response data
        account_detail = response["data"]['user']
        self.assertEqual(account_detail['id'], 1)
        self.assertEqual(account_detail['email'], 'christopherfkk@uni.minerva.edu')
        self.assertEqual(account_detail['username'], 'kar_keung_christopher_fok')
        self.assertEqual(account_detail['first_name'], "Kar Keung Christopher")
        self.assertEqual(account_detail['last_name'], "Fok")
        self.assertEqual(account_detail['gender'], "")
        self.assertIsNone(account_detail['dob'])


class DefaultAccountSetUp(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_default_account_setup(self):

        # Register
        resp = self.client.post('/api/v1/accounts/registration/', {'email': 'chris@email.com', 'password1': 'testpass123', 'password2': 'testpass123'})
        access_token = resp.data['access']
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + access_token)

        account_set_up_data = {
            'username': 'chris_fok',
            'first_name': 'Chris',
            'last_name': 'Fok',
            'dob': '1989-02-05',
            'gender': 'M',
        }

        # Send a PUT request to the accounts detail endpoint
        response = self.client.put(f'/api/v1/accounts/{resp.data["user"]["id"]}/', account_set_up_data)

        # Check the response status code
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check if updated
        user = get_user_model().objects.get(email='chris@email.com')
        self.assertEqual(user.username, "chris_fok")
        self.assertEqual(user.first_name, "Chris")
        self.assertEqual(user.last_name, "Fok")
        self.assertEqual(user.dob, datetime.date(1989, 2, 5))
        self.assertEqual(user.gender, "M")
