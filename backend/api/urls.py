
from django.urls import path
from .views import TwitApiAdminView,TwitDetailApiView,TwitApiView,TwitDocumentView,\
    CompanyViewSet,CategoryViewset
from rest_framework.routers import SimpleRouter

app_name = 'api'
router = SimpleRouter()
router.register(
    prefix=r'app/search',
    basename='search',
    viewset=TwitDocumentView
)
router.register(
    r'app/company',
    CompanyViewSet,
    basename='company'
)
router.register(
    r'app/category',
    CategoryViewset,
    basename='category'
)

urlpatterns = [
    path('twit',TwitApiAdminView.as_view()),
    path('app/twit/',TwitApiView.as_view()),
    # path('app/search/',TwitViewSet),
    # path('twit/<int:pk>/',TwitDetailApiView.as_view())

]

urlpatterns += router.urls