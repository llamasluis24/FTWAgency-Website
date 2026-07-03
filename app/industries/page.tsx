import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/PageHero";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { CTASection } from "@/components/blocks/CTASection";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getAllIndustries } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve | FTW Agency",
  description:
    "Growth systems specialized for home services, construction, healthcare, restaurants, professional services, transportation, retail, manufacturing, technology, and startups.",
  path: "/industries",
});

export default function IndustriesPage() {
  const industries = getAllIndustries();

  return (
    <>
      <PageHero
        eyebrow="Industries"
        headline="Built for *Your* Industry."
        sub="The growth system adapts to how your customers buy, how your operations run, and how your market competes. Specialized enough to feel custom — proven across ten industries."
        crumbs={[{ name: "Industries", path: "/industries" }]}
      />
      <Section>
        <Container>
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <RevealItem key={industry.slug}>
                <IndustryCard industry={industry} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>
      <CTASection
        headline="Don't See Your *Industry*?"
        sub="The FTW Growth System adapts to any business that needs more leads, better operations, and room to scale. Let's talk about yours."
      />
    </>
  );
}
