import { handlerPath } from "@libs/handler-resolver";

export default {
  //@ts-ignore
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "bio",
        cors: true,
        private: true,
      },
    },
  ],
};
