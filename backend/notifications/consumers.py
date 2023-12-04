import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from channels.layers import get_channel_layer

from .models import Notification
from .serializers import NotificationSerializer


class NotificationConsumer(WebsocketConsumer):

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.user_id = None
        self.group_name = None
        self.group_name = "realtime-notification-"

    def connect(self):
        self.user_id = self.scope['url_route']['kwargs']['user_id']
        self.group_name = f'realtime-notification-{self.user_id}'

        # Accept connection
        self.accept()

        # Join the ranking group to receive update on rankings
        async_to_sync(self.channel_layer.group_add)(
            self.group_name,
            self.channel_name,
        )

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.group_name,
            self.channel_name,
        )

    def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        event_name = text_data_json["event"]
        if event_name == "request_notifications":
            send_latest_notifcation(int(text_data_json['userId']))

    def latest_notifications(self, event):
        self.send(text_data=json.dumps(event))


def send_latest_notifcation(user_id):
    queryset = Notification.objects.filter(notifier__id=user_id, status="Unread")
    serializer = NotificationSerializer(queryset, many=True)
    data = serializer.data

    channel_layer = get_channel_layer()

    message = {
        'type': 'latest_notifications',
        'notification': data,
        'created': False,
    }
    async_to_sync(channel_layer.group_send)(f'realtime-notification-{user_id}', message)
    print("SENT LATEST NOTIFS")
    print(data)
