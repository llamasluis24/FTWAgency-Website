"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SmsConversationMock } from "@/components/automation/SmsConversationMock";
import type { restaurantsHospitalityAutomationModules } from "@/content/industries/modules/restaurants-hospitality-automation-modules";

export function RestaurantsHospitalityAutomationShowcase({
  content,
}: {
  content: typeof restaurantsHospitalityAutomationModules.showcase;
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
