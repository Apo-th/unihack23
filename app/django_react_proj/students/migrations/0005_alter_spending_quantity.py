# Generated by Django 4.1.7 on 2023-03-05 03:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0004_spending'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spending',
            name='quantity',
            field=models.IntegerField(),
        ),
    ]
