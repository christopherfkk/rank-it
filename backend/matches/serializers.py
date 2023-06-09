from rest_framework import serializers

from .models import Match


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "submitter",
            "opponent",
            "type",
            "submitter_score",
            "opponent_score",
            "created_at",
            "updated_at",
        )
        model = Match