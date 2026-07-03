import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { UseCase } from "@/lib/schemas";

/** AI agent use-case cards with business outcomes. */
export function AgentUseCases({ useCases }: { useCases: UseCase[] }) {
  return (
    <Section surface>
      <Container>
        <SectionHeading
          eyebrow="Use Cases"
          title="AI Agents Built for *Real* Business Work"
          lede="Practical automation for the conversations and workflows that consume your team's week — not generic chatbot demos."
        />
        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <RevealItem key={useCase.title} className="card-surface card-hover flex flex-col p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <Icon name={useCase.icon} className="h-5 w-5 text-accent" />
              </span>
              <h3 className="font-display text-base font-semibold text-heading">
                {useCase.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                {useCase.description}
              </p>
              <p className="mt-4 border-t border-white/5 pt-4 text-xs leading-relaxed text-success">
                {useCase.outcome}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
