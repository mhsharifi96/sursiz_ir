
from django.urls import path
from .views import TwitApiAdminView,TwitDetailApiView,TwitApiView
urlpatterns = [
    path('twit',TwitApiAdminView.as_view()),
    path('app/twit/',TwitApiView.as_view()),
    # path('twit/<int:pk>/',TwitDetailApiView.as_view())

]