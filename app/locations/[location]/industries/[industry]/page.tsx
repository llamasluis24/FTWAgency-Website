import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { getIndustryHeroImage } from "@/content/industry-hero-images";
import { locationIndustryCopy } from "@/lib/combo";
import {
  getAllIndustries,
  getAllLocations,
  getIndustry,
  getLocation,
  getService,
} from "@/lib/content";

interface Props {
  params: Promise<{ location: string; industry: string }>;
}

/** Location + Industry combo pages — programmatic SEO surface. */
export function generateStaticParams() {
  return getAllLocations().flatMap((location) =>
    getAllIndustries().map((industry) => ({
      location: location.slug,
      industry: industry.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: lSlug, industry: iSlug } = await params;
  const location = getLocation(lSlug);
  const industry = getIndustry(iSlug);
  if (!location || !industry) return {};
  const copy = locationIndustryCopy(industry, location);
  return buildMetadata({
    title: copy.meta.title,
    description: copy.meta.description,
    path: `/locations/${location.slug}/industries/${industry.slug}`,
  });
}

export default async function LocationIndustryPage({ params }: Props) {
  const { location: lSlug, industry: iSlug } = await params;
  const location = getLocation(lSlug);
  const industry = getIndustry(iSlug);
  if (!location || !industry) notFound();

  const copy = locationIndustryCopy(industry, location);

  return (
    <>
      <JsonLd data={[localBusinessSchema(location)]} />

      <PageHero
        eyebrow={`${industry.title} · ${location.city}, ${location.stateAbbr}`}
        headline={copy.headline}
        sub={copy.sub}
        backgroundImage={getIndustryHeroImage(industry.slug)}
        crumbs={[
          { name: "Locations", path: "/locations" },
          { name: location.city, path: `/locations/${location.slug}` },
          {
            name: industry.title,
            path: `/locations/${location.slug}/industries/${industry.slug}`,
          },
        ]}
      />

      {/* Local industry framing */}
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

      {/* Pain points */}
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

      {/* Recommended stack → industry+service combo pages */}
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

      <FAQSection faqs={copy.faqs} />

      <CTASection
        headline={`Grow Your ${industry.title} Business in *${location.city}*`}
        sub="Book a strategy call and we'll map the system for your market, your customers, and your competition."
      />
    </>
  );
}
