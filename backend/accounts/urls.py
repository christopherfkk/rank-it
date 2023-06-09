from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import AccountViewSet

router = SimpleRouter()
router.register("", AccountViewSet, basename='accounts')

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls')),
] + router.urls
