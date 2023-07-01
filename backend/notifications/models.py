from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings


class NotificationType(models.Model):
    """Static table preloaded from fixtures"""

    class Entity(models.TextChoices):
        MATCH_OFFER = "Match Offer", _("Match Offer")
        MATCH = "Match", _("Match")
        POST_MATCH_FEEDBACK = "Post-match Feedback", _("Post-match Feedback")
        COMMUNITY = "Community", _("Community")
        ACCOUNT = "Account", _("Account")

    entity = models.CharField(
        choices=Entity.choices,
        max_length=20
    )
    description = models.TextField()


class NotificationObject(models.Model):

    entity_id = models.IntegerField()
    notification_type = models.ForeignKey(
        NotificationType,
        on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True,)

    def __str__(self):
        return f"Notification Object for entity {self.notification_type.entity}: {self.notification_type.description}"


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
            Notification triggered by {self.actor.username}
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
            Notification for {self.notifier.username}
            regarding {self.notification_object}
            with status {self.status}
            """
