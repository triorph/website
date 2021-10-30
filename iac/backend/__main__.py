"""
Define the resources required for the backend to function.

As far as I'm aware, this is just the DynamoDB cluster/instance/whatever you call it.
"""

import pulumi
from pulumi_aws import s3

# Create an AWS resource (S3 Bucket)
bucket = s3.Bucket("my-bucket")

# Export the name of the bucket
pulumi.export("bucket_name", bucket.id)
