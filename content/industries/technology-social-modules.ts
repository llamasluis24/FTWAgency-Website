import type { FeedPost, PlatformSpreadItem, ShootClip } from "@/content/social-showcase";
import type {
  TechModuleBeforeAfter,
  TechModuleFunnel,
  TechModuleRoiCalculator,
} from "./technology-shared-types";

/** Editable copy + defaults for /industries/technology/viral-social-media/ modules only. */

export const technologySocialModules = {
  showcase: {
    eyebrow: "Tech Social Example",
    title: "See What Platform-Native Content Looks Like for a SaaS Company",
    lede:
      "Technology buyers discover products in the feed before they ever hit Google. Short-form content builds the audience, authority, and distribution channel your product needs — without renting attention from ads forever.",
    feedPosts: [
      {
        hook: "Why most SaaS dashboards fail after 90 days",
        views: "412K",
        likes: "24.8K",
        shares: "3.1K",
        platform: "TikTok",
        image: "/showcases/social/luxe-interiors-tiktok.png",
        imageAlt: "TikTok post mockup for a B2B software brand with professional overlay",
      },
      {
        hook: "We cut onboarding time from 2 weeks to 2 days — here's how",
        views: "128K",
        likes: "9.2K",
        shares: "1.4K",
        platform: "Reels",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "Instagram Reels mockup demonstrating a SaaS product workflow",
      },
      {
        hook: "3 signs your workflow tool is holding your team back",
        views: "186K",
        likes: "11.6K",
        shares: "980",
        platform: "Shorts",
        image: "/showcases/social/haven-home-shorts.png",
        imageAlt: "YouTube Shorts mockup with a quick SaaS productivity tip",
      },
    ] satisfies FeedPost[],
    shootLocation: "ClearPath HQ · Product Launch",
    shootDuration: "Half-day studio session",
    shootImage: "/showcases/social/peak-solar-shoot-day.png",
    shootImageAlt:
      "Batch content shoot mockup showing multiple platform-native clips produced from one studio session",
    shootClips: [
      {
        platform: "TikTok",
        format: "Founder POV",
        hook: "We built this because every ops team we talked to had the same problem",
        gradient: "from-pink-500 to-cyan-500",
      },
      {
        platform: "Reels",
        format: "Product Demo",
        hook: "Watch a workflow go from 47 manual steps to 3 automations",
        gradient: "from-purple-500 to-orange-400",
      },
      {
        platform: "LinkedIn",
        format: "Thought Leadership",
        hook: "Why we stopped selling features and started selling outcomes",
        gradient: "from-blue-600 to-blue-800",
      },
      {
        platform: "Shorts",
        format: "Quick Win",
        hook: "This integration saved our customer 12 hours per week",
        gradient: "from-red-500 to-rose-600",
      },
      {
        platform: "Stories",
        format: "Launch Countdown",
        hook: "48 hours until v2 — here's what's new",
        gradient: "from-amber-400 to-orange-500",
      },
      {
        platform: "Carousel",
        format: "Feature Breakdown",
        hook: "5 automations every SaaS ops team needs on day one",
        gradient: "from-teal-500 to-emerald-600",
      },
    ] satisfies ShootClip[],
    profileName: "ClearPath",
    profileHandle: "@clearpath.io",
    profileBio: "Workflow automation for modern ops teams · SOC 2 · Start free trial 👇",
    profileLink: "Start Free Trial →",
    profileImage: "/showcases/social/wag-and-wonder-profile.jpg",
    profileImageAlt:
      "Instagram profile mockup with trial CTA, highlights, and conversion-optimized content grid",
    profileHighlights: [
      { label: "Product" },
      { label: "Customers" },
      { label: "Integrations" },
      { label: "Demo" },
    ],
  },

  funnel: {
    eyebrow: "Content-to-Pipeline",
    title: "Turn Social Attention Into Product Demand",
    lede:
      "Strong social for technology companies does not stop at views. Every piece of content routes curious viewers toward trials, demos, and the product experiences that close deals.",
    stages: [
      { label: "Video Views", value: 120000 },
      { label: "Profile Visits", value: 4800 },
      { label: "Trial Link Clicks", value: 920 },
      { label: "Demo Requests", value: 186 },
      { label: "New Customers", value: 24 },
    ],
  } satisfies TechModuleFunnel,

  platformSpread: {
    eyebrow: "Multi-Platform Distribution",
    title: "One Message, Every Platform Your Buyers Use",
    lede:
      "Your ICP lives across TikTok, LinkedIn, YouTube, and Instagram. We adapt each asset natively — same campaign, different format, zero reposted corporate flyers.",
    items: [
      {
        platform: "TikTok",
        hook: "POV: you just discovered the workflow tool your ops team actually needed",
        gradient: "from-pink-500/30 to-cyan-500/30",
        caption: "For You · ClearPath · SaaS",
        image: "/showcases/social/luxe-interiors-tiktok.png",
        imageAlt: "TikTok feed mockup for a B2B software brand",
      },
      {
        platform: "Reels",
        hook: "From 47 manual steps to 3 automations in under 60 seconds",
        gradient: "from-purple-500/30 to-orange-500/30",
        caption: "Suggested · B2B Software",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "Instagram Reels mockup demonstrating a product workflow",
      },
      {
        platform: "Shorts",
        hook: "Why most SaaS onboarding flows lose users on day 3",
        gradient: "from-red-500/20 to-red-500/10",
        caption: "Trending · SaaS Tips",
        image: "/showcases/social/haven-home-shorts.png",
        imageAlt: "YouTube Shorts mockup for a SaaS onboarding tip",
      },
      {
        platform: "Facebook",
        hook: "ClearPath v2 is live — here's what 500+ ops teams asked for",
        gradient: "from-blue-600/30 to-blue-800/30",
        caption: "Community · Product Launch",
        image: "/showcases/social/iron-tribe-facebook.png",
        imageAlt: "Facebook feed mockup for a B2B product launch announcement",
      },
    ] satisfies PlatformSpreadItem[],
  },

  roiCalculator: {
    eyebrow: "Social Impact Calculator",
    title: "Estimate What Owned Audience Could Mean for Pipeline",
    lede:
      "For SaaS companies, even modest lifts in social-driven profile visits and trial signups create meaningful pipeline — without increasing paid ad spend.",
    defaults: {
      monthlyVisitors: 350,
      currentRate: 0.9,
      improvedRate: 1.8,
      averageValue: 6000,
    },
    labels: {
      monthlyVisitors: "Monthly social profile visits",
      currentRate: "Current trial signup rate (%)",
      improvedRate: "Improved trial signup rate (%)",
      averageValue: "Average customer LTV ($)",
      currentOpportunities: "Current monthly trials",
      improvedOpportunities: "Improved monthly trials",
      additionalOpportunities: "Additional trials",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies TechModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Sporadic Posts to a Content Engine",
    before: {
      label: "Before",
      headline: "Posting into the void.",
      items: [
        "Random product screenshots",
        "No hooks or retention editing",
        "Same post cross-posted everywhere",
        "Zero conversion path in bio",
        "Founder is the only content creator",
      ],
    },
    after: {
      label: "After",
      headline: "A system that builds pipeline.",
      items: [
        "Batch-produced platform-native content",
        "Hooks engineered for retention",
        "Native edits per platform",
        "Profile optimized for trials",
        "Consistent cadence without founder burnout",
      ],
    },
  } satisfies TechModuleBeforeAfter,
} as const;

export type TechnologySocialModules = typeof technologySocialModules;
