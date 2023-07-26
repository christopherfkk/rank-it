# Generated by Django 4.2.3 on 2023-07-26 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_alter_customuser_overall_skill_level_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='level',
            field=models.CharField(blank=True, choices=[('B', 'Beginner'), ('I', 'Intermediate'), ('E', 'Expert')], default=None, max_length=1, null=True, verbose_name='level'),
        ),
    ]