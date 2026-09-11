import type { CampaignExperimentVariant, CampaignServiceSlug } from "./types";

export interface WebsiteShowcaseGsapPanel {
  number: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  bottomLine: string;
  /** Poster still shown under scrubbed / playback video. */
  image: string;
  imageAlt: string;
  /** Desktop scroll-scrub encode (dense keyframes). */
  videoScrubSrc: string;
  /** Mobile autoplay encode. */
  videoPlaybackSrc: string;
}

export interface WebsiteShowcaseConfig {
  service: CampaignServiceSlug;
  path: string;
  campaignName: string;
  trackingCampaignName: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA: string;
  secondaryHref: string;
  metaTitle: string;
  metaDescription: string;
  formSubject: string;
  thankYouDestination: string;
  experimentVariant: CampaignExperimentVariant;
  noindex: boolean;
  gallerySlugs: string[];
  gsapPanels: WebsiteShowcaseGsapPanel[];
}

export const websiteDesignShowcase: WebsiteShowcaseConfig = {
  service: "website-design",
  path: "/campaigns/website-design",
  campaignName: "website_design_showcase",
  trackingCampaignName: "website_design_showcase",
  eyebrow: "WEBSITE DESIGN • CAPABILITY SHOWCASE",
  headline: "Websites That *Move*, Convert, and Stand Out",
  subheadline:
    "Scroll cinema, interactive tools, and conversion craft — built so visitors stop, explore, and take action.",
  primaryCTA: "Want a website that looks like this?",
  secondaryCTA: "See interactive demos",
  secondaryHref: "#showcase-demos",
  metaTitle: "Website Design Showcase | FTW Agency",
  metaDescription:
    "See how FTW Agency builds conversion-focused websites — scroll storytelling, interactive tools, maps, and a portfolio of live client sites.",
  formSubject: "[Campaign Lead] Website Design Showcase",
  thankYouDestination: "/campaigns/thank-you",
  experimentVariant: "control",
  noindex: true,
  gallerySlugs: [
    "vote-christen",
    "farmhouse-collective",
    "visit-riverside",
    "vertex-services",
    "mendozer-x-earthworks",
    "fdc-fire",
    "all-around-mobile-home-service",
  ],
  /** Scroll-story demo panels. Copy sells website capability; film is the motion vehicle. */
  gsapPanels: [
    {
      number: "01",
      navLabel: "Presence",
      eyebrow: "Brand presence",
      headline: "Make Your Brand Impossible to Ignore",
      paragraphs: [
        "Your site is often the first handshake with a customer. We design heroes, typography, and layout so the brand feels premium from the first second—not generic, not template-built.",
        "When visitors instantly understand who you are and why you matter, they trust you enough to keep exploring—and convert.",
      ],
      bottomLine: "Look like the company people want to hire.",
      image: "/campaigns/vote-christen-gsap/01-your-bill.webp",
      imageAlt: "Scroll cinema demo — chapter one poster",
      videoScrubSrc: "/campaigns/vote-christen-gsap/01-your-bill.scrub.mp4",
      videoPlaybackSrc: "/campaigns/vote-christen-gsap/01-your-bill.web.mp4",
    },
    {
      number: "02",
      navLabel: "Motion",
      eyebrow: "Scroll cinema",
      headline: "Stories That Move With the Page",
      paragraphs: [
        "Pinned media, scrubbed film, and chaptered narratives hold attention longer than static pages. We build scroll experiences that feel cinematic without sacrificing clarity or speed.",
        "Motion isn’t decoration—it’s pacing. The right rhythm keeps visitors engaged through the story you need them to hear.",
      ],
      bottomLine: "Hold attention long enough to earn the click.",
      image: "/campaigns/vote-christen-gsap/02-your-water.webp",
      imageAlt: "Scroll cinema demo — chapter two poster",
      videoScrubSrc: "/campaigns/vote-christen-gsap/02-your-water.scrub.mp4",
      videoPlaybackSrc: "/campaigns/vote-christen-gsap/02-your-water.web.mp4",
    },
    {
      number: "03",
      navLabel: "Tools",
      eyebrow: "Interactive tools",
      headline: "Interfaces Visitors Can Actually Use",
      paragraphs: [
        "Maps, sliders, funnels, and custom UI turn browsers into participants. We ship interactive tools that demonstrate value and reduce friction on the path to contact.",
        "When people can explore, compare, and decide on-page, they arrive at your CTA already convinced.",
      ],
      bottomLine: "Interaction converts better than explanation alone.",
      image: "/campaigns/vote-christen-gsap/03-your-neighborhood.webp",
      imageAlt: "Scroll cinema demo — chapter three poster",
      videoScrubSrc: "/campaigns/vote-christen-gsap/03-your-neighborhood.scrub.mp4",
      videoPlaybackSrc: "/campaigns/vote-christen-gsap/03-your-neighborhood.web.mp4",
    },
    {
      number: "04",
      navLabel: "Convert",
      eyebrow: "Conversion craft",
      headline: "Built to Perform—and Close",
      paragraphs: [
        "Clear CTAs, fast loads, and polished details aren’t afterthoughts. We design every section toward a next step: book a call, request a quote, or start a project.",
        "A beautiful site that doesn’t convert is unfinished. We ship work that’s ready to win leads from day one.",
      ],
      bottomLine: "Premium craft with a conversion job to do.",
      image: "/campaigns/vote-christen-gsap/04-your-future.webp",
      imageAlt: "Scroll cinema demo — chapter four poster",
      videoScrubSrc: "/campaigns/vote-christen-gsap/04-your-future.scrub.mp4",
      videoPlaybackSrc: "/campaigns/vote-christen-gsap/04-your-future.web.mp4",
    },
  ],
};

/** Shape shared by geo campaign pages and the website showcase LP for chrome/form/tracking. */
export interface CampaignChromePage {
  path: string;
  service: string;
  city?: string;
  primaryCTA: string;
  trackingCampaignName: string;
  thankYouDestination: string;
  formSubject: string;
  experimentVariant: CampaignExperimentVariant;
  finalHeadline?: string;
  finalSubheadline?: string;
}

export function toCampaignChrome(config: WebsiteShowcaseConfig): CampaignChromePage {
  return {
    path: config.path,
    service: config.service,
    primaryCTA: config.primaryCTA,
    trackingCampaignName: config.trackingCampaignName,
    thankYouDestination: config.thankYouDestination,
    formSubject: config.formSubject,
    experimentVariant: config.experimentVariant,
    finalHeadline: "Ready for a Website That Looks and Works Like This?",
    finalSubheadline:
      "Tell us about your project. We’ll map a clear plan for design, interactivity, and conversion — no pressure, no generic pitch deck.",
  };
}
