I initially created a new VPC using the awsx tools in pulumi,
however I then got charged some money for having the NAT gateway up.
Although I only lost about $4, this was just over a week and I was
hoping to have this all running via the free tier.

I think I don't actually need any of this stuff, since
dynamodb, lambdas, s3 and cloudfront all do not live
inside a VPC, the only resource I potentially have to worry about
is API gateway, and maybe even this doesn't require a VPC.

Seems like the architecture I'm choosing actually
massively simplifies the requirements for the networking. For now
I will leave this pulumi "off" until I see any need to turn it back on.
