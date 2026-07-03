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
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import {
  getCaseStudiesByService,
  getRelatedIndustriesForService,
  getRelatedServices,
  getService,
} from "@/lib/content";

const AutomationVisualDemonstration = dynamic(
  () =>
    import("@/components/automation/AutomationVisualDemonstration").then(
      (m) => m.AutomationVisualDemonstration,
    ),
  { loading: () => <div className="min-h-[800px] bg-surface" aria-hidden /> },
);

export async function generateMetadata(): Promise<Metadata> {
  const service = getService("business-automation");
  if (!service) return {};
  return buildMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/services/${service.slug}`,
    ogTitle: service.meta.ogTitle,
    ogDescription: service.meta.ogDescription,
  });
}

export default function BusinessAutomationPage() {
  const service = getService("business-automation");
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
        secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ]}
      />

      <AutomationVisualDemonstration />

      <ProblemSolution problem={service.problem} solution={service.solution} />

      <ProcessTimeline steps={service.process} />

      <BenefitsGrid benefits={service.benefits} surface={false} />

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
