import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationServicePageView } from "@/components/locations/LocationServicePageView";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { locationServiceGraph } from "@/lib/jsonld-graph";
import { locationServiceCopy } from "@/lib/combo";
import { getAllServices, getLocation, getService } from "@/lib/content";
import {
  getPublishedLocations,
  isLocationServiceComboPublished,
} from "@/lib/publish";

interface Props {
  params: Promise<{ location: string; service: string }>;
}

/** Location + Service combo pages — programmatic SEO surface. */
export function generateStaticParams() {
  return getPublishedLocations().flatMap((location) =>
    getAllServices()
      .filter((service) => isLocationServiceComboPublished(location, service.slug))
      .map((service) => ({
        location: location.slug,
        service: service.slug,
      })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: lSlug, service: sSlug } = await params;
  const location = getLocation(lSlug);
  const service = getService(sSlug);
  if (!location || !service) return {};
  const copy = locationServiceCopy(service, location);
  return buildMetadata({
    title: copy.meta.title,
    description: copy.meta.description,
    path: `/locations/${location.slug}/${service.slug}`,
  });
}

export default async function LocationServicePage({ params }: Props) {
  const { location: lSlug, service: sSlug } = await params;
  const location = getLocation(lSlug);
  const service = getService(sSlug);
  if (!location || !service) notFound();

  const copy = locationServiceCopy(service, location);
  const crumbs = [
    { name: "Locations", path: "/locations" },
    { name: location.city, path: `/locations/${location.slug}` },
    {
      name: service.shortTitle,
      path: `/locations/${location.slug}/${service.slug}`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          locationServiceGraph(location, service, crumbs, copy.faqs, copy.meta),
        ]}
      />
      <LocationServicePageView location={location} serviceSlug={service.slug} />
    </>
  );
}
