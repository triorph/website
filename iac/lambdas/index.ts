import * as pulumi from "@pulumi/pulumi";
import * as awsx from "@pulumi/awsx";
import * as aws from "@pulumi/aws";

const authorizerRole = new aws.iam.Role("myauthorizer-role", {
  assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({
    Service: ["lambda.amazonaws.com"],
  }),
});

// Create the Authorizer Lambda
const authorizerLambda = new aws.lambda.Function("authorizer-lambda", {
  code: new pulumi.asset.FileArchive("./authfunction"),
  role: authorizerRole.arn,
  handler: "index.handler",
  runtime: aws.lambda.NodeJS8d10Runtime,
});

// Create a role for the gateway to use to invoke the Authorizer Lambda
const gatewayRole = new aws.iam.Role("gateway-role", {
  assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({
    Service: ["lambda.amazonaws.com", "apigateway.amazonaws.com"],
  }),
});

// Give the lambda role permission to invoke the Authorizer -- TODO this can be another role
const invocationPolicy = new aws.iam.RolePolicy("invocation-policy", {
  policy: authorizerLambda.arn.apply(
    (arn) => `{
     "Version": "2012-10-17",
       "Statement": [
         {
           "Action": "lambda:InvokeFunction",
           "Effect": "Allow",
           "Resource": "${arn}"
         }
       ]
     }
     `
  ),
  role: gatewayRole.id,
});

const api = new awsx.apigateway.API("backend-api", {
  routes: [
    {
      path: "/blog/create",
      method: "POST",
      eventHandler: createBlogPostLambdaFunction,
      authorizers: [
        {
          authorizerName: "testing",
          parameterName: "auth",
          parameterLocation: "query",
          authType: "custom",
          type: "request",
          handler: {
            // Either specify the aws.lambda.Function or provide the invoke URI
            uri: authorizerLambda,
            credentials: gatewayRole.arn,
          },
          identitySource: ["method.request.querystring.auth"],
        },
      ],
    },
  ],
});
