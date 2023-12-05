export type { BioEvent } from "../../../../common/Interfaces";

// TODO: shared interfaces
export type Response<ResponseType> = {
  success: boolean;
  response: ResponseType;
  request_id: string;
};

