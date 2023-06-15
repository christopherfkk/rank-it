from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
import requests
from django.core.files import File
from io import BytesIO


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
            avatar_url = sociallogin.account.extra_data.get('picture')

            if avatar_url:
                response = requests.get(avatar_url, verify=True)  # Download the avatar image using requests

                if response.status_code == 200:
                    image_file = BytesIO(response.content)  # Wrap the image content in a BytesIO object
                    avatar_image = File(image_file)  # Create a django File object
                    user.avatar.save(f'{user.username}_avatar.jpg', avatar_image)

        return user
