import { geolocation } from "@vercel/edge";
import { NextResponse } from "next/server";

export const runtime = "edge";

export function GET(request: Request) {
  return NextResponse.json(geolocation(request));
}
