# Generated by Django 5.1.2 on 2024-10-15 18:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0013_alter_messageai_id_alter_messageuser_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='conversation',
            name='lang',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='chat.language'),
        ),
        migrations.AlterField(
            model_name='conversation',
            name='model',
            field=models.ForeignKey(on_delete=django.db.models.deletion.SET_NULL, to='chat.modelai'),
        ),
        migrations.AlterField(
            model_name='conversation',
            name='prompt',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='chat.prompt'),
        ),
    ]