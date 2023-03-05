from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Student
from .serializers import *

from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import DocumentAnalysisClient
from dotenv import load_dotenv
import os

import openai
import json


@api_view(['POST'])
def upload_receipt(request):
    if request.method == 'POST':
        requestData = request.data
        serializer = ReceiptSerializer(data=requestData)
        name = requestData.get("name")
        image = requestData.get("receipt_img")
        extract_json(image)
        print(requestData.get("name"))

        return Response(status=status.HTTP_201_CREATED)

        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def students_list(request):
    if request.method == 'GET':
        data = Student.objects.all()

        serializer = StudentSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def students_detail(request, pk):
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = StudentSerializer(student, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
def load_values():
    load_dotenv()
    openai.api_key = os.getenv("OPENAI")

    endpoint = os.getenv("AZURE_ENDPOINT")
    key = os.getenv("AZURE")

    document_analysis_client = DocumentAnalysisClient(
        endpoint=endpoint, credential=AzureKeyCredential(key)
    )
    return document_analysis_client, openai.api_key

def extract_json(receipt):

    document_analysis_client, openai.api_key = load_values()

    clothing = ['CARRY BAG -RE-USABLE I', "ESS CREW SWEAT FL", "ESS FZ HOODY FL",
                "FERRARI FANWEAR LAPS", "FORMSTRIPE SOCCER PA"]
    food = ["Whopper JR.", "Ice Lemon Tea(L)", "Coke (L)", "Americano(L)", "Lrg Capp"]

    # Need url for image
    # sample document
    url = "https://raw.githubusercontent.com/Azure/azure-sdk-for-python/main/sdk/formrecognizer/azure-ai-formrecognizer/tests/sample_forms/receipt/contoso-receipt.png"

    poller = document_analysis_client.begin_analyze_document("prebuilt-receipt", receipt)
    #poller = document_analysis_client.begin_analyze_document_from_url("prebuilt-receipt", url)
    receipts = poller.result()

    merchant = None
    date = None
    item_list = []
    total_tax = None
    category = None
    for _, receipt in enumerate(receipts.documents):
        receipt_type = receipt.doc_type

        merchant_name = receipt.fields.get("MerchantName")
        if merchant_name:
            merchant = merchant_name.value

        transaction_date = receipt.fields.get("TransactionDate")
        if transaction_date:
            date = transaction_date.value

        if receipt.fields.get("Items"):

            for idx, item in enumerate(receipt.fields.get("Items").value):
                desc, quant, price = 'na', 'na', 'na'

                item_desc = item.value.get("Description")
                if item_desc:
                    desc =item_desc.value.split("\n")[0]


                item_quant = item.value.get("Quantity")
                if item_quant:
                    quant = item_quant.value

                item_price = item.value.get("TotalPrice")
                if item_price:
                    price = item_price.value

                if desc in clothing:
                    category = "clothing"
                if desc in food:
                    category = "food"

                item_list += [{'description':desc, 'quantity':quant,
                               'total_price':price, "category": category}]

        tax = receipt.fields.get("TotalTax")
        if tax:
            total_tax = tax.value

        total = receipt.fields.get("Total").value

    output_dict = {
        'merchant':merchant,
        'date':str(date),
        'items':item_list,
        'tax':total_tax,
        'total':total
    }

    json_output = json.dumps(output_dict)
    print(json_output)
    return(json_output)