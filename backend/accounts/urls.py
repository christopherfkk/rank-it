from django.urls import path, include, re_path
from rest_framework.routers import SimpleRouter
from django.views.generic import RedirectView, TemplateView


from .views import AccountViewSet, GoogleLogin

router = SimpleRouter()
router.register(r"", AccountViewSet, basename='accounts')

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls')),
    path('google/', GoogleLogin.as_view(), name='google_login'),
    re_path(r'^password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,32})/$',
            TemplateView.as_view(template_name="password_reset_confirm.html"),
            name='password_reset_confirm'),
    path(r'', include(router.urls)),
    path(r'all-auth/', include('allauth.urls'), name='socialaccount_signup'),
]
