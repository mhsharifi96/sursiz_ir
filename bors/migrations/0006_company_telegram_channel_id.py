# Generated by Django 3.0.6 on 2020-05-25 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bors', '0005_auto_20200520_1409'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='telegram_channel_id',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
