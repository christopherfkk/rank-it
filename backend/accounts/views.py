from django.contrib.auth import get_user_model
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import viewsets
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from rest_framework.decorators import action

from .serializers import AccountSerializer
from .permission import IsAdminUserOrSelf
from ranks.models import Skill


class AccountViewSet(viewsets.ModelViewSet):
    """View set for the CustomUser model"""
    permission_classes = (IsAdminUserOrSelf, )
    queryset = get_user_model().objects.all()
    serializer_class = AccountSerializer
    # Expects content type "multipart/form-data" for avatar upload
    parser_classes = (MultiPartParser, FormParser)

    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)

    @action(detail=True, methods=['PUT'], url_path='setup')
    def setup(self, request, *args, **kwargs):
        """A custom action for the player to cancel the match"""
        data = self.update(request, *args, **kwargs)
        Skill.objects.create(user=request.user)
        return data


class GoogleLogin(SocialLoginView):
    """View for Google Login"""
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://127.0.0.1:8000/accounts/google/login/callback/"
    client_class = OAuth2Client
