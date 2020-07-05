from django.urls import path
from django.conf.urls import url, include

from . import views
urlpatterns = [
    path('',views.index,name='index'),
    path('search/',views.Search.as_view(),name="search"),
    url(r'^(?P<year>\d{4})-(?P<month>\d{2})-(?P<day>\d{2})$',views.SearchByDate.as_view(),name="searchByData"),
    path('remove/twit/<int:pk>/',views.UnavailableTiwtView.as_view()),
    
]