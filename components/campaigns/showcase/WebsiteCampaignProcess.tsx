import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container, Section } from "@/components/layout/Section";
import type { WebsiteShowcaseProcessStep } from "@/content/campaigns/website-design-showcase";

export function WebsiteCampaignProcess({
  steps,
}: {
  steps: WebsiteShowcaseProcessStep[];
}) {
  return (
    <Section surface>
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A Clear Path From Call to *Launch*"
          lede="Strategy first. Architecture next. Then design, build, and measure."
          align="center"
        />
        <ol className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.step}
              className="rounded-[1.25rem] border border-white/10 bg-[rgba(18,24,33,0.6)] p-5"
            >
              <p className="font-display text-2xl font-bold text-[#60d8b8]">{step.step}</p>
              <h3 className="mt-2 font-display text-lg font-semibold !text-heading">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
