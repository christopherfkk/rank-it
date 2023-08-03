from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

from .models import Skill
from .serializer import SkillSerializer


@receiver(post_save, sender=Skill)
def push_latest_ranking(sender, instance, **kwargs):
    queryset = Skill.objects.order_by('-skill')
    serializer = SkillSerializer(queryset, many=True)
    data = serializer.data

    channel_layer = get_channel_layer()
    message = {
        'type': 'latest_ranking',
        'ranking': data,
    }
    async_to_sync(channel_layer.group_send)('realtime-ranking', message)
