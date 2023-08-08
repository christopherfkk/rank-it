from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from django.db import models

from matches.models import PostMatchFeedback
from ranks.models import Skill


class AccountSerializer(serializers.ModelSerializer):
    """Serializer for UserViewSet and for dj-rest-auth UserDetailSerializer"""
    class Meta:
        model = get_user_model()
        fields = (
            'id', 'email', 'username', 'first_name', 'last_name', 'level',
            'matches_played', 'matches_won', 'overall_sportsmanship_rating',
            'overall_match_competitiveness_rating', 'top_strengths', 'blurb',
            'avatar_image_name',
        )

    top_strengths = serializers.SerializerMethodField()

    def get_top_strengths(self, obj):
        # Get the feedbacks where the account is either the opponent or submitter

        feedbacks = PostMatchFeedback.objects.filter(
            models.Q(match__opponent=obj) | models.Q(match__submitter=obj), ~models.Q(reporter=obj)
        )

        # Count the occurrences of each strength in the feedbacks
        strength_count = {}
        for feedback in feedbacks:
            for strength in feedback.strengths.all():
                strength_count[strength.type] = strength_count.get(strength.type, 0) + 1

        # Sort the strengths by count in descending order
        sorted_strengths = sorted(strength_count.items(), key=lambda x: x[1], reverse=True)

        # Get the top 3 strengths
        top_strengths = [strength for strength, count in sorted_strengths[:3]]

        return top_strengths
    
    # Override the behavior for 'overall_sportsmanship_rating' and 'overall_match_competitiveness_rating'
    def to_representation(self, instance):
        representation = super().to_representation(instance)

        # Round the 'overall_sportsmanship_rating' and 'overall_match_competitiveness_rating' fields to three deciman
        representation['overall_sportsmanship_rating'] = round(instance.overall_sportsmanship_rating, 2)
        representation['overall_match_competitiveness_rating'] = round(instance.overall_match_competitiveness_rating, 2)

        return representation


class CustomRegisterSerializer(RegisterSerializer):
    """Serializer for the default account registration form in DRF"""

    username = serializers.CharField(
        required=False,
        allow_blank=True,
    )

    # Add more serializer fields if you want more fields in the default account registration form in DRF

    def get_cleaned_data(self):
        data = super().get_cleaned_data()  # username cannot be null but can be "" or not defined at all
        if data['username'] == '':  # if empty string, set username to None
            data['username'] = None
        return data

    # def custom_signup(self, request, user):
    #     Skill.objects.create(user=user)


class TokenSerializer(serializers.ModelSerializer):

    user = AccountSerializer(read_only=True)

    # IDs to only specify the object ID when creating/updating
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='submitter',
        write_only=True,
        required=False,
        allow_null=True,
    )

    class Meta:
        model = Token
        # fields = ('key', 'user')
        fields = "__all__"
