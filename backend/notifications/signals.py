from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

from .models import Notification
from .serializers import NotificationSerializer


# @receiver(post_save, sender=Notification)
# def push_latest_notification(sender, instance, **kwargs):
#     queryset = Notification.objects.filter(notifier=instance.notifier, status="Unread")
#     serializer = NotificationSerializer(queryset, many=True)
#     data = serializer.data
#
#     channel_layer = get_channel_layer()
#     message = {
#         'type': 'latest_notification',
#         'notification': data,
#     }
#     async_to_sync(channel_layer.group_send)(f'realtime-notification-{instance.notifier.id}', message)
