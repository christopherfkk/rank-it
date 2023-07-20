from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import SkillViewSet


router = SimpleRouter()
router.register("skill", SkillViewSet, basename='skill')

urlpatterns = [
    path('', include(router.urls)),
]
