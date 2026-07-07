import { z } from "zod";

/* ------------------------------------------------------------------ */
/* Shared fragments                                                    */
/* ------------------------------------------------------------------ */

export const FaqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const MetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
});

export const UseCaseSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  outcome: z.string(),
});

export const PartnerPlatformSchema = z.object({
  name: z.string(),
  description: z.string(),
  logoKey: z.string(),
});

export const PartnerPlatformsSchema = z.object({
  headline: z.string(),
  subheadline: z.string(),
  partners: z.array(PartnerPlatformSchema),
});

export const TestimonialSchema = z.object({
  quote: z.string(),
  author: z.string(),
  role: z.string(),
  company: z.string(),
  industry: z.string().optional(),
});

export const StatSchema = z.object({
  value: z.number(),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  label: z.string(),
});

/**
 * Screenshots are CMS placeholders: each entry renders as a stylized mock
 * panel until real imagery is uploaded. `kind` controls the mock layout.
 */
export const ScreenshotSchema = z.object({
  title: z.string(),
  kind: z.enum(["website", "dashboard", "mobile", "chart", "reviews", "pipeline", "reel"]),
  /** When set, renders real imagery instead of the stylized mock layout. */
  src: z.string().optional(),
  alt: z.string().optional(),
  /** MP4 source for reel previews (kind: reel). */
  videoSrc: z.string().optional(),
});

export const PointSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const IconPointSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const ServiceSchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortTitle: z.string(),
  category: z.enum(["attract", "convert", "automate", "scale"]),
  icon: z.string(),
  excerpt: z.string(),
  // Wrap one word in *asterisks* to render it as the serif italic accent.
  heroHeadline: z.string(),
  heroSub: z.string(),
  problem: z.object({
    title: z.string(),
    intro: z.string(),
    painPoints: z.array(PointSchema),
  }),
  solution: z.object({
    title: z.string(),
    description: z.string(),
    points: z.array(z.string()),
  }),
  benefits: z.array(IconPointSchema),
  process: z.array(PointSchema),
  subservices: z.array(PointSchema),
  faqs: z.array(FaqSchema),
  relatedServices: z.array(z.string()),
  featured: z.boolean().default(false),
  meta: MetaSchema,
  /** Optional AI-agent use-case cards (replaces the subservices block when set). */
  useCases: z.array(UseCaseSchema).optional(),
  /** Optional partner technology section (e.g. OpenClaw, Hermes). */
  partnerPlatforms: PartnerPlatformsSchema.optional(),
  secondaryCta: z
    .object({ label: z.string(), href: z.string() })
    .optional(),
  ctaHeadline: z.string().optional(),
  ctaSubheadline: z.string().optional(),
  /** Renders a service-specific hero visual when set. */
  heroVisual: z.enum(["agent-workflow"]).optional(),
  /** Slug key for platform showcase — defaults to service slug in getPlatformShowcase(). */
  platformShowcase: z.string().optional(),
});

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export const IndustrySchema = z.object({
  slug: z.string(),
  title: z.string(),
  icon: z.string(),
  excerpt: z.string(),
  heroHeadline: z.string(),
  heroSub: z.string(),
  painPoints: z.array(PointSchema),
  growthSystem: z.object({
    title: z.string(),
    description: z.string(),
  }),
  serviceStack: z.array(
    z.object({
      service: z.string(),
      reason: z.string(),
    }),
  ),
  stats: z.array(StatSchema),
  // Industry-specific examples that power the hero industry switcher.
  examples: z.object({
    lead: z.string(),
    review: z.string(),
    appointment: z.string(),
    metricLabel: z.string(),
    metricValue: z.string(),
  }),
  faqs: z.array(FaqSchema),
  meta: MetaSchema,
});

/* ------------------------------------------------------------------ */
/* Locations                                                           */
/* ------------------------------------------------------------------ */

export const LocationGeoSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

export const LocationPublishSchema = z.object({
  status: z.enum(["draft", "hub", "tier1", "full"]),
  publishedAt: z.string().optional(),
  lastModified: z.string().optional(),
});

