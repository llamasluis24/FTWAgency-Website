import type { Metadata } from "next";
import { HardHat } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { CTASection } from "@/components/blocks/CTASection";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Growth Guides | FTW Agency",
  description:
    "Deep-dive guides on building growth systems — local SEO, automation, reviews, and more. Coming soon.",
  path: "/resources/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        headline="Deep-Dive *Growth Guides*."
        sub="Comprehensive, step-by-step guides to the systems we build every day."
        crumbs={[
          { name: "Resources", path: "/resources" },
          { name: "Guides", path: "/resources/guides" },
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
              We&apos;re writing in-depth guides on local SEO, automation, reviews, and conversion
              systems. Check back soon — or book a strategy call to get started now.
            </p>
          </Reveal>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
