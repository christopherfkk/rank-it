# Generated by Django 4.2.2 on 2023-07-02 07:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='NotificationObject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entity_id', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='NotificationType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entity', models.CharField(choices=[('MatchOffer', 'Match Offer'), ('Match', 'Match'), ('PostMatchFeedback', 'Post-match Feedback'), ('Community', 'Community'), ('Account', 'Account')], max_length=20)),
                ('description', models.CharField(choices=[('Sent a match offer', 'Match Offer Sent'), ('Accepted a match offer', 'Match Offer Accepted'), ('Declined a match offer', 'Match Offer Declined'), ('Rescinded a match offer', 'Match Offer Rescinded'), ('Created a match', 'Match Created'), ('Cancelled a match', 'Match Cancelled'), ('Reported a post-match feedback', 'Post Match Feedback Reported')], max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='NotificationTrigger',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('actor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('notification_object', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notifications.notificationobject')),
            ],
        ),
        migrations.AddField(
            model_name='notificationobject',
            name='notification_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notifications.notificationtype'),
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('Unread', 'Unread'), ('Read', 'Read')], max_length=20)),
                ('notification_object', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notifications.notificationobject')),
                ('notifier', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
