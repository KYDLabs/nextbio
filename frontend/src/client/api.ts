import config from "@/util/config";

// TODO: might be done better with a client like axios
export const authenticated = async (...args: any[]) => {
  //@ts-ignore
  const result = await fetch(...args, {
    headers: {
      "x-api-key": config.apiKey,
      "content-type": "application/json",
    },
  }).then((res) => res.json());

  if (result.success) {
    return result.response;
  } else {
    throw new Error(result);
  }
};
