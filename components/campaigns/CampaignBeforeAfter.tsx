"use client";

import { WebsiteBeforeAfterComparison } from "@/components/portfolio/WebsiteBeforeAfterComparison";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { CampaignBeforeAfter } from "@/content/campaigns/types";

export function CampaignBeforeAfter({ beforeAfter }: { beforeAfter: CampaignBeforeAfter }) {
  const example = {
    title: "Website Transformation",
    before: beforeAfter.before,
    after: beforeAfter.after,
    beforeTitle: beforeAfter.beforeTitle,
    beforeDescription: beforeAfter.beforeDescription,
    afterTitle: beforeAfter.afterTitle,
    afterDescription: beforeAfter.afterDescription,
  };

  return (
    <Section surface>
      <Container>
        <SectionHeading
          eyebrow="Before & After"
          title="See the Difference a *Conversion-Focused* Website Makes"
          lede="Drag to compare a disconnected experience with a modern, trust-building site built to convert."
        />
        <WebsiteBeforeAfterComparison example={example} />
      </Container>
    </Section>
  );
}
