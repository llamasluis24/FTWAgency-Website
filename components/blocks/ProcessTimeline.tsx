import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { Point } from "@/lib/schemas";

export function ProcessTimeline({
  steps,
  title = "How It *Works*",
  eyebrow = "Our Process",
}: {
  steps: Point[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <Section>
      <Container className="max-w-4xl">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <RevealStagger className="relative space-y-0">
          {/* Vertical connector line */}
          <div
            className="absolute bottom-8 left-[1.4rem] top-8 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"
            aria-hidden
          />
          {steps.map((step, i) => (
            <RevealItem key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
              <span className="tnum relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface font-display text-sm font-bold text-accent shadow-[0_0_16px_rgba(0,212,255,0.15)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1.5">
                <h3 className="font-display text-lg font-semibold text-heading">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-body">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
