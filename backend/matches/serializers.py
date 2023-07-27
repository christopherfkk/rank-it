from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import MatchOffer, Match, PostMatchFeedback, Strength
from accounts.serializers import AccountSerializer
from communities.serializers import CommunitySerializer
from communities.models import Community


class MatchOfferSerializer(serializers.ModelSerializer):
    """
    Serializer for the MatchOffer model
    """
    # Nested serializers to show the full object details when retrieving
    submitter = AccountSerializer(read_only=True)
    opponent = AccountSerializer(read_only=True)
    community = CommunitySerializer(read_only=True)

    # IDs to only specify the object ID when creating/updating
    submitter_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='submitter',
        write_only=True,
        required=False,
        allow_null=True,
    )
    opponent_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='opponent',
        write_only=True,
        required=False,
        allow_null=True,
    )
    community_id = serializers.PrimaryKeyRelatedField(
        queryset=Community.objects.all(),
        source='community',
        write_only=True,
        required=False,
        allow_null=True,
    )

    class Meta:
        fields = "__all__"
        model = MatchOffer


class MatchSerializer(serializers.ModelSerializer):
    """
    Serializer for the Match model
    """
    # Nested serializers when retrieving
    submitter = AccountSerializer(read_only=True)
    opponent = AccountSerializer(read_only=True)
    match_offer = MatchOfferSerializer(read_only=True)

    # IDs when creating/updating
    submitter_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='submitter',
        write_only=True,
        required=False,
        allow_null=True,
    )
    opponent_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='opponent',
        write_only=True,
        required=False,
        allow_null=True,
    )
    match_offer_id = serializers.PrimaryKeyRelatedField(
        queryset=MatchOffer.objects.all(),
        source='match_offer',
        write_only=True,
        required=False,
        allow_null=True,
    )

    class Meta:
        fields = "__all__"
        model = Match


class StrengthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Strength
        fields = '__all__'


class PostMatchFeedbackSerializer(serializers.ModelSerializer):
    """
    Serializer for the PostMatchFeedback model
    """
    # Nested serializer when retrieving
    match = MatchSerializer(read_only=True)
    reporter = AccountSerializer(read_only=True)
    opponent = AccountSerializer(read_only=True)

    # IDs when creating/updating
    match_id = serializers.PrimaryKeyRelatedField(
        queryset=Match.objects.all(),
        source='match',
        write_only=True,
        required=False,
        allow_null=True,
    )
    reporter_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='reporter',
        write_only=True,
        required=False,
        allow_null=True,
    )
    opponent_id = serializers.PrimaryKeyRelatedField(
        queryset=get_user_model().objects.all(),
        source='opponent',
        write_only=True,
        required=False,
        allow_null=True,
    )
    strengths = serializers.SlugRelatedField(
        queryset=Strength.objects.all(),
        many=True,
        slug_field='type'
    )

    class Meta:
        fields = "__all__"
        model = PostMatchFeedback
