import { notFound } from "next/navigation";
import { PageHero } from "@/components/blocks/PageHero";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { ProcessTimeline } from "@/components/blocks/ProcessTimeline";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedCaseStudies, RelatedServices } from "@/components/blocks/Related";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";
import { industryServiceCopy } from "@/lib/combo";
import {
  getCaseStudiesByIndustry,
  getIndustry,
  getRelatedServices,
  getService,
} from "@/lib/content";
import { IndustryModuleLoader } from "@/components/industries/IndustryModuleLoader";

interface IndustryComboPageProps {
  industrySlug: string;
  serviceSlug: string;
}

export function IndustryComboPage({ industrySlug, serviceSlug }: IndustryComboPageProps) {
  const industry = getIndustry(industrySlug);
  const service = getService(serviceSlug);
  if (!industry || !service) notFound();

  const copy = industryServiceCopy(service, industry);
  const caseStudies = getCaseStudiesByIndustry(industry.slug)
    .filter((c) => c.services.includes(service.slug))
    .slice(0, 3);
  const related = getRelatedServices(service);

  const crumbs = [
    { name: "Industries", path: "/industries" },
    { name: industry.title, path: `/industries/${industry.slug}` },
    {
      name: service.shortTitle,
      path: `/industries/${industry.slug}/${service.slug}`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service, { industryName: industry.title }),
          faqSchema(copy.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      <PageHero
        eyebrow={`${service.shortTitle} · ${industry.title}`}
        headline={copy.headline}
        sub={copy.sub}
        crumbs={crumbs}
      />

      <IndustryModuleLoader industrySlug={industrySlug} serviceSlug={serviceSlug} />

      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">Why It Matters Here</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Why {industry.title} businesses need {service.shortTitle}
            </h2>
            <p className="mt-5 text-lg text-body">{copy.reason}</p>
            <p className="mt-4 text-body">{copy.intro}</p>
          </Reveal>
        </Container>
      </Section>

      <BenefitsGrid
        benefits={service.benefits}
        title={`What ${industry.title} Businesses *Get*`}
      />

      <ProcessTimeline steps={service.process} />

      <RelatedCaseStudies caseStudies={caseStudies} surface />

      <RelatedServices
        services={related}
        title={`Pairs Well With for *${industry.title}*`}
      />

      <FAQSection faqs={copy.faqs} />

      <CTASection
        headline={`${service.shortTitle} for Your *${industry.title}* Business`}
        sub="Book a strategy call and we'll map exactly how this system performs in your market."
      />
    </>
  );
}
