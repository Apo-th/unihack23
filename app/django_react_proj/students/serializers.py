from rest_framework import serializers
<<<<<<< HEAD
from .models import Student
=======
from .models import Student, Receipt
>>>>>>> develop

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student 
<<<<<<< HEAD
        fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')
=======
        fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')

class ReceiptSerializer(serializers.ModelSerializer):

    class Meta:
        model = Receipt 
        fields = ('name', 'receipt_img')
>>>>>>> develop
