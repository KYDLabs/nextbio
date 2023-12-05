import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";
import BioService from "@common/BioService";

const service = new BioService();

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  console.log("Event: ", JSON.stringify(event, null, 2));
  try {
    const { queryStringParameters = {} } = event;
    const { latitude, longitude } = queryStringParameters;
    const result = await service.fetchBio("default", { latitude, longitude });
    return formatJSONResponse(result, event);
  } catch (err) {
    console.error(err);
    return formatJSONResponse(
      {
        message: err.message,
      },
      event,
      err.statusCode
    );
  }
};

export const main = middyfy(handler);
