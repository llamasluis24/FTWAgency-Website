"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RatingBattleMock } from "@/components/reputation/RatingBattleMock";
import type { healthcareReputationModules } from "@/content/industries/modules/healthcare-reputation-modules";

export function HealthcareReputationShowcase({
  content,
}: {
  content: typeof healthcareReputationModules.showcase;
}) {
  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <RatingBattleMock
            beforeProfile={content.beforeProfile}
            afterProfile={content.afterProfile}
            competitorProfile={content.competitorProfile}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
