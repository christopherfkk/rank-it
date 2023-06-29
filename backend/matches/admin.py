from django.contrib import admin

from .models import MatchOffer, Match, PostMatchFeedback

admin.site.register(MatchOffer)
admin.site.register(Match)
admin.site.register(PostMatchFeedback)
