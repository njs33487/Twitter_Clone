# Generated by Django 4.1.5 on 2023-01-18 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_alter_post_body'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='like',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
