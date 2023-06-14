from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.db import models


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
    """
    Custom user model with fields
    - email
    - password
    - username
    - first_name
    - last_name,
    - is_staff
    - is_active
    - date_joined
    - dob (date of birth)
    - gender
    """
    email = models.EmailField(
        _("email address"),
        unique=True
    )
    username = models.CharField(
        _("username"),
        max_length=150,
        default=None,
        unique=True,
        null=True,
        blank=True,
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
    dob = models.DateField(
        _("date of brith"),
        default=None,
        blank=True,
        null=True
    )

    class Gender(models.TextChoices):
        MALE = "M", _("Male")
        FEMALE = "F", _("Female")

    gender = models.CharField(
        _("gender"),
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
