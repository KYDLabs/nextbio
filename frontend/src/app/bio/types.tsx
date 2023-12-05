// TODO: shared interfaces
export type Response<ResponseType> = {
  success: boolean;
  response: ResponseType;
  request_id: string;
};

export type Event = {
  id: string;
  name: string;
  start_at: string; // Assuming it's a string representation of a date
  display_start_at: string;
  timezone: string;
  artist: string;
  image: string;
  venue: {
    name: string;
    city: string;
    lat: number;
    long: number;
  };
  distance: number;
};
