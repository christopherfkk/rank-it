from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import MatchOfferViewSet, MatchViewSet, PostMatchFeedbackViewSet


router = SimpleRouter()
router.register("matchoffer", MatchOfferViewSet, basename='matchoffer')
router.register("match", MatchViewSet, basename='match')
router.register("postmatchfeedback", PostMatchFeedbackViewSet, basename='postmatchfeedback')

urlpatterns = [
    path('', include(router.urls)),
]
