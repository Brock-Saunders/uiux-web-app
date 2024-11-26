import json
import os
from uuid import uuid4

import boto3


def lambda_handler(event, context):
    try:
        body = json.loads(event["body"])

        first_name = body["first_name"]
        last_name = body["last_name"]
        email = body["email"]
        phone = body["phone"]
        message = body["message"]

        dynamodb = boto3.resource('dynamodb')
        table = dynamodb.Table(os.environ['CONTACT_FORM_TABLE'])

        entry_id = str(uuid4())

        table.put_item(
            Item={
                'id': entry_id,
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'phone': phone,
                'message': message
            }
        )

        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",  # Allow all origins
                "Access-Control-Allow-Credentials": True,  # Allow credentials
                "Access-Control-Allow-Headers": "Content-Type",  # Allow specific headers
                "Access-Control-Allow-Methods": "OPTIONS,POST",  # Allow specific HTTP methods
            },
            "body": json.dumps({
                "message": f"Your form has been submitted successfully! ({entry_id})",
            }),
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "*",  # Allow all origins
                "Access-Control-Allow-Credentials": True,  # Allow credentials
                "Access-Control-Allow-Headers": "Content-Type",  # Allow specific headers
                "Access-Control-Allow-Methods": "OPTIONS,POST",  # Allow specific HTTP methods
            },
            "body": json.dumps({
                "error": "An error has occurred: " + str(e),
            })

        }
