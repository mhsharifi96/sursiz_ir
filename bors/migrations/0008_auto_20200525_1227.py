# Generated by Django 3.0.6 on 2020-05-25 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bors', '0007_auto_20200525_1223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='company'),
        ),
    ]
