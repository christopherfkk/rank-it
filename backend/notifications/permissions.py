from rest_framework import permissions


class IsNotifier(permissions.BasePermission):
    """
    A permission class for the Notification view set so that only
    - A notifier can see the notification he received
    """
    def has_permission(self, request, view):
        """Any authenticated user see notification"""
        if request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        """Only a notifier update the Notification"""
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.notifier == request.user
