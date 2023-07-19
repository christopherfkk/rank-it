from rest_framework import serializers
from django.contrib.auth import get_user_model

from accounts.serializers import AccountSerializer
from .models import Skill


class SkillSerializer(serializers.ModelSerializer):
    """
    Serializer for the Skill model
    """
    # Nested serializers to show the full object details when retrieving
    user = AccountSerializer(read_only=True)

    # IDs to only specify the object ID when creating/updating
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='user',
        write_only=True,
        required=False,
        allow_null=True,
    )

    class Meta:
        fields = "__all__"
        model = Skill