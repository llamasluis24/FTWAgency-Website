import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedCaseStudies, RelatedLocations } from "@/components/blocks/Related";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { LocalProofStrip } from "@/components/locations/LocalProofStrip";
import { LocationHubLink } from "@/components/locations/LocationFactBlock";
import { getLocationHeroImage } from "@/content/location-hero-images";
import { locationIndustryCopy } from "@/lib/combo";
import { getIndustry, getService } from "@/lib/content";
import { getCaseStudiesByLocation, getNearbyLocations } from "@/lib/linking";
import type { Location } from "@/lib/schemas";

export function LocationIndustryPageView({
  location,
  industrySlug,
}: {
  location: Location;
  industrySlug: string;
}) {
  const industry = getIndustry(industrySlug);
  if (!industry) return null;

  const copy = locationIndustryCopy(industry, location);
  const caseStudies = getCaseStudiesByLocation(location.slug, 3).filter(
    (cs) => cs.industry === industry.slug,
  );
  const nearby = getNearbyLocations(location.slug);
  const crumbs = [
    { name: "Locations", path: "/locations" },
    { name: location.city, path: `/locations/${location.slug}` },
    {
      name: industry.title,
      path: `/locations/${location.slug}/industries/${industry.slug}`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${industry.title} · ${location.city}, ${location.stateAbbr}`}
        headline={copy.headline}
        sub={copy.sub}
        backgroundImage={getLocationHeroImage(location.slug)}
        breadcrumbSchema={false}
        crumbs={crumbs}
      />

      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">The Local Opportunity</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {industry.title} in {location.city}: the market is moving
            </h2>
            <p className="mt-5 text-lg text-body">{copy.intro}</p>
            <p className="mt-4 text-body">{industry.growthSystem.description}</p>
          </Reveal>
        </Container>
      </Section>

      <LocalProofStrip location={location} industrySlug={industry.slug} />

      <Section surface>
        <Container>
          <SectionHeading
            eyebrow="The Challenge"
            title={`What ${location.city} ${industry.title} Businesses Face`}
          />
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industry.painPoints.map((point) => (
              <RevealItem key={point.title} className="card-surface flex flex-col items-center p-6 text-center">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                  <X className="h-5 w-5 text-red-500" strokeWidth={2.5} />
                </span>
                <h3 className="font-display text-base font-semibold text-heading">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{point.description}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Recommended Stack"
            title={`The System for ${industry.title} in *${location.city}*`}
          />
          <RevealStagger className="grid gap-4">
            {industry.serviceStack.map((item) => {
              const service = getService(item.service);
              if (!service) return null;
              return (
                <RevealItem key={item.service}>
                  <Link
                    href={`/locations/${location.slug}/${service.slug}`}
                    className="card-surface card-hover group flex items-center gap-4 p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <Icon name={service.icon} className="h-4 w-4 text-accent" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-base font-semibold text-heading transition-colors group-hover:text-accent">
                        {service.shortTitle} in {location.city}
                      </span>
                      <span className="text-sm text-body">{item.reason}</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      strokeWidth={2}
                    />
                  </Link>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </Container>
      </Section>

      {caseStudies.length > 0 ? (
        <RelatedCaseStudies
          caseStudies={caseStudies}
          title={`${industry.title} Results in *${location.city}*`}
          surface
        />
      ) : null}

      {nearby.length > 0 ? (
        <RelatedLocations locations={nearby} title="Nearby *Markets*" />
      ) : null}

      <LocationHubLink location={location} />

      <FAQSection faqs={copy.faqs} includeSchema={false} />

      <CTASection
        headline={`Grow Your ${industry.title} Business in *${location.city}*`}
        sub="Book a strategy call and we'll map the system for your market, your customers, and your competition."
      />
    </>
  );
}
