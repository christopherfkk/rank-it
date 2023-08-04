# Generated by Django 4.2.4 on 2023-08-04 03:20

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matches', '0005_alter_postmatchfeedback_match_competitiveness_rating_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='match_competitiveness_rating',
            field=models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)]),
        ),
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='peer_sportsmanship_rating_given',
            field=models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)]),
        ),
        migrations.AlterField(
            model_name='postmatchfeedback',
            name='strengths',
            field=models.ManyToManyField(blank=True, to='matches.strength'),
        ),
    ]