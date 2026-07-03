"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WorkflowHubMock } from "@/components/automation/WorkflowHubMock";
import type { manufacturingCustomSoftwareModules } from "@/content/industries/modules/manufacturing-custom-software-modules";

export function ManufacturingCustomSoftwareShowcase({
  content,
}: {
  content: typeof manufacturingCustomSoftwareModules.showcase;
}) {
  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-bg p-5 sm:p-8">
            <WorkflowHubMock nodes={[...content.workflowNodes]} metrics={[...content.metrics]} />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
