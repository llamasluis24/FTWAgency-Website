import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/PageHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { Section, Container } from "@/components/layout/Section";
import { buildMetadata } from "@/lib/metadata";
import { enrichProject, getAllProjects } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio | FTW Agency",
  description:
    "Websites, software platforms, and growth systems built for real businesses — conversion-engineered sites and custom software measured in leads, bookings, and revenue.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const projects = getAllProjects().map(enrichProject);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        headline="Systems We've *Shipped*."
        sub="Every project here is live — websites, software platforms, and custom systems built for real businesses across home services, hospitality, technology, and tourism."
        crumbs={[{ name: "Portfolio", path: "/portfolio" }]}
        showCtas={false}
      />
      <Section>
        <Container>
          <PortfolioGrid projects={projects} />
        </Container>
      </Section>
      <CTASection
        headline="Want Results Like *These*?"
        sub="Every project here started with a strategy call. Book yours and we'll map what's possible for your business."
      />
    </>
  );
}
