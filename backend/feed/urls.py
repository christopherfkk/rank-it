from django.urls import include, path
from rest_framework.routers import SimpleRouter

from .views import UserFollowingViewSet, FeedListView

router = SimpleRouter()
router.register("social", UserFollowingViewSet, basename='social')

urlpatterns = [
    path('', FeedListView.as_view()),
    path('', include(router.urls)),
]
