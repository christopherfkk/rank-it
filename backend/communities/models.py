from django.db import models


class Community(models.Model):

    country = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"Community {self.id} {self.name} in {self.city}, {self.country}"
