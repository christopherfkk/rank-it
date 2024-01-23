from django.db import models
from django.conf import settings


class UserFollowing(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='user',
        on_delete=models.CASCADE,
    )
    user_following = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='user_following',
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True, )

    def __str__(self):
        return f"User {self.user.id} {self.user.first_name} follows " \
               f"{self.user_following.id} {self.user_following.first_name}"
