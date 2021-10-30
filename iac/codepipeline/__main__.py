"""
Automate deployment of the website

Things we need:
    - iam permissions for codebuild
    - iamrole for codebuild
    - codebuild project
    - codepipeline stages
        - source
        - build/deploy lambdas
        - build website
        - deploy SPA
        
Might want to think some more about how we actually do this, perhaps
2 pipelines. 1 for the IaC to run whenever the backend changes, and 1
to deploy the SPA images when the build artifacts for the SPA are 
completed from the CI/CD pipeline.
"""

import pulumi
from pulumi_aws import s3

# Create an AWS resource (S3 Bucket)
bucket = s3.Bucket("my-bucket")

# Export the name of the bucket
pulumi.export("bucket_name", bucket.id)
