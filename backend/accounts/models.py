from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from .managers import CustomUserManager


class CustomUser(AbstractUser):

    class Gender(models.TextChoices):
        MALE = "M", _("Male")
        FEMALE = "F", _("Female")

    email = models.EmailField(_("email address"), unique=True)  # email is not unique by default
    dob = models.DateField(_("date of brith"))
    gender = models.CharField(_("gender"), max_length=1, choices=Gender.choices)

    REQUIRED_FIELDS = ["email", "first_name", "last_name", "dob", "gender"]  # username and password required by default
    objects = CustomUserManager()

    def __str__(self):
        return self.username

    def is_male(self):
        return self.gender == self.Gender.MALE
