import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

export const formatJSONResponse = (
  response: any,
  event: any,
  statusCode: number = 200
) => {
  const result: any = { response };
  if (response) {
    const { requestContext = {} } = event;
    result.request_id = requestContext.requestId;
    result.success = statusCode === 200;
  }

  return {
    statusCode,
    body: JSON.stringify(result),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
};
