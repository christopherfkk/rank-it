from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser
from .forms import CustomUserChangeForm, CustomUserCreationForm


class CustomUserAdmin(UserAdmin):
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