from rest_framework import permissions


class IsPlayerOrAnyReadOnly(permissions.BasePermission):
    """
    A permission class for the Match view set so that only
    - A player (either submitter/opponent) can cancel the match
    """
    def has_permission(self, request, view):
        """Any authenticated user can GET and see the matches"""
        if request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        """Only admin or a player can PUT and update the match status"""
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_superuser or obj.submitter == request.user or obj.opponent == request.user


class IsOpponent(permissions.BasePermission):
    """
    A permission class for the MatchOffer view set so that only
    - An opponent can accept or decline a match offer
    """
    def has_permission(self, request, view):
        """Any authenticated user can GET and see the match offer"""
        if request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        """Only the opponent can PUT and update the match offer status"""
        return obj.opponent == request.user


class IsSubmitter(permissions.BasePermission):
    """
    A permission class for the MatchOffer view set so that only
    - A submitter can rescind a match offer
    """
    def has_permission(self, request, view):
        """Any authenticated user can GET and see the match offer"""
        if request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        """Only the submitter can PUT and update the match offer status"""
        return obj.submitter == request.user


class IsReporterOrAnyReadOnly(permissions.BasePermission):
    """
    A permission class for the MatchOffer view set so that only
    - A reporter (either submitter or opponent) can report post-match feedback
    """
    def has_permission(self, request, view):
        """Any authenticated user can GET and see the match offer"""
        if request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        """Only the reporter can POST or PUT a post-match feedback"""
        return request.user == obj.reporter
