from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from django.apps import apps


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


class NotificationObject(models.Model):

    entity_id = models.IntegerField()
    notification_type = models.ForeignKey(
        NotificationType,
        on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True,)

    def __str__(self):
        return f"<Notification Object> for entity {self.notification_type.entity}: {self.notification_type.description}"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.entity_object = self.get_entity_object(self.notification_type.entity, self.entity_id)

    def get_entity_object(self, model_name, object_id, app_label="matches"):
        try:
            model_class = apps.get_model(app_label=app_label, model_name=model_name)
            object = model_class.objects.get(id=object_id)
            return object
        except (LookupError, ValueError):
            raise ValueError(
                f"""
                DoesNotExit: cannot no find the object with the given id 
                in table {app_label}_{self.model_name}
                """
            )

    def get_message_template(self, **kwargs):

        entity = self.notification_type.entity
        description = self.notification_type.description

        try:
            if entity == NotificationType.Entity.MATCH_OFFER:
                if description == NotificationType.Description.MATCH_OFFER_SENT:
                    return f"{self.entity_object.submitter} sent you a match offer!"
                if description == NotificationType.Description.MATCH_OFFER_ACCEPTED:
                    return f"{self.entity_object.opponent} accepted your match offer!"
                if description == NotificationType.Description.MATCH_OFFER_DECLINED:
                    return f"{self.entity_object.opponent} declined your match offer."
                if description == NotificationType.Description.MATCH_OFFER_RESCINDED:
                    return f"{self.entity_object.submitter} rescinded their match offer."

            if entity == NotificationType.Entity.MATCH:
                if description == NotificationType.Description.MATCH_CREATED:
                    return f"Your match {self.entity_object.submitter} vs {self.entity_object.opponent} is scheduled!"
                if description == NotificationType.Description.MATCH_CANCELLED:
                    return f"Your match {self.entity_object.submitter} vs {self.entity_object.opponent} is cancelled"

            if entity == NotificationType.Entity.POST_MATCH_FEEDBACK:
                if description == NotificationType.Description.POST_MATCH_FEEDBACK_REPORTED:
                    return f"Your opponent {self.entity_object.reporter} just submitted a post-match feedback to you!"

        except Exception:
            raise ValueError(f"Invalid NotificationType: wrongly defined entity {entity} or kwargs")


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
    message = models.CharField(
        max_length=100
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

    def set_message(self):
        self.message = self.notification_object.get_message_template()
        self.save()
