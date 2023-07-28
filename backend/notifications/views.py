from django.db.models import Q
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny

from .models import Notification, NotificationObject
from .permissions import IsNotifier
from .serializers import NotificationSerializer


class NotificationViewSet(viewsets.ModelViewSet):
    """
    View set for the PostMatchFeedback model
    """

    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [IsAdminUser | IsNotifier]

    def get_queryset(self):
        """Queryset is only the feedbacks that the user gave or received"""
        user = self.request.user
        if user.is_superuser:
            return Notification.objects.all()
        return Notification.objects.filter(Q(notifier=user) & Q(status=Notification.Status.UNREAD))
    
    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)
