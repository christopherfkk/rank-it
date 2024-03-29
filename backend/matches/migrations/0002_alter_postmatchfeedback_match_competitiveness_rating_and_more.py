# Generated by Django 4.2.3 on 2023-07-27 01:42

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matches', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='match_competitiveness_rating',
            field=models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)]),
        ),
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='peer_feedback_blurb_given',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='peer_skill_level_given',
            field=models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)]),
        ),
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='peer_sportsmanship_rating_given',
            field=models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)]),
        ),
    ]
