import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { CampaignBenefit } from "@/content/campaigns/types";

export function CampaignBenefits({ benefits }: { benefits: CampaignBenefit[] }) {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Outcomes"
          title="Outcomes That Matter to *Your Business*"
          align="center"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="card-surface card-hover p-6">
              <h3 className="font-display text-lg font-semibold text-heading">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
