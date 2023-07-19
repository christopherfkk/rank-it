from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from .models import Skill
from .serializer import SkillSerializer


class SkillViewSet(viewsets.ModelViewSet):
    """
    View set for the Skill model
    """

    queryset = Skill.objects.order_by('-skill')  # Order by skill in descending order
    serializer_class = SkillSerializer
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        rank = Skill.objects.filter(skill__gt=instance.skill).count() + 1
        serializer = self.get_serializer(instance)
        return Response({**serializer.data, "rank": rank})
