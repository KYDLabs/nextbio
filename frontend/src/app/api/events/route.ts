import { authenticated } from "@/client/api";
import { BioEvents } from "@/types";
import config from "@/util/config";
import { geolocation } from "@vercel/edge";
import { NextResponse } from "next/server";

export const runtime = "edge";

function orderByDistance(response: BioEvents) {
  return {
    ...response,
    events: response.events.sort((a, b) => a.distance - b.distance),
  };
}

export async function GET(request: Request) {
  const { latitude, longitude } = geolocation(request);
  const usp = new URLSearchParams();
  usp.append("latitude", latitude || "38.938113");
  usp.append("longitude", longitude || "-9.3465547");

  try {
    const data = await authenticated<BioEvents>(
      `${config.apiUrl}/bio?${usp.toString()}`
    );

    return NextResponse.json(orderByDistance(data));
  } catch (e) {
    return NextResponse.json({
      success: false,
      error: e,
    });
  }
}
