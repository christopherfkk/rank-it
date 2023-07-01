from rest_framework.permissions import BasePermission


class IsAdminUserOrSelf(BasePermission):
    """
    A permission class for the user model so that
    - a superuser can perform any action on all accounts or individual accounts, but
    - a normal user can only PUT and GET on their own accounts. However, a normal user can still GET all accounts
    """
    # POST is performed by the adapter or user manager
    # DELETE is not allowed, change user.is_active to False instead
    USER_MODEL_ALLOWED_METHODS = ('PUT', 'GET',)

    def has_permission(self, request, view):
        """Only allow PUT or GET requests for authenticated users"""
        if request.method in self.USER_MODEL_ALLOWED_METHODS and request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        """Allow users to modify their own instance"""
        if (request.method in self.USER_MODEL_ALLOWED_METHODS) and (request.user == obj or request.user.is_superuser):
            return True
        return False
