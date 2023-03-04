from rest_framework import serializers
from .models import Student, Receipt

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student 
        fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')

class ReceiptSerializer(serializers.ModelSerializer):

    class Meta:
        model = Receipt 
        fields = ('name', 'receipt_img')