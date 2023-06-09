from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser

from .serializers import AccountSerializer


class AccountViewSet(viewsets.ModelViewSet):  # new
    permission_classes = (IsAdminUser, )
    queryset = get_user_model().objects.all()
    serializer_class = AccountSerializer
