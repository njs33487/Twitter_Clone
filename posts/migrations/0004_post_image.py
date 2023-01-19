# Generated by Django 4.1.5 on 2023-01-19 21:17

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_post_like'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='image'),
        ),
    ]
