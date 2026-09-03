import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/layout/Section";
import type { CaseStudy } from "@/lib/schemas";
import { farmhouseImages } from "@/content/case-studies/farmhouse-collective";

export function CampaignCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Section surface id="case-study">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={farmhouseImages.screenshotHome}
              alt="Farm House Collective website homepage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Case Study
            </p>
            <h2 className="font-display text-3xl font-semibold text-heading md:text-4xl">
              {caseStudy.title}
            </h2>
            <p className="mt-4 text-body">{caseStudy.summary}</p>
            <ul className="mt-6 space-y-2">
              {caseStudy.results.map((result) => (
                <li key={result.label} className="flex items-baseline gap-2 text-sm text-body">
                  <span className="font-display text-lg font-semibold text-accent">
                    {typeof result.value === "number" ? result.value.toLocaleString() : result.value}
                    {result.suffix ?? ""}
                  </span>
                  <span>{result.label}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/case-studies/${caseStudy.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm font-semibold text-accent transition-colors hover:text-heading"
            >
              Read the full case study →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
