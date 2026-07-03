import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";
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
import {
  getAllIndustries,
  getAllLocations,
  getAllServices,
  getLocation,
} from "@/lib/content";

interface Props {
  params: Promise<{ location: string }>;
}

export function generateStaticParams() {
  return getAllLocations().map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.meta.title,
    description: location.meta.description,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const services = getAllServices();
  const industries = getAllIndustries();

  return (
    <>
      <JsonLd data={[localBusinessSchema(location)]} />

      {/* Localized hero */}
      <PageHero
        eyebrow={`${location.city}, ${location.state}`}
        headline={location.heroHeadline}
        sub={location.heroSub}
        crumbs={[
          { name: "Locations", path: "/locations" },
          { name: location.city, path: `/locations/${location.slug}` },
        ]}
      />

      {/* Local market positioning */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-3">The {location.city} Market</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Why growth systems win in {location.city}
              </h2>
              <p className="mt-5 text-lg text-body">{location.intro}</p>
            </Reveal>
            <RevealStagger className="space-y-4">
              {location.marketPoints.map((point) => (
                <RevealItem key={point.title} className="card-surface p-6">
                  <h3 className="font-display text-base font-semibold text-heading">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">
                    {point.description}
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>

      {/* Services grid → location combo pages */}
      <Section surface>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title={`Growth Services in *${location.city}*`}
            lede="Every FTW service, delivered with local market context."
          />
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <Link
                  href={`/locations/${location.slug}/${service.slug}`}
                  className="card-surface card-hover group flex items-center gap-4 p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon name={service.icon} className="h-4 w-4 text-accent" />
                  </span>
                  <span className="flex-1 font-display text-sm font-semibold text-heading transition-colors group-hover:text-accent">
                    {service.shortTitle} in {location.city}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    strokeWidth={2}
                  />
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Service areas */}
      <Section>
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Service Areas"
            title={`Serving Greater *${location.city}*`}
          />
          <RevealStagger className="flex flex-wrap justify-center gap-3">
            {location.serviceAreas.map((area) => (
              <RevealItem
                key={area}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-body"
              >
                <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                {area}
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Industries in this market → location+industry combo pages */}
      <Section surface>
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title={`Industries We Serve in *${location.city}*`}
          />
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <RevealItem key={industry.slug}>
                <Link
                  href={`/locations/${location.slug}/industries/${industry.slug}`}
                  className="card-surface card-hover group flex items-center gap-3 p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Icon name={industry.icon} className="h-4 w-4 text-accent" />
                  </span>
                  <span className="flex-1 font-display text-sm font-semibold text-heading transition-colors group-hover:text-accent">
                    {industry.title}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    strokeWidth={2}
                  />
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <FAQSection faqs={location.faqs} />

      <CTASection
        headline={`Ready to Grow in *${location.city}*?`}
        sub={`Book a strategy call and we'll map the growth system for your business and the ${location.city} market.`}
      />
    </>
  );
}
