from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    """User Creation Form in the admin site"""
    class Meta(UserCreationForm):
        model = CustomUser
        fields = "__all__"


class CustomUserChangeForm(UserChangeForm):
    """User Change Form in the admin site"""
    class Meta:
        model = CustomUser
        fields = "__all__"


class CustomUserAdmin(UserAdmin):
    """
    Admin to handle the User model in the admin site. Defines the form to create
    and change the User instance. Also displays which fields of the User instances.
    """
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = [
        "email",
        "username",
        "first_name",
        "last_name",
        "is_staff",
        "dob",
        "gender",
    ]
    fieldsets = UserAdmin.fieldsets + ((None, {"fields": ("__all__",)}),)
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {"fields": ("__all__",)}),)


admin.site.register(CustomUser, CustomUserAdmin)
