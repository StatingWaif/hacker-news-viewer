# Generated by Django 5.0.4 on 2024-04-14 04:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0003_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='parent_comment_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='server.comment'),
        ),
        migrations.AlterField(
            model_name='story',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]
