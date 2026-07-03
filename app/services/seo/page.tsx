import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/blocks/PageHero";
import { ProblemSolution } from "@/components/blocks/ProblemSolution";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { ProcessTimeline } from "@/components/blocks/ProcessTimeline";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import {
  RelatedCaseStudies,
  RelatedIndustries,
  RelatedServices,
} from "@/components/blocks/Related";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import {
  getCaseStudiesByService,
  getRelatedIndustriesForService,
  getRelatedServices,
  getService,
} from "@/lib/content";

const SeoVisualDemonstration = dynamic(
  () =>
    import("@/components/seo/SeoVisualDemonstration").then(
      (m) => m.SeoVisualDemonstration,
    ),
  { loading: () => <div className="min-h-[800px] bg-surface" aria-hidden /> },
);

export async function generateMetadata(): Promise<Metadata> {
  const service = getService("seo");
  if (!service) return {};
  return buildMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/services/${service.slug}`,
    ogTitle: service.meta.ogTitle,
    ogDescription: service.meta.ogDescription,
  });
}

export default function SeoServicePage() {
  const service = getService("seo");
  if (!service) notFound();

  const related = getRelatedServices(service);
  const caseStudies = getCaseStudiesByService(service.slug).slice(0, 3);
  const relatedIndustries = getRelatedIndustriesForService(service.slug);

  return (
    <>
      <JsonLd data={[serviceSchema(service)]} />

      <PageHero
        eyebrow={service.title}
        headline={service.heroHeadline}
        sub={service.heroSub}
        grid="none"
        secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ]}
      />

      <SeoVisualDemonstration />

      <ProblemSolution problem={service.problem} solution={service.solution} />

      <ProcessTimeline steps={service.process} />

      <BenefitsGrid benefits={service.benefits} surface={false} />

      {service.subservices.length > 0 && (
        <Section>
          <Container>
            <SectionHeading
              eyebrow="What's Included"
              title={`${service.shortTitle} *Capabilities*`}
            />
            <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.subservices.map((sub) => (
                <RevealItem
                  key={sub.title}
                  className="rounded-2xl border border-white/5 bg-surface p-6"
                >
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                    <Icon name={service.icon} className="h-4 w-4 text-accent" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-heading">
                    {sub.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-body">{sub.description}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        </Section>
      )}

      <div id="related-services">
        <RelatedServices services={related} surface />
      </div>

      <RelatedCaseStudies caseStudies={caseStudies} />

      <RelatedIndustries
        industries={relatedIndustries}
        title={`${service.shortTitle} by *Industry*`}
        surface
      />

      <FAQSection faqs={service.faqs} />

      <CTASection
        headline={service.ctaHeadline ?? `Ready to Put *${service.shortTitle}* to Work?`}
        sub={
          service.ctaSubheadline ??
          "Book a strategy call and we'll map exactly how this system fits your business, market, and growth goals."
        }
      />
    </>
  );
}
