from django.db import models

class Student(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    document = models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
<<<<<<< HEAD
=======
        return self.name
    
class Receipt(models.Model):
    name = models.CharField(max_length=50)
    receipt_img = models.ImageField(upload_to='images/')

    def __str__(self):
>>>>>>> db97c1d94aed6e97d57c356821efbbb52d2174a8
        return self.name