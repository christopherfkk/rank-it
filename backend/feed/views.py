from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import generics
from django.db import models

from .models import UserFollowing
from .serializers import UserFollowingSerializer
from matches.models import Match
from matches.serializers import MatchSerializer


class FeedListView(generics.ListAPIView):
    serializer_class = MatchSerializer

    def get_queryset(self):
        # Assuming you have a custom user model
        request_user = self.request.user

        # Step 1: Find the rows in UserFollowing where user = request.user
        user_following_rows = UserFollowing.objects.filter(user=request_user)

        # Step 2: Filter matches where either submitter or opponent is in these rows of UserFollowing as
        # UserFollowing.user_following
        queryset = Match.objects.filter(
            models.Q(submitter__in=user_following_rows.values('user_following')) |
            models.Q(opponent__in=user_following_rows.values('user_following'))
        )

        return queryset


class UserFollowingViewSet(viewsets.ModelViewSet):
    queryset = UserFollowing.objects.all()
    serializer_class = UserFollowingSerializer

    @action(detail=False, methods=['POST'])
    def follow(self, request):
        user_following_id = request.data.get('user_following_id')

        if int(request.user.id) == int(user_following_id):
            return Response({'message': 'Cannot follow yourself'})

        # Check if the user is already following the user
        existing_entry = UserFollowing.objects.filter(user=request.user, user_following_id=user_following_id).first()
        if existing_entry:
            return Response({'message': 'User already followed'})

        user_following_entry = UserFollowing(user=request.user, user_following_id=user_following_id)
        user_following_entry.save()
        return Response({'message': 'User followed successfully'})

    @action(detail=False, methods=['POST'])
    def unfollow(self, request):
        user_following_id = request.data.get('user_following_id')

        if int(request.user.id) == int(user_following_id):
            return Response({'message': 'Cannot unfollow yourself'})

        # Check if the user is following the user to be unfollowed
        user_following_entry = UserFollowing.objects.filter(user=request.user, user_following_id=user_following_id).first()
        if user_following_entry:
            user_following_entry.delete()
            return Response({'message': 'User unfollowed successfully'})

        return Response({'message': 'User is not being followed'})

    @action(detail=False, methods=['GET'])
    def following(self, request):
        following_entries = UserFollowing.objects.filter(user=request.user)
        serializer = UserFollowingSerializer(following_entries, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['GET'])
    def followers(self, request):
        follower_entries = UserFollowing.objects.filter(user_following=request.user)
        serializer = UserFollowingSerializer(follower_entries, many=True)
        return Response(serializer.data)
