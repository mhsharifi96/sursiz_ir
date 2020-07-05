from django.urls import path
from . import views
urlpatterns = [
    path('',views.index,name='index'),
    path('search/',views.Search.as_view(),name="search"),
    path('remove/twit/<int:pk>/',views.UnavailableTiwtView.as_view()),
    
]