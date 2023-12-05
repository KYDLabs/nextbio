import type { AWS } from "@serverless/typescript";

import functions from "@functions/index";

const serverlessConfiguration: AWS = {
  service: "nextbio-api",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    stage: "${opt:stage, 'prod'}",
    timeout: 29,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
      apiKeys: [
        {
          name: "${self:service}-${self:provider.stage}",
        },
      ],
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      TABLE_NAME: "${self:custom.TABLE_NAME}",
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: [
              "dynamodb:Query",
              "dynamodb:Scan",
              "dynamodb:GetItem",
              "dynamodb:PutItem",
              "dynamodb:UpdateItem",
              "dynamodb:BatchGetItem",
              "dynamodb:DeleteItem",
            ],
            Resource: {
              "Fn::GetAtt": ["DynamoTable", "Arn"],
            },
          },
        ],
      },
    },
  },
  // import the function via paths
  functions,
  package: { individually: true },
  resources: {
    Resources: {
      DynamoTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "${self:custom.TABLE_NAME}",
          AttributeDefinitions: [
            { AttributeName: "pk", AttributeType: "S" },
            { AttributeName: "sk", AttributeType: "S" },
          ],
          KeySchema: [
            { AttributeName: "pk", KeyType: "HASH" },
            { AttributeName: "sk", KeyType: "RANGE" },
          ],
          BillingMode: "PAY_PER_REQUEST",
        },
      },
    },
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node18",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    TABLE_NAME: "BioTable",
  },
};

module.exports = serverlessConfiguration;
