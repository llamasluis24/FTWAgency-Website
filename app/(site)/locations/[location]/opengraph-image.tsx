import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getLocation } from "@/lib/content";
import { LocationOgImage } from "@/lib/og/location-og";

export const alt = "FTW Agency local market";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ location: string }>;
}

export default async function Image({ params }: Props) {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return new ImageResponse(
    (
      <LocationOgImage
        eyebrow={`${location.city}, ${location.stateAbbr}`}
        title={`Growth Systems in ${location.city}`}
        subtitle={`Local SEO, websites, automation, and software for ${location.metro}.`}
      />
    ),
    { ...size },
  );
}
