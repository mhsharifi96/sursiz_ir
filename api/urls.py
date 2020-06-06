
from django.urls import path
from .views import TwitApiView,TwitDetailApiView
urlpatterns = [
    path('twit',TwitApiView.as_view()),
    # path('twit/<int:pk>/',TwitDetailApiView.as_view())

]