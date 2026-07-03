import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { Service } from "@/lib/schemas";

export function ProblemSolution({
  problem,
  solution,
}: {
  problem: Service["problem"];
  solution: Service["solution"];
}) {
  return (
    <>
      {/* Problem */}
      <Section surface>
        <Container>
          <SectionHeading
            eyebrow="The Problem"
            title={problem.title}
            lede={problem.intro}
          />
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problem.painPoints.map((point) => (
              <RevealItem key={point.title} className="card-surface flex flex-col items-center p-6 text-center">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                  <X className="h-5 w-5 text-red-500" strokeWidth={2.5} />
                </span>
                <h3 className="font-display text-base font-semibold text-heading">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{point.description}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Solution */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-3">The Solution</p>
              <h2 className="text-3xl font-semibold md:text-[2.5rem] md:leading-[1.12]">
                {solution.title}
              </h2>
              <p className="mt-5 text-lg text-body">{solution.description}</p>
            </Reveal>
            <RevealStagger className="space-y-3">
              {solution.points.map((point) => (
                <RevealItem
                  key={point}
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-surface p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                    <Check className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
                  </span>
                  <p className="text-sm leading-relaxed text-heading">{point}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </Section>
    </>
  );
}
