import type { Metadata } from "next";
import { HardHat } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { CTASection } from "@/components/blocks/CTASection";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FTW Academy | FTW Agency",
  description:
    "Structured courses and training for teams that want to run growth systems in-house — coming soon.",
  path: "/resources/academy",
});

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Academy"
        headline="Learn to *Run* the Systems."
        sub="Structured courses for owners and teams who want growth systems knowledge in-house."
        crumbs={[
          { name: "Resources", path: "/resources" },
          { name: "Academy", path: "/resources/academy" },
        ]}
        showCtas={false}
      />
      <Section>
        <Container>
          <Reveal className="card-surface mx-auto max-w-xl px-8 py-16 text-center">
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <HardHat className="h-8 w-8 text-accent" strokeWidth={1.75} />
            </span>
            <h2 className="font-display text-2xl font-semibold text-heading">
              Under Construction
            </h2>
            <p className="mt-3 text-lg text-body">Coming soon.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We&apos;re building structured courses on local SEO, automation, content, and
              growth systems. Check back soon — or book a strategy call to get started now.
            </p>
          </Reveal>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
