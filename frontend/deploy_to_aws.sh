#!/bin/sh
export AWS_PROFILE="miek"
ng build
cd dist/personal-website/
aws s3 sync --delete . s3://miek-personal-website/
aws cloudfront create-invalidation --distribution-id E1YA4S1E16V0WB --paths "/*"
