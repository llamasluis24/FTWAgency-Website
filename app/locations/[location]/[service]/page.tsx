import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/blocks/PageHero";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { ProcessTimeline } from "@/components/blocks/ProcessTimeline";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedServices } from "@/components/blocks/Related";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema, serviceSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { locationServiceCopy } from "@/lib/combo";
import {
  getAllLocations,
  getAllServices,
  getLocation,
  getRelatedServices,
  getService,
} from "@/lib/content";

interface Props {
  params: Promise<{ location: string; service: string }>;
}

/** Location + Service combo pages — programmatic SEO surface. */
export function generateStaticParams() {
  return getAllLocations().flatMap((location) =>
    getAllServices().map((service) => ({
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
  const related = getRelatedServices(service);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service, { locationName: location.city }),
          localBusinessSchema(location),
        ]}
      />

      <PageHero
        eyebrow={`${service.shortTitle} · ${location.city}, ${location.stateAbbr}`}
        headline={copy.headline}
        sub={copy.sub}
        crumbs={[
          { name: "Locations", path: "/locations" },
          { name: location.city, path: `/locations/${location.slug}` },
          {
            name: service.shortTitle,
            path: `/locations/${location.slug}/${service.slug}`,
          },
        ]}
      />

      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">Local Context</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {service.shortTitle} built for the {location.city} market
            </h2>
            <p className="mt-5 text-lg text-body">{copy.intro}</p>
            <p className="mt-4 text-body">{service.solution.description}</p>
          </Reveal>
        </Container>
      </Section>

      <BenefitsGrid
        benefits={service.benefits}
        title={`What ${location.city} Businesses *Get*`}
      />

      <ProcessTimeline steps={service.process} />

      <RelatedServices
        services={related}
        title={`Pairs Well With in *${location.city}*`}
        surface
      />

      <FAQSection faqs={copy.faqs} />

      <CTASection
        headline={`${service.shortTitle} in *${location.city}* Starts Here`}
        sub={`Book a strategy call and we'll map how this system performs for your business in the ${location.city} market.`}
      />
    </>
  );
}
