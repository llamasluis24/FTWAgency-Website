import { ImageResponse } from "next/og";
import { getPublishedLocations } from "@/lib/publish";
import { LocationOgImage } from "@/lib/og/location-og";

export const alt = "FTW Agency — Southern California growth markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const locations = getPublishedLocations();
  const cityList = locations.map((l) => l.city).join(" · ");

  return new ImageResponse(
    (
      <LocationOgImage
        eyebrow="Locations"
        title="Southern California Markets"
        subtitle={`Growth systems across ${locations.length} active markets — ${cityList}.`}
      />
    ),
    { ...size },
  );
}
