from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import DocumentAnalysisClient
from dotenv import load_dotenv
import os
load_dotenv()

import openai
import json
openai.api_key = os.getenv("OPENAI")

endpoint = os.getenv("AZURE_ENDPOINT")
key = os.getenv("AZURE")

document_analysis_client = DocumentAnalysisClient(
    endpoint=endpoint, credential=AzureKeyCredential(key)
)

# Need url for image
# sample document
url = "https://raw.githubusercontent.com/Azure/azure-sdk-for-python/main/sdk/formrecognizer/azure-ai-formrecognizer/tests/sample_forms/receipt/contoso-receipt.png"

with open("jon.jpg", "rb") as fd:
    receipt = fd.read()


poller = document_analysis_client.begin_analyze_document("prebuilt-receipt", receipt)
#poller = document_analysis_client.begin_analyze_document_from_url("prebuilt-receipt", url)
receipts = poller.result()

merchant = []
item_list = []

total_tax = []
for _, receipt in enumerate(receipts.documents):
    receipt_type = receipt.doc_type

    merchant_name = receipt.fields.get("MerchantName")
    if merchant_name:
        merchant += [merchant_name.value]

    if receipt.fields.get("Items"):

        for idx, item in enumerate(receipt.fields.get("Items").value):
            desc, quant, price = 'na', 'na', 'na'

            item_desc = item.value.get("Description")
            if item_desc:
                desc =item_desc.value

            item_quant = item.value.get("Quantity")
            if item_quant:
                quant = item_quant.value

            item_price = item.value.get("TotalPrice")
            if item_price:
                price = item_price.value

            item_list += [(desc, quant, price)]

    tax = receipt.fields.get("TotalTax")
    if tax:
        total_tax += [tax.value]

print('merch')
print(merchant)
print('item')
print(item_list)
print('tax')
print(total_tax)

#
# for idx, receipt in enumerate(receipts.documents):
#     print("--------Recognizing receipt #{}--------".format(idx + 1))
#     receipt_type = receipt.doc_type
#     if receipt_type:
#         print(
#             "Receipt Type: {}".format(receipt_type)
#         )
#     merchant_name = receipt.fields.get("MerchantName")
#     if merchant_name:
#         print(
#             "Merchant Name: {} has confidence: {}".format(
#                 merchant_name.value, merchant_name.confidence
#             )
#         )
#     transaction_date = receipt.fields.get("TransactionDate")
#     if transaction_date:
#         print(
#             "Transaction Date: {} has confidence: {}".format(
#                 transaction_date.value, transaction_date.confidence
#             )
#         )
#     if receipt.fields.get("Items"):
#         print("Receipt items:")
#         for idx, item in enumerate(receipt.fields.get("Items").value):
#             print("...Item #{}".format(idx + 1))
#             item_description = item.value.get("Description")
#             if item_description:
#                 print(
#                     "......Item Description: {} has confidence: {}".format(
#                         item_description.value, item_description.confidence
#                     )
#                 )
#             item_quantity = item.value.get("Quantity")
#             if item_quantity:
#                 print(
#                     "......Item Quantity: {} has confidence: {}".format(
#                         item_quantity.value, item_quantity.confidence
#                     )
#                 )
#             item_price = item.value.get("Price")
#             if item_price:
#                 print(
#                     "......Individual Item Price: {} has confidence: {}".format(
#                         item_price.value, item_price.confidence
#                     )
#                 )
#             item_total_price = item.value.get("TotalPrice")
#             if item_total_price:
#                 print(
#                     "......Total Item Price: {} has confidence: {}".format(
#                         item_total_price.value, item_total_price.confidence
#                     )
#                 )
#     subtotal = receipt.fields.get("Subtotal")
#     if subtotal:
#         print(
#             "Subtotal: {} has confidence: {}".format(
#                 subtotal.value, subtotal.confidence
#             )
#         )
#     tax = receipt.fields.get("TotalTax")
#     if tax:
#         print("Tax: {} has confidence: {}".format(tax.value, tax.confidence))
#     tip = receipt.fields.get("Tip")
#     if tip:
#         print("Tip: {} has confidence: {}".format(tip.value, tip.confidence))
#     total = receipt.fields.get("Total")
#     if total:
#         print("Total: {} has confidence: {}".format(total.value, total.confidence))
#     print("--------------------------------------")

# completion = openai.ChatCompletion.create(
#   model="gpt-3.5-turbo",
#   messages=
#   [
#     {"role": "system", "content": "You are a rude, condescending financial advisor who gives terrible financial advice to a customer based on their spending habits."},
#     {"role": "user", "content": "Recent spending: McDonalds - $500, Candles - $2500, Utilities - $350, Groceries - $20"}
#   ]
# )
# print(completion)
