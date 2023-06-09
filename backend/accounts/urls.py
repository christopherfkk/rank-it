from django.urls import path, include
from dj_rest_auth.views import (
LoginView, LogoutView, PasswordResetView, PasswordResetConfirmView
)
from .views import CustomRegisterView

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls')),
]
