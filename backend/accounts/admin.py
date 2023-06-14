from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    """User Creation Form in the admin site"""
    class Meta(UserCreationForm):
        model = CustomUser
        fields = UserCreationForm.Meta.fields + ("dob", "gender")


class CustomUserChangeForm(UserChangeForm):
    """User Change Form in the admin site"""
    class Meta:
        model = CustomUser
        fields = UserChangeForm.Meta.fields


class CustomUserAdmin(UserAdmin):
    """
    Admin to handle the User model in the admin site. Defines the form to create
    and change the User instance. Also displays which fields of the User instances.
    """
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = [
        "username",
        "email",
        "first_name",
        "last_name",
        "dob",
        "gender",
        "is_staff",
    ]
    fieldsets = UserAdmin.fieldsets + ((None, {"fields": ("dob", "gender")}),)
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {"fields": ("dob", "gender")}),)


admin.site.register(CustomUser, CustomUserAdmin)
