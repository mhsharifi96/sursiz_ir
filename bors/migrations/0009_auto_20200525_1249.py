# Generated by Django 3.0.6 on 2020-05-25 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bors', '0008_auto_20200525_1227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='telegram_channel_id',
            field=models.CharField(blank=True, max_length=55, null=True),
        ),
    ]
