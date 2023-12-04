import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from ranks.signals import send_latest_ranking


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
        text_data_json = json.loads(text_data)
        event_name = text_data_json["event"]
        if event_name == "request_ranking":
            send_latest_ranking()

    def latest_ranking(self, event):
        self.send(text_data=json.dumps(event))
