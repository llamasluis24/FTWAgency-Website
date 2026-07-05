import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { Location } from "@/lib/schemas";

/** Machine-readable fact block for AI search extraction on city hubs. */
export function LocationFactBlock({ location }: { location: Location }) {
  const services = location.featuredServices?.length
    ? location.featuredServices.join(", ")
    : "SEO, web design, AIO, GBP, automation, and software";

  const facts = [
    { label: "Market", value: `${location.city}, ${location.stateAbbr}` },
    { label: "County", value: location.county },
    { label: "Metro", value: location.metro },
    { label: "Region", value: location.region },
    { label: "Services", value: services },
    {
      label: "Service area",
      value: location.serviceAreas.slice(0, 5).join(" · "),
    },
  ];

  return (
    <Section className="!py-12">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-3">At a Glance</p>
          <h2 className="sr-only">{`FTW Agency in ${location.city}, ${location.stateAbbr}`}</h2>
          <dl className="card-surface divide-y divide-white/5 p-6 md:p-8">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:gap-6"
              >
                <dt className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted sm:w-32">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-relaxed text-body">{fact.value}</dd>
              </div>
            ))}
          </dl>
          {location.publish.lastModified ? (
            <p className="mt-4 text-xs text-muted">
              Last updated {location.publish.lastModified}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </Section>
  );
}

/** Quick link back to city hub from combo pages. */
export function LocationHubLink({ location }: { location: Location }) {
  return (
    <Section className="!py-8">
      <Container className="max-w-3xl">
        <Reveal>
          <Link
            href={`/locations/${location.slug}`}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            Explore all growth services in {location.city}
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
