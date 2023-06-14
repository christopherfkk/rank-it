from django.contrib.auth import get_user_model
from rest_framework import viewsets
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client

from .serializers import AccountSerializer
from .permission import IsAdminUserOrSelf


class AccountViewSet(viewsets.ModelViewSet):
    """View set for the user model"""
    permission_classes = (IsAdminUserOrSelf, )
    queryset = get_user_model().objects.all()
    serializer_class = AccountSerializer

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)


class GoogleLogin(SocialLoginView):
    """View for Google Login"""
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://127.0.0.1:8000/accounts/google/login/callback/"
    client_class = OAuth2Client
