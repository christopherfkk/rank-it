from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import AccountViewSet, GoogleLogin

router = SimpleRouter()
router.register("", AccountViewSet, basename='accounts')

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls')),
    path('google/', GoogleLogin.as_view(), name='google_login')
] + router.urls
