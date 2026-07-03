"use client";

import { IndustryCard } from "@/components/cards/IndustryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { useIndustry } from "@/components/hero/IndustryContext";
import type { Industry } from "@/lib/schemas";

/**
 * Section 3 — Industry ecosystem grid. The industry selected in the hero
 * switcher is highlighted here.
 */
export function IndustriesGrid({ industries }: { industries: Industry[] }) {
  const { selected } = useIndustry();

  return (
    <Section surface id="industries">
      <Container>
        <SectionHeading
          eyebrow="Industries Served"
          title="Specialized Systems for *Your* Industry"
          lede="Broad enough for any growing business. Specialized enough to feel built for yours."
        />
        <RevealStagger className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <RevealItem key={industry.slug} className="h-full">
              <IndustryCard
                industry={industry}
                highlighted={industry.slug === selected.slug}
              />
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
