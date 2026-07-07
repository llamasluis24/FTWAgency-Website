import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import {
  RelatedArticles,
  RelatedCaseStudies,
  RelatedLocations,
} from "@/components/blocks/Related";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { Icon } from "@/components/ui/Icon";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { enrichProject } from "@/lib/collections";
import {
  getArticlesByLocation,
  getCaseStudiesByLocation,
  getNearbyLocations,
  getProjectsByLocation,
} from "@/lib/linking";
import {
  getAllIndustries,
  getAllServices,
} from "@/lib/content";
import {
  isLocationIndustryComboPublished,
  isLocationServiceComboPublished,
} from "@/lib/publish";
import { LocationFactBlock } from "@/components/locations/LocationFactBlock";
import { LocationLastUpdated } from "@/components/locations/LocationLastUpdated";
import { getLocationHeroImage } from "@/content/location-hero-images";
import { LocationsMapSection } from "@/components/locations/LocationsMapSection";
import { getPublishedLocations } from "@/lib/publish";
import { locationsToMapPins } from "@/lib/map/pins";
import type { Location } from "@/lib/schemas";

export function LocationHubPage({ location }: { location: Location }) {
  const services = getAllServices().filter((service) =>
    isLocationServiceComboPublished(location, service.slug),
  );
  const industries = getAllIndustries().filter((industry) =>
    isLocationIndustryComboPublished(location, industry.slug),
  );
  const caseStudies = getCaseStudiesByLocation(location.slug);
  const projects = getProjectsByLocation(location.slug);
  const articles = getArticlesByLocation(location.slug);
  const nearby = getNearbyLocations(location.slug);
  const mapPins = locationsToMapPins(getPublishedLocations());

  return (
    <>
      <PageHero
        eyebrow={`${location.city}, ${location.state}`}
        headline={location.heroHeadline}
        sub={location.heroSub}
        backgroundImage={getLocationHeroImage(location.slug)}
        breadcrumbSchema={false}
        crumbs={[
          { name: "Locations", path: "/locations" },
          { name: location.city, path: `/locations/${location.slug}` },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-3">The {location.city} Market</p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Why growth systems win in {location.city}
              </h2>
              <p className="mt-5 text-lg text-body">{location.intro}</p>
              <div className="mt-6">
                <LocationLastUpdated location={location} />
              </div>
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

      <LocationsMapSection
        pins={mapPins}
        mode="city"
        focusSlug={location.slug}
        eyebrow="Service Area"
        title={`Also Serving *Nearby* Markets`}
        lede={`Explore ${location.city} on the map — plus the neighboring markets where we deploy the same growth systems.`}
      />

      {location.stats.length > 0 ? (
        <Section className="!py-14" surface>
          <Container>
            <SectionHeading
              eyebrow="Local Market"
              title={`${location.city} by the *Numbers*`}
            />
            <Reveal className="card-surface grid gap-8 p-8 text-center sm:grid-cols-3 md:p-10">
              {location.stats.map((stat) => (
                <StatCounter key={stat.label} stat={stat} />
              ))}
            </Reveal>
          </Container>
        </Section>
      ) : null}

      {location.whyLocal.length > 0 ? (
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Why FTW"
              title={`Built for the *${location.city}* Market`}
            />
            <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {location.whyLocal.map((point) => (
                <RevealItem key={point.title} className="card-surface p-6">
                  <h3 className="font-display text-base font-semibold text-heading">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {point.description}
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        </Section>
      ) : null}

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
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#60d8b8]/10">
                    <Icon name={industry.icon} className="h-4 w-4 text-[#60d8b8]" />
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

      {caseStudies.length > 0 ? (
        <RelatedCaseStudies
          caseStudies={caseStudies}
          title={`Proven Results in *${location.city}*`}
        />
      ) : null}

      {projects.length > 0 ? (
        <Section surface>
          <Container>
            <SectionHeading
              eyebrow="Portfolio"
              title={`Work Connected to *${location.city}*`}
            />
            <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <RevealItem key={project.slug}>
                  <ProjectCard data={enrichProject(project)} />
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        </Section>
      ) : null}

      {articles.length > 0 ? (
        <RelatedArticles articles={articles} title={`Insights for *${location.city}*`} />
      ) : null}

      {nearby.length > 0 ? (
        <RelatedLocations
          locations={nearby}
          title="Nearby *Markets*"
          surface={articles.length === 0 && projects.length === 0}
        />
      ) : null}

      <LocationFactBlock location={location} />

      <FAQSection faqs={location.faqs} includeSchema={false} />

      <CTASection
        headline={`Ready to Grow in *${location.city}*?`}
        sub={`Book a strategy call and we'll map the growth system for your business and the ${location.city} market.`}
      />
    </>
  );
}
