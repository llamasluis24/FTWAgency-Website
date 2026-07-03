"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WebsiteBeforeAfterComparison } from "@/components/portfolio/WebsiteBeforeAfterComparison";
import { websiteBeforeAfterExamples } from "@/content/website-portfolio-before-after";
import type { healthcareWebsiteModules } from "@/content/industries/modules/healthcare-website-modules";

export function HealthcareWebsiteShowcase({
  content,
}: {
  content: typeof healthcareWebsiteModules.showcase;
}) {
  const example = websiteBeforeAfterExamples.find(
    (item) => item.title === content.portfolioExampleTitle,
  );

  if (!example) return null;

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <WebsiteBeforeAfterComparison example={example} />
        </Reveal>
      </Container>
    </Section>
  );
}
