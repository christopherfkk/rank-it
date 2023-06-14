# An adapter is a tool to transform easily a CSV/XML file/form into a python object or a django model instance
from allauth.account.adapter import DefaultAccountAdapter


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
