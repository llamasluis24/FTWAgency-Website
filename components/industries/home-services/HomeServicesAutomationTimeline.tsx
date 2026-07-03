"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FollowUpTimelineMock } from "@/components/automation/FollowUpTimelineMock";
import type { homeServicesAutomationModules } from "@/content/industries/modules/home-services-automation-modules";

export function HomeServicesAutomationTimeline({
  content,
}: {
  content: typeof homeServicesAutomationModules.timeline;
}) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-bg p-5 sm:p-8">
            <FollowUpTimelineMock steps={[...content.steps]} />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
