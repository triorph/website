#!/bin/sh
export AWS_PROFILE="miek"
cd dist/personal-website/
aws s3 sync --delete . s3://miek-personal-website/
