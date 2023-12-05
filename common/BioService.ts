import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import data from "./mock_data.json";

const dynamo = new DynamoDBClient();

export default class BioService {
  private calcuteDistanceBetweenLatLong = (
    lat1: number,
    long1: number,
    lat2: number,
    long2: number
  ) => {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    const dLon = this.deg2rad(long2 - long1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  private deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  fetchBio = async (
    artist_name: string,
    params?: { latitude: string; longitude: string }
  ) => {
    data.response.events.forEach((event) => {
      event.distance =
        params && params.latitude && params.longitude
          ? this.calcuteDistanceBetweenLatLong(
              parseFloat(params?.latitude),
              parseFloat(params?.longitude),
              event.venue.latitude,
              event.venue.longitude
            )
          : 0;
    });

    return data.response;
  };
}
