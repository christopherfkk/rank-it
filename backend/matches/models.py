from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _


class Match(models.Model):

    class MatchType(models.TextChoices):
        BADMINTON_SINGLES = "S", _("Singles")

    submitter = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='match_submitter', on_delete=models.CASCADE)
    opponent = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='match_opponent', on_delete=models.CASCADE)
    type = models.CharField(_("match type"), choices=MatchType.choices, max_length=20, default=MatchType.BADMINTON_SINGLES)
    submitter_score = models.IntegerField()
    opponent_score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.submitter.username} vs {self.opponent.username} ({self.submitter_score}-{self.opponent_score}) on {self.created_at.date()}"
