# Generated by Django 4.1.7 on 2023-03-05 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0003_receipt'),
    ]

    operations = [
        migrations.CreateModel(
            name='Spending',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('merchant', models.CharField(max_length=50)),
                ('date', models.DateField(verbose_name='Purchase Date')),
                ('description', models.CharField(max_length=100)),
                ('quantity', models.IntegerField(max_length=3)),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('category', models.CharField(max_length=20)),
            ],
        ),
    ]
