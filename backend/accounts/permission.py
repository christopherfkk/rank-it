from rest_framework.permissions import BasePermission


class IsAdminUserOrSelf(BasePermission):
    """
    A permission class for the user model so that a superuser can perform any action
    on all accounts or individual accounts. But a normal user can only PUT and GET
    on their own accounts. However, a normal user can still GET all accounts.
    """

    def has_permission(self, request, view):
        """Only allow PUT or GET requests for authenticated users"""
        if request.method in ['PUT', 'GET'] and request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        """Allow users to modify their own instance"""
        if (request.method in ['PUT', 'GET']) and (request.user == obj or request.user.is_superuser):
            return True
        return False
