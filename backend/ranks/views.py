from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from .models import Skill
from .serializer import SkillSerializer
import logging

logger = logging.getLogger('rank-it')

class SkillViewSet(viewsets.ModelViewSet):
    """
    View set for the Skill model
    """

    queryset = Skill.objects.order_by('-skill')  # Order by skill in descending order
    serializer_class = SkillSerializer
    permission_classes = [IsAuthenticated]
    logger.info('Inside SkillViewSet class')

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_queryset()[int(kwargs.get('pk'))-1]
        serializer = self.get_serializer(instance)
        return Response({**serializer.data, "rank": int(kwargs.get('pk'))})
