"""
Define resources to serve the website to the internet.

Things we need:
    - S3 bucket to store the static files
    - S3 bucket to store the build artifacts (with aggressive lifetime policies to save money)
    - Origin Access Identity to allow the S3 bucket to be accessed via cloudfront
    - Cloudfront distribution
    - Also want the cloudfront distribution to point to the API gateway in the lambdas stack
    - Route53 resolver (is this in front of the cloudfront distribution? Behind? Need to check)
"""

import pulumi
from pulumi_aws import s3

# Create an AWS resource (S3 Bucket)
bucket = s3.Bucket("my-bucket")

# Export the name of the bucket
pulumi.export("bucket_name", bucket.id)
