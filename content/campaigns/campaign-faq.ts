import type { CampaignCitySlug, CampaignServiceSlug } from "./types";
import { getCampaignCity } from "./campaign-cities";

export interface CampaignFaqItem {
  question: string;
  answer: string;
}

type FaqKey = CampaignServiceSlug;

const websiteDesignFaqs: CampaignFaqItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Website projects are scoped to your goals, page count, and integrations. Most SMB builds are project-based with a clear fixed proposal after a strategy call — we do not publish one-size-fits-all pricing because every business has different conversion requirements.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most website projects launch in 4–8 weeks depending on scope. We work in structured phases with clear milestones, so you always know where the project stands.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We modernize underperforming sites with conversion-first architecture, improved mobile UX, and SEO-safe migration so you do not lose existing search visibility.",
  },
  {
    question: "Is SEO included?",
    answer:
      "Every FTW website includes technical SEO foundations — fast performance, structured data, and scalable page architecture. Ongoing SEO programs are available as a separate growth system if you want continuous ranking work.",
  },
  {
    question: "Can you write the website copy?",
    answer:
      "Yes. We can develop messaging, page copy, and conversion-focused CTAs as part of the project so your site speaks clearly to the customers you want to attract.",
  },
  {
    question: "Can you integrate forms and automations?",
    answer:
      "Yes. Forms, CRM connections, scheduling tools, and follow-up automation can be wired directly into the site so leads are captured and nurtured immediately.",
  },
  {
    question: "Can you manage the website after launch?",
    answer:
      "Yes. We offer post-launch support, updates, and optimization so your site keeps performing as your business grows.",
  },
];

const faqByService: Record<FaqKey, CampaignFaqItem[]> = {
  "website-design": websiteDesignFaqs,
  seo: websiteDesignFaqs,
  aio: websiteDesignFaqs,
  "paid-ads": websiteDesignFaqs,
  "business-automation": websiteDesignFaqs,
};

export function getCampaignFaqs(
  faqKey: FaqKey,
  citySlug?: CampaignCitySlug,
): CampaignFaqItem[] {
  const base = faqByService[faqKey] ?? websiteDesignFaqs;
  if (!citySlug) return base;

  const city = getCampaignCity(citySlug);
  const localQuestion = `Do you work with ${city.name} businesses only?`;
  const localAnswer = `No — we work with businesses across Southern California and beyond. This page is tailored for ${city.name} because many of our website projects serve the Inland Empire and surrounding markets, including Riverside County.`;

  const withoutLocal = base.filter((item) => item.question !== localQuestion);
  return [...withoutLocal, { question: localQuestion, answer: localAnswer }];
}
