import type { BioEvent } from "../../common/Interfaces";
export type { BioEvent } from "../../common/Interfaces";
// https://github.com/vercel/next.js/discussions/26420

export type Response<ResponseType> = {
  success: boolean;
  response: ResponseType;
  request_id: string;
};

export type BioEvents = {
  events: BioEvent[];
};
