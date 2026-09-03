import { JsonLd } from "@/components/seo/JsonLd";
import { getCampaignFaqs } from "@/content/campaigns/campaign-faq";
import {
  getCampaignCaseStudy,
  getCampaignPortfolioProof,
  getCampaignTestimonials,
} from "@/lib/campaigns/content";
import { campaignWebPageSchema } from "@/lib/campaigns/schema";
import type { ResolvedCampaignPage } from "@/content/campaigns/types";
import { CampaignHeader } from "./CampaignHeader";
import { CampaignHero } from "./CampaignHero";
import { CampaignProof } from "./CampaignProof";
import { CampaignProblem } from "./CampaignProblem";
import { CampaignBeforeAfter } from "./CampaignBeforeAfter";
import { CampaignBenefits } from "./CampaignBenefits";
import { CampaignCaseStudy } from "./CampaignCaseStudy";
import { CampaignProcess } from "./CampaignProcess";
import { CampaignTestimonials } from "./CampaignTestimonials";
import { CampaignFAQ } from "./CampaignFAQ";
import { CampaignLeadForm } from "./CampaignLeadForm";
import { CampaignFinalCTA } from "./CampaignFinalCTA";
import { CampaignStickyCTA } from "./CampaignStickyCTA";
import { CampaignFooter } from "./CampaignFooter";
import { CampaignPageViewTracker } from "./CampaignPageViewTracker";

export function CampaignPageTemplate({ page }: { page: ResolvedCampaignPage }) {
  const proofProjects = getCampaignPortfolioProof(page.portfolioProofSlugs);
  const testimonials = getCampaignTestimonials(page.testimonialSlugs);
  const caseStudy = getCampaignCaseStudy(page.caseStudySlug);
  const faqs = getCampaignFaqs(page.faqKey, page.city);

  return (
    <main>
      <JsonLd data={[campaignWebPageSchema(page)]} />
      <CampaignPageViewTracker page={page} />
      <CampaignHeader page={page} />
      <CampaignHero page={page} />
      <CampaignProof projects={proofProjects} />
      <CampaignProblem page={page} />
      <CampaignBeforeAfter beforeAfter={page.beforeAfter} />
      <CampaignBenefits benefits={page.benefits} />
      {caseStudy ? <CampaignCaseStudy caseStudy={caseStudy} /> : null}
      <CampaignProcess steps={page.process} />
      <CampaignTestimonials testimonials={testimonials} />
      <CampaignFAQ items={faqs} />
      <CampaignLeadForm page={page} />
      <CampaignFinalCTA page={page} />
      <CampaignStickyCTA page={page} />
      <CampaignFooter />
    </main>
  );
}
