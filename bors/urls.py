from django.urls import path
from .views import index,UnavailableTiwtView
urlpatterns = [
    path('',index,name='index'),
    path('remove/twit/<int:pk>/',UnavailableTiwtView.as_view()),
    
]