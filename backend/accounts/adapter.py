from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
import urllib.request
from django.core.files import File

import ssl


class CustomAccountAdapter(DefaultAccountAdapter):
    """Adapter to save the inputs from the register form that went through the CustomRegisterSerializer"""
    def save_user(self, request, user, form, commit=False):
        user = super().save_user(request, user, form, commit)
        data = form.cleaned_data
        user.username = data.get('username', '')
        user.first_name = data.get('first_name', '')
        user.last_name = data.get('last_name', '')
        user.dob = data.get('dob', None)
        user.gender = data.get('gender', '')
        user.save()
        return user


class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
    """Adapter to save the inputs from the social account information"""

    def save_user(self, request, sociallogin, form=None):
        user = super().save_user(request, sociallogin, form=form)

        if sociallogin.account.provider == 'google':
            avatar_url = sociallogin.account.extra_data.get('picture')  # Access the user's avatar URL from the social account data

            if avatar_url:
                # TODO: unsafe
                context = ssl._create_unverified_context()
                avatar_image = urllib.request.urlopen(avatar_url, context=context)  # Download the avatar image
                user.avatar.save(f'{user.username}_avatar.jpg', File(avatar_image))

        return user
