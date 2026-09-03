import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/PageHero";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/blocks/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getAllServices } from "@/lib/content";
import { frameworkStages } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Services | FTW Agency",
  description:
    "Websites, SEO, AIO, paid ads, reputation growth, social media, automation, custom software, and mobile apps — eleven services engineered as one growth system.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <PageHero
        eyebrow="Services"
        headline="Ten Services. One *Growth System*."
        sub="Every FTW service is designed to connect with the others — because leads, conversion, automation, and operations work better as one engine."
        crumbs={[{ name: "Services", path: "/services" }]}
      />

      {frameworkStages.map((stage, idx) => {
        const stageServices = services.filter((s) => s.category === stage.key);
        if (stageServices.length === 0) return null;
        return (
          <Section key={stage.key} surface={idx % 2 === 1}>
            <Container>
              <SectionHeading
                eyebrow={`Stage ${String(idx + 1).padStart(2, "0")}`}
                title={`*${stage.title}*`}
                lede={stage.description}
                align="left"
              />
              <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {stageServices.map((service) => (
                  <RevealItem key={service.slug}>
                    <ServiceCard service={service} />
                  </RevealItem>
                ))}
              </RevealStagger>
            </Container>
          </Section>
        );
      })}

      <CTASection headline="Not Sure Where to *Start*?" sub="Book a strategy call and we'll diagnose your biggest growth constraint — and the system that fixes it first." />
    </>
  );
}
