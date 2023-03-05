from django.db import models

class Student(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    document = models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name
    
class Receipt(models.Model):
    name = models.CharField(max_length=50)
    receipt_img = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.name
    
class Spending(models.Model):
    merchant = models.CharField(max_length=50)
    date = models.DateField("Purchase Date")
    description = models.CharField(max_length=100)
    quantity = models.IntegerField()
    total_price = models.DecimalField(max_digits=7, decimal_places=2)
    category = models.CharField(max_length=20)

    def __str__(self):
        return self.name