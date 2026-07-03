import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HomeHero } from "@/components/hero/HomeHero";
import { IndustryProvider } from "@/components/hero/IndustryContext";
import { buildMetadata } from "@/lib/metadata";
import { SectionLoading } from "@/lib/section-loading";
import { siteConfig, frameworkStages, homeFaqs } from "@/content/site";
import {
  getAllIndustries,
  getAllServices,
  getFeaturedCaseStudies,
} from "@/lib/content";
import type { EngineMode } from "@/components/hero/GrowthEngineCanvas";

const ServicesBento = dynamic(
  () => import("@/components/home/ServicesBento").then((m) => ({ default: m.ServicesBento })),
  { loading: () => <SectionLoading minHeight={520} /> },
);

const IndustriesGrid = dynamic(
  () => import("@/components/home/IndustriesGrid").then((m) => ({ default: m.IndustriesGrid })),
  { loading: () => <SectionLoading minHeight={480} /> },
);

const FeaturedPortfolio = dynamic(
  () =>
    import("@/components/home/FeaturedWork").then((m) => ({
      default: m.FeaturedPortfolio,
    })),
  { loading: () => <SectionLoading minHeight={560} /> },
);

const FeaturedCaseStudies = dynamic(
  () =>
    import("@/components/home/FeaturedWork").then((m) => ({
      default: m.FeaturedCaseStudies,
    })),
  { loading: () => <SectionLoading minHeight={560} /> },
);

const GrowthFramework = dynamic(
  () =>
    import("@/components/home/GrowthFramework").then((m) => ({
      default: m.GrowthFramework,
    })),
  { loading: () => <SectionLoading minHeight={720} /> },
);

const WhyFTW = dynamic(
  () => import("@/components/home/WhyFTW").then((m) => ({ default: m.WhyFTW })),
  { loading: () => <SectionLoading minHeight={480} /> },
);

const HomeTestimonials = dynamic(
  () => import("@/components/home/HomeTestimonials").then((m) => ({ default: m.HomeTestimonials })),
  { loading: () => <SectionLoading minHeight={400} /> },
);

const FAQSection = dynamic(
  () => import("@/components/blocks/FAQSection").then((m) => ({ default: m.FAQSection })),
  { loading: () => <SectionLoading minHeight={360} /> },
);

const CTASection = dynamic(
  () => import("@/components/blocks/CTASection").then((m) => ({ default: m.CTASection })),
  { loading: () => <SectionLoading minHeight={320} /> },
);

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Growth Systems for Modern Businesses`,
  description: `${siteConfig.tagline} ${siteConfig.description}`,
  path: "/",
});

export default function HomePage() {
  const services = getAllServices();
  const industries = getAllIndustries();
  const featuredCaseStudies = getFeaturedCaseStudies().slice(0, 3);

  const presets = industries.map((i) => ({
    slug: i.slug,
    title: i.title,
    icon: i.icon,
    examples: i.examples,
  }));

  const stages = frameworkStages.map((s) => ({
    key: s.key as EngineMode,
    title: s.title,
    description: s.description,
  }));

  return (
    <IndustryProvider presets={presets}>
      <div className="home-page">
        <HomeHero />
        <ServicesBento services={services} />
        <IndustriesGrid industries={industries} />
        <FeaturedPortfolio />
        <FeaturedCaseStudies caseStudies={featuredCaseStudies} />
        <GrowthFramework stages={stages} />
        <WhyFTW />
        <HomeTestimonials />
        <FAQSection faqs={homeFaqs} />
        <CTASection />
      </div>
    </IndustryProvider>
  );
}
