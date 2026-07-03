"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FollowUpTimelineMock } from "@/components/automation/FollowUpTimelineMock";
import type { startupsAutomationModules } from "@/content/industries/modules/startups-automation-modules";

export function StartupsAutomationTimeline({
  content,
}: {
  content: typeof startupsAutomationModules.timeline;
}) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <FollowUpTimelineMock steps={[...content.steps]} />
        </Reveal>
      </Container>
    </Section>
  );
}
