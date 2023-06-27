from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _

from communities.models import Community


class MatchOffer(models.Model):

    class MatchOfferType(models.TextChoices):
        BADMINTON_SINGLES = "S", _("Singles")

    class MatchOfferStatus(models.TextChoices):
        PENDING = "P", _("Pending")
        DECLINED = "D", _("Declined")
        ACCEPTED = "A", _("Accepted")

    submitter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='match_offer_submitter',
        on_delete=models.CASCADE
    )
    opponent = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='match_offer_opponent',
        on_delete=models.CASCADE
    )
    community = models.ForeignKey(
        Community,
        on_delete=models.CASCADE()
    )
    type = models.CharField(
        _("match offer type"),
        choices=MatchOfferType.choices,
        max_length=20,
        default=MatchOfferType.BADMINTON_SINGLES,
    )
    start_datetime = models.DateTimeField(
        null=False,
    )
    end_datetime = models.DateTimeField(
        null=False,
    )
    status = models.CharField(
        _("match offer status"),
        choices=MatchOfferStatus.choices,
        max_length=20,
        default=MatchOfferStatus.PENDING,
    )
    is_counter_offer = models.BooleanField(
        default=False,
    )
    last_offer_id = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        on_delete=models.CASCADE(),
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )
    update_at = models.DateTimeField(
        auto_now=True,
    )

    def __str__(self):
        return \
            f"""
            MatchOffer {self.id} for {self.type}
            submitted by {self.submitter.username} to {self.opponent.username}
            on {self.start_datetime}
            """


class Match(models.Model):



    submitter = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='match_submitter', on_delete=models.CASCADE)
    opponent = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='match_opponent', on_delete=models.CASCADE)
    submitter_score = models.IntegerField()
    opponent_score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.submitter.username} vs {self.opponent.username} ({self.submitter_score}-{self.opponent_score}) on {self.created_at.date()}"


class PostMatchFeedback(models.Model):

    def __str__(self):
        return
