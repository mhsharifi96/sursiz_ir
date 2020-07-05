import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer,JsonWebsocketConsumer

class ChatConsumer(JsonWebsocketConsumer):
    def connect(self):
        print("iam here")
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        print(self.room_name)
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        print(text_data)
        print(type(text_data))
        pass
            # text_data_json = json.loads(text_data)
            # message = text_data_json['message']

            # # Send message to room group
            # async_to_sync(self.channel_layer.group_send)(
            #     self.room_group_name,
            #     {
            #         'type': 'chat_message',
            #         'message': message
            #     }
            # )

    # Receive message from room group
    def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))