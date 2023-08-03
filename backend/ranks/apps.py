from django.apps import AppConfig


class RanksConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'ranks'

    def ready(self):
        import ranks.signals
