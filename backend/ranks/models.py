from django.db import models
from django.conf import settings

from service.rating import MU, SIGMA


class Skill(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='ranked_user',
        on_delete=models.CASCADE
    )
    mu = models.FloatField(
        default=MU
    )
    sigma = models.FloatField(
        default=SIGMA,
    )
    skill = models.FloatField(
        default=0,
    )
    created_at = models.DateTimeField(auto_now_add=True, )
    updated_at = models.DateTimeField(auto_now=True, )

    def __str__(self):
        return \
            f"""
            {self.user.username} with skill {self.skill}
            mu: {self.mu} sigma: {self.sigma}
            """
