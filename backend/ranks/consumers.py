import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

from .models import Room


class RankingConsumer(WebsocketConsumer):

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.group_name = "realtime-ranking"

    def connect(self):
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
        print(f"Received text data {text_data}")
        # Send chat message event to the room
        async_to_sync(self.channel_layer.group_send)(
            self.group_name,
            {
                'type': 'latest_ranking',
                'ranking': text_data,
            }
        )

    def latest_ranking(self, event):
        print(f"Latest ranking {event}")
        self.send(text_data=json.dumps(event))
