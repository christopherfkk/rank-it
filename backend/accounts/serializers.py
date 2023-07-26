from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token


class AccountSerializer(serializers.ModelSerializer):
    """Serializer for UserViewSet and for dj-rest-auth UserDetailSerializer"""
    class Meta:
        model = get_user_model()
        fields = (
            'id', 'email', 'username', 'first_name', 'last_name', 'level',
            'matches_played', 'matches_won',
        )


class CustomRegisterSerializer(RegisterSerializer):
    """Serializer for the default account registration form in DRF"""

    username = serializers.CharField(
        required=False,
        allow_blank=True,
    )

    # Add more serializer fields if you want more fields in the default account registration form in DRF

    def get_cleaned_data(self):
        data = super().get_cleaned_data()  # username cannot be null but can be "" or not defined at all
        if data['username'] == '':  # if empty string, set username to None
            data['username'] = None
        return data


class TokenSerializer(serializers.ModelSerializer):

    user = AccountSerializer(read_only=True)

    # IDs to only specify the object ID when creating/updating
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='submitter',
        write_only=True,
        required=False,
        allow_null=True,
    )

    class Meta:
        model = Token
        # fields = ('key', 'user')
        fields = "__all__"
