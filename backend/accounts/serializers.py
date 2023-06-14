from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model

from .models import CustomUser


class AccountSerializer(serializers.ModelSerializer):
    """Serializer for UserViewSet and for dj-rest-auth UserDetailSerializer"""
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'dob', 'gender',)


class CustomRegisterSerializer(RegisterSerializer):
    """Serializer for the default account registration form in DRF"""

    username = serializers.CharField(
        required=False,
        allow_blank=True,
    )
    first_name = serializers.CharField(
        required=False,
        allow_blank=True,
        max_length=30,
    )
    last_name = serializers.CharField(
        required=False,
        allow_blank=True,
        max_length=30,
    )
    dob = serializers.DateField(
        required=False,
        allow_null=True,
    )
    gender = serializers.ChoiceField(
        required=False,
        allow_blank=True,
        choices=CustomUser.Gender.choices,
    )

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['username'] = self.validated_data.get('username', '')
        data['first_name'] = self.validated_data.get('first_name', '')
        data['last_name'] = self.validated_data.get('last_name', '')
        data['dob'] = self.validated_data.get('dob', None)
        data['gender'] = self.validated_data.get('gender', '')
        return data
