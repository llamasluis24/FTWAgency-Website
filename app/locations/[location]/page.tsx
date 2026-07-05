import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationHubPage } from "@/components/locations/LocationHubPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { buildLocationHubMetadata } from "@/lib/metadata-local";
import { getLocation } from "@/lib/content";
import { getPublishedLocations } from "@/lib/publish";

interface Props {
  params: Promise<{ location: string }>;
}

export function generateStaticParams() {
  return getPublishedLocations().map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  const meta = buildLocationHubMetadata(location);
  return buildMetadata({
    title: location.meta.title || meta.title,
    description: location.meta.description || meta.description,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <>
      <JsonLd data={[localBusinessSchema(location)]} />
      <LocationHubPage location={location} />
    </>
  );
}
