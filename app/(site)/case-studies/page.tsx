import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/PageHero";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTASection } from "@/components/blocks/CTASection";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getAllCaseStudies } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | FTW Agency",
  description:
    "Deep dives into the growth systems we've built — the challenge, the strategy, the execution, and the measured results.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        headline="The *Numbers* Behind the Systems."
        sub="Challenge, strategy, execution, results — full transparency on how growth systems get built and what they produce."
        crumbs={[{ name: "Case Studies", path: "/case-studies" }]}
        showCtas={false}
      />
      <Section>
        <Container>
          <RevealStagger className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <RevealItem key={cs.slug}>
                <CaseStudyCard caseStudy={cs} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>
      <CTASection
        headline="Want a Case Study With *Your* Name on It?"
        sub="Every result here started with a strategy call. Book yours."
      />
    </>
  );
}
