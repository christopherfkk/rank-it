# Generated by Django 4.2.3 on 2023-07-20 06:32

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matches', '0005_alter_match_match_offer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='match_competitiveness_rating',
            field=models.IntegerField(null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)]),
        ),
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='peer_skill_level_given',
            field=models.IntegerField(null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)]),
        ),
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='peer_sportsmanship_rating_given',
            field=models.IntegerField(null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)]),
        ),
    ]