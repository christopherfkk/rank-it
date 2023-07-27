from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.core.validators import RegexValidator, MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.db import models

from ranks.models import Skill


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not email:
            raise ValueError(_("Email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()

        # Initialize skill object for the new user
        Skill.objects.create(
            user=user,
        )

        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(
                _("Superuser must have is_staff=True.")
            )
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(
                _("Superuser must have is_superuser=True.")
            )
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):

    class Gender(models.TextChoices):
        MALE = "M", _("Male")
        FEMALE = "F", _("Female")

    class LEVEL(models.TextChoices):
        BEGINNER = "Beginner", _("Beginner")
        INTERMEDIATE = "Intermediate", _("Intermediate")
        EXPERT = "Expert", _("Expert")

    email = models.EmailField(
        _("email address"),
        unique=True
    )
    username = models.CharField(
        _("username"),
        max_length=150,
        unique=True,
        null=True,  # database-level
        blank=True,  # form-level
        help_text=_("Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."),
        validators=[UnicodeUsernameValidator],
        error_messages={"unique": _("A user with that username already exists."), },
    )
    first_name = models.CharField(
        _("first name"),
        max_length=30,
        default=None,
        blank=True,
        null=True,
    )
    last_name = models.CharField(
        _("last name"),
        max_length=30,
        default=None,
        blank=True,
        null=True,
    )
    is_staff = models.BooleanField(
        _("staff status"),
        default=False,
        help_text=_("Designates whether the user can log into this admin site."),
    )
    is_active = models.BooleanField(
        _("active"),
        default=True,
        help_text=_(
            "Designates whether this user should be treated as active. "
            "Unselect this instead of deleting accounts."
        ),
    )
    date_joined = models.DateTimeField(
        _("date joined"),
        default=timezone.now
    )
    phone_number = models.CharField(
        default=None,
        null=True,
        max_length=20,
        validators=[
            RegexValidator(
                regex=r'^\+?\d{1,3}[-.\s]?\d{3,14}$',
                message="Phone number must be entered in a valid format."
            )
        ]
    )
    level = models.CharField(
        _("level"),
        default=None,
        blank=True,
        null=True,
        max_length=20,
        choices=LEVEL.choices
    )
    dob = models.DateField(
        _("date of brith"),
        default=None,
        blank=True,
        null=True
    )
    gender = models.CharField(
        _("gender"),
        default=None,
        blank=True,
        null=True,
        max_length=1,
        choices=Gender.choices
    )

    def get_image_upload_path(instance, filename):
        """Custom logic to determine the subdirectory path `MEDIA_ROOT/avatars/<username>/<filename>`"""
        return f'avatars/{instance.username}/{filename}'

    avatar = models.ImageField(
        upload_to=get_image_upload_path,
        default=None,
        blank=True,
        null=True,
    )
    blurb = models.TextField(
        null=True
    )
    matches_played = models.IntegerField(default=0,)
    matches_won = models.IntegerField(default=0,)
    overall_skill_level = models.FloatField(
        default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(10.0)],
    )
    n_skill_level_received = models.IntegerField(
        default=0,
    )
    overall_sportsmanship_rating = models.FloatField(
        default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)],
    )
    n_sportsmanship_rating_received = models.IntegerField(
        default=0,
    )
    overall_match_competitiveness_rating = models.FloatField(
        default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(10.0)],
    )
    n_match_competitiveness_rating_received = models.IntegerField(
        default=0,
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    def is_male(self):
        return self.gender == self.Gender.MALE

    def find_by_username(self, username):
        return self.objects.filter(username=username)

    def find_by_id(self, id):
        return self.objects.filter(id=id)
