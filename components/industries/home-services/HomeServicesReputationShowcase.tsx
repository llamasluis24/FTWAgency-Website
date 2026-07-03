"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RatingBattleMock } from "@/components/reputation/RatingBattleMock";
import type { homeServicesReputationModules } from "@/content/industries/modules/home-services-reputation-modules";

export function HomeServicesReputationShowcase({
  content,
}: {
  content: typeof homeServicesReputationModules.showcase;
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
