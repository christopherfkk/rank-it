from django.urls import path

from .views import MatchList, MatchDetail

urlpatterns = [
    path('<int:pk>/', MatchDetail.as_view(), name='match_detail'),
    path('', MatchList.as_view(), name='match_list'),
]