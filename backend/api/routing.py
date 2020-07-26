from django.urls import re_path,path

from .consumers import ChatConsumer,LobbyConsumer

websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<room_name>\w+)/$', ChatConsumer),
    re_path(r'ws/lobby/',LobbyConsumer),
]

