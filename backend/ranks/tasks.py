from celery import shared_task
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

from ranks.models import Skill
from ranks.serializer import SkillSerializer


@shared_task(name='latest_ranking_task')
def latest_ranking():

    # Get skills
    queryset = Skill.objects.all()
    serializer = SkillSerializer(queryset, many=True)
    data = serializer.data

    channel_layer = get_channel_layer()
    message = {
        'type': 'latest_ranking',
        'ranking': data,
    }
    async_to_sync(channel_layer.group_send)('realtime-ranking', message)