export const LocationSchema = z.object({
  slug: z.string(),
  city: z.string(),
  state: z.string(),
  stateAbbr: z.string(),
  county: z.string(),
  region: z.string(),
  metro: z.string(),
  geo: LocationGeoSchema,
  nearbySlugs: z.array(z.string()),
  publish: LocationPublishSchema,
  heroHeadline: z.string(),
  heroSub: z.string(),
  intro: z.string(),
  marketPoints: z.array(PointSchema),
  stats: z.array(StatSchema),
  whyLocal: z.array(PointSchema),
  serviceAreas: z.array(z.string()),
  featuredCaseStudies: z.array(z.string()).default([]),
  featuredProjects: z.array(z.string()).default([]),
  featuredArticles: z.array(z.string()).default([]),
  featuredIndustries: z.array(z.string()).optional(),
  featuredServices: z.array(z.string()).optional(),
  ogImage: z.string().optional(),
  faqs: z.array(FaqSchema),
  meta: MetaSchema,
});

/* ------------------------------------------------------------------ */
/* Portfolio                                                           */
/* ------------------------------------------------------------------ */

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  industry: z.string(),
  /** Portfolio grouping — websites, social reels, or custom software platforms. */
  portfolioKind: z.enum(["website", "software", "social-media"]),
  services: z.array(z.string()),
  description: z.string(),
  screenshots: z.array(ScreenshotSchema),
  results: z.array(StatSchema),
  technologies: z.array(z.string()),
  testimonial: TestimonialSchema,
  featured: z.boolean().default(false),
});

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export const CaseStudySchema = z.object({
  slug: z.string(),
  title: z.string(),
  client: z.string(),
  industry: z.string(),
  services: z.array(z.string()),
  summary: z.string(),
  challenge: z.array(z.string()),
  strategy: z.array(z.string()),
  execution: z.array(z.string()),
  results: z.array(
    StatSchema.extend({
      before: z.string().optional(),
      after: z.string().optional(),
    }),
  ),
  screenshots: z.array(ScreenshotSchema),
  beforeAfter: z.object({
    before: z.object({ title: z.string(), caption: z.string() }),
    after: z.object({ title: z.string(), caption: z.string() }),
  }),
  testimonial: TestimonialSchema,
  featured: z.boolean().default(false),
  locations: z.array(z.string()).optional(),
});

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export const ArticleFrontmatterSchema = z.object({
  title: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  metaTitle: z.string(),
  metaDescription: z.string(),
  featuredImage: z.string(), // gradient key (cyan, violet, …) or public path starting with /
  featuredImageAlt: z.string().optional(),
  author: z.object({ name: z.string(), role: z.string() }),
  publishedAt: z.string(),
  excerpt: z.string(),
  locations: z.array(z.string()).optional(),
});

export const ArticleSchema = ArticleFrontmatterSchema.extend({
  slug: z.string(),
  content: z.string(),
});

/* ------------------------------------------------------------------ */
/* Inferred types                                                      */
/* ------------------------------------------------------------------ */

export type Faq = z.infer<typeof FaqSchema>;
export type Meta = z.infer<typeof MetaSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type Stat = z.infer<typeof StatSchema>;
export type Screenshot = z.infer<typeof ScreenshotSchema>;
export type Point = z.infer<typeof PointSchema>;
export type IconPoint = z.infer<typeof IconPointSchema>;
export type UseCase = z.infer<typeof UseCaseSchema>;
export type PartnerPlatform = z.infer<typeof PartnerPlatformSchema>;
export type PartnerPlatforms = z.infer<typeof PartnerPlatformsSchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type Industry = z.infer<typeof IndustrySchema>;
export type Location = z.infer<typeof LocationSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type CaseStudy = z.infer<typeof CaseStudySchema>;
export type Article = z.infer<typeof ArticleSchema>;
export type ArticleFrontmatter = z.infer<typeof ArticleFrontmatterSchema>;
