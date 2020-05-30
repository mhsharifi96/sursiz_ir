
from django.urls import path
from .views import TwitApiView
urlpatterns = [
    path('twit',TwitApiView.as_view()),

]