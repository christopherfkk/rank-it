from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import UserFollowing
from accounts.serializers import AccountSerializer


class UserFollowingSerializer(serializers.ModelSerializer):
    """
    Serializer for the Match model
    """
    # Nested serializers when retrieving
    user = AccountSerializer(read_only=True)
    user_following = AccountSerializer(read_only=True)

    # IDs when creating/updating
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='user',
        write_only=True,
        required=False,
        allow_null=True,
    )
    user_following_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='user_following',
        write_only=True,
        required=False,
        allow_null=True,
    )

    class Meta:
        fields = "__all__"
        model = UserFollowing