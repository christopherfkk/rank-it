from rest_framework import generics

from .models import Match
from .serializers import MatchSerializer
from .permissions import IsPlayerOrReadOnly


class MatchList(generics.ListCreateAPIView):
    permission_classes = (IsPlayerOrReadOnly, )
    queryset = Match.objects.all()
    serializer_class = MatchSerializer


class MatchDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsPlayerOrReadOnly, )
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
