"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SmsConversationMock } from "@/components/automation/SmsConversationMock";
import type { professionalServicesAutomationModules } from "@/content/industries/modules/professional-services-automation-modules";

export function ProfessionalServicesAutomationShowcase({
  content,
}: {
  content: typeof professionalServicesAutomationModules.showcase;
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
