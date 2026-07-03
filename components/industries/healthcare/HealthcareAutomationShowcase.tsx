"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SmsConversationMock } from "@/components/automation/SmsConversationMock";
import type { healthcareAutomationModules } from "@/content/industries/modules/healthcare-automation-modules";

export function HealthcareAutomationShowcase({
  content,
}: {
  content: typeof healthcareAutomationModules.showcase;
}) {
  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <SmsConversationMock messages={[...content.smsMessages]} />
        </Reveal>
      </Container>
    </Section>
  );
}
