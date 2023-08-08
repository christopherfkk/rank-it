from typing import List
from django.db import transaction

from .models import NotificationType, NotificationObject, NotificationTrigger, Notification
from accounts.models import CustomUser


def send_notification(
        entity: NotificationType.Entity,
        description: NotificationType.Description,
        entity_id: int,
        actor: CustomUser,
        notifiers: List[CustomUser],
        status: Notification.Status = Notification.Status.UNREAD,):
        
    print('details', entity, description, entity_id, actor, notifiers, status)
    with transaction.atomic():
        notif_type = NotificationType.objects.get(
            description=description,
        )
        notif_object = NotificationObject.objects.create(
            entity_id=entity_id,
            notification_type=notif_type,
        )

        notif_trigger = NotificationTrigger.objects.create(
            notification_object=notif_object,
            actor=actor,
        )
        for notifier in notifiers:
            notif = Notification.objects.create(
                notification_object=notif_object,
                notifier=notifier,
                status=status,
            )
            notif.set_message()

    return
