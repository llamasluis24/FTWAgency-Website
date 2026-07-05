import { PageHero } from "@/components/blocks/PageHero";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { ProcessTimeline } from "@/components/blocks/ProcessTimeline";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedCaseStudies, RelatedLocations, RelatedServices } from "@/components/blocks/Related";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LocalProofStrip } from "@/components/locations/LocalProofStrip";
import { LocationHubLink } from "@/components/locations/LocationFactBlock";
import { locationServiceCopy } from "@/lib/combo";
import {
  getCaseStudiesByLocation,
  getNearbyLocations,
} from "@/lib/linking";
import { getRelatedServices, getService } from "@/lib/content";
import type { Location } from "@/lib/schemas";

export function LocationServicePageView({
  location,
  serviceSlug,
}: {
  location: Location;
  serviceSlug: string;
}) {
  const service = getService(serviceSlug);
  if (!service) return null;

  const copy = locationServiceCopy(service, location);
  const related = getRelatedServices(service);
  const caseStudies = getCaseStudiesByLocation(location.slug, 3);
  const nearby = getNearbyLocations(location.slug);
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
      <PageHero
        eyebrow={`${service.shortTitle} · ${location.city}, ${location.stateAbbr}`}
        headline={copy.headline}
        sub={copy.sub}
        breadcrumbSchema={false}
        crumbs={crumbs}
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

      <LocalProofStrip location={location} />

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

      {caseStudies.length > 0 ? (
        <RelatedCaseStudies
          caseStudies={caseStudies}
          title={`Proven Results Near *${location.city}*`}
        />
      ) : null}

      {nearby.length > 0 ? (
        <RelatedLocations locations={nearby} title="Nearby *Markets*" surface />
      ) : null}

      <LocationHubLink location={location} />

      <FAQSection faqs={copy.faqs} includeSchema={false} />

      <CTASection
        headline={`${service.shortTitle} in *${location.city}* Starts Here`}
        sub={`Book a strategy call and we'll map how this system performs for your business in the ${location.city} market.`}
      />
    </>
  );
}
