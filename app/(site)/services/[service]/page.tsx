import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/blocks/PageHero";
import { ProblemSolution } from "@/components/blocks/ProblemSolution";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { ProcessTimeline } from "@/components/blocks/ProcessTimeline";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { AgentUseCases } from "@/components/blocks/AgentUseCases";
import { PartnerPlatformsSection } from "@/components/blocks/PartnerPlatformsSection";
import { AgentWorkflowVisual } from "@/components/blocks/AgentWorkflowVisual";
import { MobileAppMarketplaceBackground } from "@/components/mobile-app/MobileAppMarketplaceBackground";
import { MobileAppBlueSocialShowcase } from "@/components/mobile-app/MobileAppBlueSocialShowcase";
import {
  SoftwareBuiltForNeedsSection,
  SoftwarePortfolioShowcase,
  SoftwareTrustSection,
} from "@/components/blocks/SoftwarePortfolioSections";
import { WebsiteBeforeAfterShowcase } from "@/components/portfolio/WebsiteBeforeAfterShowcase";
import { ReputationVisualDemonstration } from "@/components/reputation/ReputationVisualDemonstration";

const PlatformShowcase = dynamic(
  () =>
    import("@/components/platform-showcase/PlatformShowcase").then(
      (m) => m.PlatformShowcase,
    ),
  { loading: () => <div className="min-h-[320px] bg-surface" aria-hidden /> },
);
import {
  RelatedCaseStudies,
  RelatedIndustries,
  RelatedLocations,
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
  getAllServices,
  getCaseStudiesByService,
  getRelatedIndustriesForService,
  getRelatedServices,
  getService,
} from "@/lib/content";
import { getTopPublishedLocations } from "@/lib/linking";
import { getPlatformShowcase } from "@/content/platform-showcases";

interface Props {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return getAllServices()
    .filter(
      (s) =>
        s.slug !== "aio" &&
        s.slug !== "google-business-profile" &&
        s.slug !== "business-automation" &&
        s.slug !== "seo" &&
        s.slug !== "viral-social-media",
    )
    .map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/services/${service.slug}`,
    ogTitle: service.meta.ogTitle,
    ogDescription: service.meta.ogDescription,
  });
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const caseStudies = getCaseStudiesByService(service.slug).slice(0, 3);
  const relatedIndustries = getRelatedIndustriesForService(service.slug);
  const topLocations = getTopPublishedLocations(4);
  const isAgentPage = Boolean(service.useCases?.length);
  const showcase = getPlatformShowcase(service.slug);

  return (
    <>
      <JsonLd data={[serviceSchema(service)]} />

      {/* 1 — Hero */}
      <PageHero
        eyebrow={service.title}
        headline={service.heroHeadline}
        sub={service.heroSub}
        secondaryCta={
          service.secondaryCta ?? {
            label: "View Portfolio",
            href: "/portfolio",
          }
        }
        backgroundVisual={
          service.slug === "mobile-app-development" ? (
            <MobileAppMarketplaceBackground />
          ) : undefined
        }
        visual={
          service.heroVisual === "agent-workflow" ? (
            <AgentWorkflowVisual />
          ) : undefined
        }
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ]}
      />

      {/* Platform Showcase — paid ads only */}
      {service.slug === "paid-ads-management" && showcase && (
        <PlatformShowcase config={showcase} />
      )}

      {/* Real software portfolio — custom software only */}
      {service.slug === "custom-software" && (
        <>
          <SoftwarePortfolioShowcase />
          <SoftwareBuiltForNeedsSection />
          <SoftwareTrustSection />
        </>
      )}

      {/* Website before/after portfolio — website design only */}
      {service.slug === "website-design-development" && (
        <WebsiteBeforeAfterShowcase />
      )}

      {/* Reputation showcase — review & reputation growth only */}
      {service.slug === "review-reputation-growth" && (
        <ReputationVisualDemonstration />
      )}

      {/* Problem / Solution */}
      <ProblemSolution problem={service.problem} solution={service.solution} />

      {/* 4 — AI agent use cases (when defined) */}
      {service.useCases && service.useCases.length > 0 && (
        <AgentUseCases useCases={service.useCases} />
      )}

      {/* 5 — Partner platforms (OpenClaw, Hermes, etc.) */}
      {service.partnerPlatforms && (
        <PartnerPlatformsSection partnerPlatforms={service.partnerPlatforms} />
      )}

      {/* 6 — Process */}
      <ProcessTimeline steps={service.process} />

      {service.slug === "mobile-app-development" && <MobileAppBlueSocialShowcase />}

      {/* 7 — Benefits (after process on agent pages) */}
      <BenefitsGrid
        benefits={service.benefits}
        surface={isAgentPage}
        iconTone={service.slug === "paid-ads-management" ? "ftw-green" : "accent"}
      />

      {/* Capabilities (standard services without use-case block) */}
      {!isAgentPage && service.subservices.length > 0 && (
        <Section>
          <Container>
            <SectionHeading
              eyebrow={
                service.slug === "paid-ads-management"
                  ? "Platforms We Manage"
                  : "What's Included"
              }
              title={
                service.slug === "paid-ads-management"
                  ? "Paid Ads Across *Every Major Channel*"
                  : `${service.shortTitle} *Capabilities*`
              }
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

      {/* Related Services */}
      <RelatedServices services={related} surface={!isAgentPage} />

      <RelatedCaseStudies caseStudies={caseStudies} />

      <RelatedLocations
        locations={topLocations}
        title="Markets We *Serve*"
        surface
      />

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
