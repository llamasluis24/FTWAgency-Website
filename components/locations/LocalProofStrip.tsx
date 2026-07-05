import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { getCaseStudiesByLocation } from "@/lib/linking";
import type { Location } from "@/lib/schemas";

/** Local proof module for city combo pages — surfaces a relevant case study when available. */
export function LocalProofStrip({
  location,
  industrySlug,
}: {
  location: Location;
  industrySlug?: string;
}) {
  const caseStudies = getCaseStudiesByLocation(location.slug, 3).filter((cs) =>
    industrySlug ? cs.industry === industrySlug : true,
  );
  const caseStudy = caseStudies[0];
  if (!caseStudy) return null;

  const highlight = caseStudy.results[0];

  return (
    <Section className="!py-12" surface>
      <Container>
        <Reveal className="card-surface flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <p className="eyebrow mb-2">Local Proof</p>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Results in the {location.city} market
            </h2>
            <p className="mt-3 text-body">{caseStudy.summary}</p>
          </div>
          {highlight ? (
            <div className="shrink-0 text-center md:min-w-[180px]">
              <StatCounter stat={highlight} valueClassName="!text-3xl !text-success" />
            </div>
          ) : null}
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-accent"
          >
            Read the case study
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
