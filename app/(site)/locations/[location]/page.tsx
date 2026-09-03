import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationHubPage } from "@/components/locations/LocationHubPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, buildLocationOgImage } from "@/lib/metadata";
import { buildLocationHubMetadata } from "@/lib/metadata-local";
import { locationHubGraph } from "@/lib/jsonld-graph";
import { getLocationRobots } from "@/lib/publish-meta";
import { getLocation } from "@/lib/content";
import { siteConfig } from "@/content/site";
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
    ogImage: buildLocationOgImage(
      `/locations/${location.slug}`,
      `${location.city} growth systems — ${siteConfig.name}`,
    ),
    robots: getLocationRobots(location),
  });
}

export default async function LocationPage({ params }: Props) {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const crumbs = [
    { name: "Locations", path: "/locations" },
    { name: location.city, path: `/locations/${location.slug}` },
  ];

  return (
    <>
      <JsonLd data={[locationHubGraph(location, crumbs, location.faqs)]} />
      <LocationHubPage location={location} />
    </>
  );
}
