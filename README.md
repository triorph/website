# Overview

First pass on making a website for myself as a coding challenge.

Features I want:

- Basic Single Page App (Angular to get familiar with what we use at work)
- Server lambda backend in Python using DynamoDB as a nosql database
- Introduction
- Blog posts (for backend)
- Resume

Basic planned layout is:
frontend/ (angular SPA)
iac/
iac/lambdas (api gateway, lambda setup, actual lambdas themselves)
iac/codepipeline (deploy latest things automatically)
iac/webpage (cloudfront, s3, etc..)
iac/backend (database instantiation etc..)

# Front end

Single page app. Will be written in Angular, as frontend code is unfamiliar enough to me that working on something
with some modicum of familiarity is still worthwhile. Testing in Jest (which I think is the default/requirement for angular)
but will aim to actually get e2e testing in place too, using codeceptjs

# Backend

Want to explore more using lambdas as a backend option. Since python is basically my bread and butter, this shouldn't
be too difficult. To get a bit of extra learning in, I plan to use DynamoDB as the database, since I've never
used a nosql database.

views that we need:

- login
- logout
- add blog post
- update blog post
- upload image to s3
- delete blog post
- read blog post
- get all blog post IDs/titles. (paginated)

add/update/delete require authorisation. Best to use a session based cookie with a backend expiry time (2 hours?).
it would be really nice if add/update took markdown as the input, and converted to html. Surely there's a python library for this.

blog posts can be hidden, in which case they're not viewable unless you have authorisation.

authorisation for now is just me or not-me, so basically yes/no on admin activities or base read-only privileges.

Additional future options:
comments? seems likely a spam problem so too much hassle.

tables needed:
user:

- username (primary key),
- password (hashed + salted)
  session: token (primary key), time created, time expires, username
  blog:
- id (primary key)
- title,
- time created (secondary key, for pagination lookup),
- time updated,
- hidden (default = True, secondary key as will be a key on lookup),
- content_markdown
- content_html

# Infrastructure

I'm hoping to have this run on AWS free-tier, although if it gets serious enough I'll probably want to get a real
website DNS and pay for that. By using cloudfront/s3/lambdas/dynamodb hopefully this is running as cheap as possible.

I'll write IaC in pulumi, as I'm not super interested in doing/trying something new in the DevOps space, so will
stick with what I know. Other alternatives would be to try the "serverless framework" for setting up the lambdas.

Rough infrastructure plan is:

SPA build is stored in an S3 bucket. Cloudfront distribution is setup with an origin access identity to allow
access to this S3 bucket via the web.

Lambdas are setup with an API Gateway, which is also attached to the cloudfront distribution. With this, we can
access the web page via

In terms of networking: we'll have 1 VPC in us-west-1 (to save money again). Inside we'll have the usual 3 subnets of public/app/db.
API gateway and origin access identity in public subnet
lambdas in private subnet (does this even make sense?)
dynamodb in db subnet

remind myself, do we need separate subnets for availability zones? Or just the resources underneath? Does it even matter that my
dinky little personal website be highly available? Probably best to do good practice on this regardless.
