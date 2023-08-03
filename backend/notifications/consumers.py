import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer


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
        pass

    def latest_notification(self, event):
        self.send(text_data=json.dumps(event))
