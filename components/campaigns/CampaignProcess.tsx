import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { CampaignProcessStep } from "@/content/campaigns/types";

export function CampaignProcess({ steps }: { steps: CampaignProcessStep[] }) {
  return (
    <Section surface>
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A Clear Path From *Strategy* to Launch"
          align="center"
        />
        <ol className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="card-surface p-5">
              <span className="font-display text-sm font-semibold text-[#60d8b8]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-heading">{step.title}</h3>
              <p className="mt-2 text-sm text-body">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
