from django.core.files import File
from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from allauth.account.utils import user_email, user_field, user_username
import requests
from io import BytesIO

from ranks.models import Skill


class CustomAccountAdapter(DefaultAccountAdapter):
    """
    Adapter to save the inputs from the register form that went through the CustomRegisterSerializer
    """
    def save_user(self, request, user, form, commit=True):
        """
        Saves a new `User` instance using information provided in the signup form.
        Adapted from DefaultAccountAdapter.save_user() but removed populating username automatically
        """
        data = form.cleaned_data
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        username = data.get("username")
        user_email(user, email)  # sets user.email
        user_username(user, username)  # sets user.username (usually None)
        if first_name:
            user_field(user, "first_name", first_name)
        if last_name:
            user_field(user, "last_name", last_name)
        if "password1" in data:
            user.set_password(data["password1"])
        else:
            user.set_unusable_password()
        if commit:
            user.save()
        return user


class CustomSocialAccountAdapter(DefaultSocialAccountAdapter):
    """
    Adapter to save the inputs from the social account information
    """

    def save_user(self, request, sociallogin, form=None):
        user = super().save_user(request, sociallogin, form=form)  # save the user first

        # if not Skill.objects.filter(user=user).exists():
        #     Skill.objects.create(user=user)

        # Get the avatar if the provider is Google
        if sociallogin.account.provider == 'google':
            avatar_url = sociallogin.account.extra_data.get('picture')

            if avatar_url:
                # Download the avatar image using requests
                response = requests.get(avatar_url, verify=True)

                if response.status_code == 200:
                    # Wrap the image content in a BytesIO object
                    image_file = BytesIO(response.content)
                    # Create a django File object
                    avatar_image = File(image_file)
                    # Save it in the media/ folder
                    user.avatar.save(f'{user.username}_avatar.jpg', avatar_image)
        return user
