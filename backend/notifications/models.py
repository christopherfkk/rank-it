from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings


class NotificationType(models.Model):
    """Static table preloaded from fixtures under fixtures/notification_type.yaml"""

    class Entity(models.TextChoices):
        MATCH_OFFER = "MatchOffer", _("Match Offer")
        MATCH = "Match", _("Match")
        POST_MATCH_FEEDBACK = "PostMatchFeedback", _("Post-match Feedback")
        COMMUNITY = "Community", _("Community")
        ACCOUNT = "Account", _("Account")

    class Description(models.TextChoices):
        MATCH_OFFER_SENT = "Sent a match offer"
        MATCH_OFFER_ACCEPTED = "Accepted a match offer"
        MATCH_OFFER_DECLINED = "Declined a match offer"
        MATCH_OFFER_RESCINDED = "Rescinded a match offer"
        MATCH_CREATED = "Created a match"
        MATCH_CANCELLED = "Cancelled a match"
        POST_MATCH_FEEDBACK_REPORTED = "Reported a post-match feedback"

    entity = models.CharField(
        choices=Entity.choices,
        max_length=20
    )
    description = models.CharField(
        choices=Description.choices,
        max_length=100
    )

    def __str__(self):
        return f"<NotificationType> for entity {self.entity}: {self.description}"

    def get_message_template(self, **kwargs):

        try:
            if self.entity == NotificationType.Entity.MATCH_OFFER:
                if self.description == NotificationType.Description.MATCH_OFFER_SENT:
                    return f"{kwargs['actor']} sent you a match offer!"
                if self.description == NotificationType.Description.MATCH_OFFER_ACCEPTED:
                    return f"{kwargs['actor']} accepted your match offer!"
                if self.description == NotificationType.Description.MATCH_OFFER_DECLINED:
                    return f"{kwargs['actor']} declined your match offer."
                if self.description == NotificationType.Description.MATCH_OFFER_RESCINDED:
                    return f"{kwargs['actor']} rescinded their match offer."

            if self.entity == NotificationType.Entity.MATCH:
                if self.description == NotificationType.Description.MATCH_CREATED:
                    return f"Your match {kwargs['submitter']} vs {kwargs['opponent']} is scheduled!"
                if self.description == NotificationType.Description.MATCH_CANCELLED:
                    return f"Your match {kwargs['submitter']} vs {kwargs['opponent']} is cancelled"

            if self.entity == NotificationType.Entity.POST_MATCH_FEEDBACK:
                if self.description == NotificationType.Description.POST_MATCH_FEEDBACK_REPORTED:
                    return f"Your opponent {kwargs['reporter']} just submitted a post-match feedback to you!"

        except Exception:
            raise ValueError("Invalid NotificationType: wrongly defined entity or kwargs")


class NotificationObject(models.Model):

    entity_id = models.IntegerField()
    notification_type = models.ForeignKey(
        NotificationType,
        on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True,)

    def __str__(self):
        return f"<Notification Object> for entity {self.notification_type.entity}: {self.notification_type.description}"


class NotificationTrigger(models.Model):

    notification_object = models.ForeignKey(
        NotificationObject,
        on_delete=models.CASCADE,
    )
    actor = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return \
            f"""
            <NotificationTrigger> by {self.actor.username}
            regarding {self.notification_object}
            """


class Notification(models.Model):

    class Status(models.TextChoices):
        UNREAD = "Unread", _("Unread")
        READ = "Read", _("Read")

    notification_object = models.ForeignKey(
        NotificationObject,
        on_delete=models.CASCADE,
    )
    notifier = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    status = models.CharField(
        choices=Status.choices,
        max_length=20
    )

    def __str__(self):
        return \
            f"""
            <Notification> for {self.notifier.username}
            regarding {self.notification_object}
            with status {self.status}
            """
