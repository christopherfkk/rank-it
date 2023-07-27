from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Notification, NotificationObject, NotificationType


class NotificationTypeSerializer(serializers.ModelSerializer):
    """
    Serializer for the NotificationObject model
    """

    class Meta:
        fields = "__all__"
        model = NotificationType


class NotificationObjectSerializer(serializers.ModelSerializer):
    """
    Serializer for the NotificationObject model
    """
    # Nested serializers to show the full object details when retrieving
    notification_type = NotificationTypeSerializer(read_only=True)

    class Meta:
        fields = "__all__"
        model = NotificationObject


class NotificationSerializer(serializers.ModelSerializer):
    """
    Serializer for the Notification model
    """
    # Nested serializers to show the full object details when retrieving
    notification_object = NotificationObjectSerializer(read_only=True)

    # # IDs to only specify the object ID when creating/updating
    # submitter_id = serializers.PrimaryKeyRelatedField(
    #     queryset=get_user_model().objects.all(),
    #     source='submitter',
    #     write_only=True,
    #     required=False,
    #     allow_null=True,
    # )

    class Meta:
        fields = "__all__"
        model = Notification
