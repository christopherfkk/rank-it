from allauth.account.adapter import DefaultAccountAdapter
# An adapter is a tool to transform easily a CSV/XML file/form into a python object or a django model instance


class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=False):
        user = super().save_user(request, user, form, commit)
        data = form.cleaned_data
        user.first_name = data.get('first_name')
        user.last_name = data.get('last_name')
        user.dob = data.get('dob')
        user.gender = data.get('gender')
        user.save()
        return user