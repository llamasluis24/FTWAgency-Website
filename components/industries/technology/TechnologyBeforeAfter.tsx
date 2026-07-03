"use client";

import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WebsiteBeforeAfterComparison } from "@/components/portfolio/WebsiteBeforeAfterComparison";
import type { TechnologyWebsiteDesignModules } from "@/content/industries/technology-website-design-modules";
import { websiteBeforeAfterExamples } from "@/content/website-portfolio-before-after";

function ComparisonPoints({
  label,
  headline,
  items,
  variant,
}: {
  label: string;
  headline: string;
  items: readonly string[];
  variant: "before" | "after";
}) {
  const isAfter = variant === "after";

  return (
    <div>
      <p
        className={
          isAfter
            ? "mb-1 text-[10px] font-semibold uppercase tracking-wider text-accent"
            : "mb-1 text-[10px] font-semibold uppercase tracking-wider text-red-400"
        }
      >
        {label}
      </p>
      <p className="mb-4 font-display text-sm font-semibold text-heading">{headline}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-body">
            <span
              className={
                isAfter
                  ? "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-success/15"
                  : "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-500/15"
              }
            >
              {isAfter ? (
                <Check className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
              ) : (
                <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
              )}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechnologyBeforeAfter({
  content,
}: {
  content: TechnologyWebsiteDesignModules["beforeAfter"];
}) {
  const portfolioExample = content.portfolioExample
    ? websiteBeforeAfterExamples.find(
        (example) => example.title === content.portfolioExample?.exampleTitle,
      )
    : undefined;

  return (
    <Section>
      <Container>
        {portfolioExample && content.portfolioExample && (
          <Reveal>
            <SectionHeading
              eyebrow={content.portfolioExample.eyebrow}
              title={content.portfolioExample.title}
              lede={content.portfolioExample.lede}
              className="mb-10 md:mb-12"
            />

            <WebsiteBeforeAfterComparison example={portfolioExample} />

            <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 md:mt-12 md:grid-cols-2 md:gap-12 md:pt-12">
              <ComparisonPoints
                variant="before"
                label={content.before.label}
                headline={content.before.headline}
                items={content.before.items}
              />
              <ComparisonPoints
                variant="after"
                label={content.after.label}
                headline={content.after.headline}
                items={content.after.items}
              />
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}
