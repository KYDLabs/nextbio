import { geolocation } from "@vercel/edge";
import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET(request: Request) {
  return NextResponse.json({
    // Doesn't work in development, never returns latitude/longitude
    ...geolocation(request),
    // TODO: remove this for production
    // latitude: '38.9384274',
    // longitude: '-9.3467824',
  });
}
