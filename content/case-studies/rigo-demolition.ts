import type { CaseStudy } from "@/lib/schemas";

export const RIGO_NAME = "Rigo Demolition Inc.";

const VIDEO_BASE = "/showcases/social/videos";

export const rigoDemolitionVideos = [
  {
    name: "Brentwood",
    location: "Brentwood, Los Angeles",
    description:
      "Residential teardown reel shot on-site — raw demolition footage edited to show scale, professionalism, and the kind of work that wins high-value LA projects.",
    src: `${VIDEO_BASE}/brentwood.mp4`,
    poster: `${VIDEO_BASE}/brentwood.jpg`,
  },
  {
    name: "Pasadena",
    location: "Pasadena, Los Angeles",
    description:
      "Burnt-house demolition reel built for local discovery — dramatic project footage packaged for neighborhood-level social buzz and contractor credibility.",
    src: `${VIDEO_BASE}/pasadena.mp4`,
    poster: `${VIDEO_BASE}/pasadena.jpg`,
  },
] as const;

export const rigoDemolition: CaseStudy = {
  slug: "rigo-demolition",
  title: "How a Multi-Reel LA Campaign Made Rigo Demolition Look Like the Pro on Every Job",
  client: RIGO_NAME,
  industry: "construction",
  services: ["viral-social-media"],
  summary:
    "Two LA demolition reels — Brentwood and Pasadena — show how a content-focused, multi-project social campaign builds professional credibility and local buzz, even with little or no existing following.",
  challenge: [
    "Rigo Demolition does serious work across Los Angeles — but demolition is invisible until someone sees it. Without consistent short-form content, even strong operators can look like every other contractor scrolling past on the feed.",
    "The goal was not vanity metrics. It was to look professional, show real jobsite proof, and create local social buzz that turns views into project inquiries — starting from little or no audience.",
  ],
  strategy: [
    "Treat each job as its own reel — Brentwood and Pasadena as separate neighborhood stories, not one generic brand post.",
    "Lead with jobsite authenticity: teardown footage, crew scale, and project intensity edited for Instagram and TikTok discovery.",
    "Build a multi-project campaign rhythm so prospects see repeat proof — not a one-off post, but a operator who shows up on the feed consistently.",
  ],
  execution: [
    "Produced and edited the Brentwood residential teardown reel — vertical, platform-native, and built to communicate capability in the first three seconds.",
    "Shot and packaged the Pasadena burnt-house demolition reel as a second local proof point in a different LA market.",
    "Published both as part of one content-focused campaign — same brand standards, different neighborhoods, one professional presence.",
  ],
  results: [
    { value: 2, label: "LA neighborhood reels in one campaign" },
    { value: 1, label: "Multi-project content system" },
    { value: 1, label: "Professional presence — minimal following" },
  ],
  screenshots: [
    {
      title: "Brentwood demolition reel",
      kind: "reel",
      src: `${VIDEO_BASE}/brentwood.jpg`,
      videoSrc: `${VIDEO_BASE}/brentwood.mp4`,
      alt: "Rigo Demolition Brentwood teardown short-form video",
    },
    {
      title: "Pasadena demolition reel",
      kind: "reel",
      src: `${VIDEO_BASE}/pasadena.jpg`,
      videoSrc: `${VIDEO_BASE}/pasadena.mp4`,
      alt: "Rigo Demolition Pasadena burnt houses demolition short-form video",
    },
  ],
  beforeAfter: {
    before: {
      title: "Before",
      caption: "Little social proof, no campaign cohesion, jobsite work invisible online",
    },
    after: {
      title: "After",
      caption: "Multi-reel LA campaign, neighborhood-specific buzz, professional brand presence",
    },
  },
  testimonial: {
    quote:
      "People judge demolition companies by what they can see. These reels show our work before a prospect ever calls — Brentwood, Pasadena, and the next job all look like the same professional operation.",
    author: RIGO_NAME,
    role: "Operations",
    company: RIGO_NAME,
    industry: "construction",
  },
  featured: true,
  locations: ["los-angeles-ca"],
};

export const rigoPageContent = {
  hero: {
    eyebrow: "Case Study · Los Angeles",
    headline: "Local Social Buzz That Makes Demolition Work *Visible*",
    lede:
      "Rigo Demolition Inc. did not need a massive following to look professional online. A two-reel, multi-project campaign across Brentwood and Pasadena showed how localized content creates credibility — and inquiry — in LA.",
  },
  videoSection: {
    eyebrow: "The Reels",
    title: "Brentwood & Pasadena — *Two Markets, One Campaign*",
    lede:
      "Each reel targets a different LA neighborhood with real jobsite footage. Press play for the full experience — including on-site audio.",
  },
  takeaway: {
    eyebrow: "The LA Lesson",
    title: "You Do Not Need a Big Following to Win *Local Projects*",
    body:
      "Demolition buyers search socially before they call. When Rigo shows up in Brentwood and Pasadena with project-specific reels — not generic contractor posts — the brand reads as established, active, and worth contacting. That is the play: content that mirrors the work, published where local decision-makers already scroll.",
  },
} as const;
