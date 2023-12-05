import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamo = new DynamoDBClient();

export default class BioService {
  fetchBio = async () => {
    return {
      events: [
        {
          id: "EV3dcd3687-fb03-4369-8fd8-cad2627c39a4",
          name: "Event 1",
          start_at: "2024-01-01T02:00:00.000Z",
          display_start_at: "Sun Dec 31 9:00PM",
          timezone: "America/New_York",
          artist: "Artist1",
          image:
            "https://kydlabs.imgix.net/a/EV3dcd3687-fb03-4369-8fd8-cad2627c39a4/bd060000-ad3d-42f4-b172-e3330dc12bdf.png?auto=format,compress&q=40&h=1080",
          venue: {
            name: "Lot 45 Bushwick",
            city: "New York",
            lat: 40.7038,
            long: -73.922,
          },
          distance: 0.1,
        },
      ],
    };
  };
}
