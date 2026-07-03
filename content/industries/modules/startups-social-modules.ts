import type { FeedPost, PlatformSpreadItem, ShootClip } from "@/content/social-showcase";
import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";

export const startupsSocialModules = {
  showcase: {
    eyebrow: "Startup Social Example",
    title: "See What Founder-Led Content Looks Like for a Seed-Stage SaaS",
    lede:
      "Startups can't outspend incumbents on ads — but they can out-create them. Short-form founder content builds the audience, credibility, and owned distribution channel that derisks every future launch.",
    feedPosts: [
      {
        hook: "We built LaunchLoop because daily standups were killing our startup",
        views: "620K",
        likes: "38.2K",
        shares: "5.4K",
        platform: "TikTok",
        image: "/showcases/social/luxe-interiors-tiktok.png",
        imageAlt: "TikTok post mockup for a seed-stage SaaS brand with founder-led hook overlay",
      },
      {
        hook: "POV: your remote team actually ships without meetings",
        views: "284K",
        likes: "16.8K",
        shares: "2.1K",
        platform: "Reels",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "Instagram Reels mockup demonstrating an async startup workflow",
      },
      {
        hook: "3 async workflow mistakes that slow down early-stage teams",
        views: "412K",
        likes: "22.4K",
        shares: "3.6K",
        platform: "Shorts",
        image: "/showcases/social/haven-home-shorts.png",
        imageAlt: "YouTube Shorts mockup with a quick startup productivity tip",
      },
    ] satisfies FeedPost[],
    shootLocation: "LaunchLoop Studio · Product Launch Day",
    shootDuration: "Half-day founder content sprint",
    shootImage: "/showcases/social/peak-solar-shoot-day.png",
    shootImageAlt:
      "Batch founder content shoot mockup showing multiple platform-native clips produced from one session",
    shootClips: [
      {
        platform: "TikTok",
        format: "Founder POV",
        hook: "We went from 6 hours of meetings/week to zero — here's the system",
        gradient: "from-violet-500 to-fuchsia-500",
      },
      {
        platform: "Reels",
        format: "Product Demo",
        hook: "Watch a remote startup ship a feature without a single standup",
        gradient: "from-cyan-500 to-blue-500",
      },
      {
        platform: "LinkedIn",
        format: "Build in Public",
        hook: "Week 12 update: 482 waitlist signups, 24 paying customers",
        gradient: "from-blue-600 to-blue-800",
      },
      {
        platform: "Shorts",
        format: "Quick Win",
        hook: "This async workflow saved our team 8 hours per week",
        gradient: "from-amber-400 to-orange-500",
      },
      {
        platform: "Stories",
        format: "Launch Countdown",
        hook: "48 hours until public beta — here's what's new",
        gradient: "from-pink-500 to-rose-500",
      },
      {
        platform: "Carousel",
        format: "Startup Playbook",
        hook: "5 async habits every seed-stage team needs on day one",
        gradient: "from-emerald-500 to-teal-600",
      },
    ] satisfies ShootClip[],
    profileName: "LaunchLoop",
    profileHandle: "@launchloop.io",
    profileBio: "Async collaboration for remote startup teams · Early access open · Ship without meetings 👇",
    profileLink: "Join Waitlist →",
    profileImage: "/showcases/social/wag-and-wonder-profile.jpg",
    profileImageAlt:
      "Instagram profile mockup with waitlist CTA, highlights, and conversion-optimized content grid",
    profileHighlights: [
      { label: "Product" },
      { label: "Founder" },
      { label: "Launch" },
      { label: "Demo" },
    ],
  },

  funnel: {
    eyebrow: "Content-to-Waitlist",
    title: "Turn Social Attention Into Signups and Pipeline",
    lede:
      "Strong social for startups does not stop at views. Every piece of content routes curious founders toward waitlist signups, demos, and the product experiences that close early customers.",
    stages: [
      { label: "Video Views", value: 1800000 },
      { label: "Profile Visits", value: 6200 },
      { label: "Waitlist Link Clicks", value: 1240 },
      { label: "Signups", value: 482 },
      { label: "Paying Customers", value: 24 },
    ],
  } satisfies IndustryModuleFunnel,

  platformSpread: {
    eyebrow: "Multi-Platform Distribution",
    title: "One Founder Shoot, Every Platform Your Buyers Use",
    lede:
      "Your ICP lives across TikTok, LinkedIn, YouTube, and Twitter/X. We adapt each asset natively — same launch story, different format, zero reposted corporate slides.",
    items: [
      {
        platform: "TikTok",
        hook: "POV: you just found the async tool your startup team actually needed",
        gradient: "from-pink-500/30 to-cyan-500/30",
        caption: "For You · Startups · Remote Work",
        image: "/showcases/social/luxe-interiors-tiktok.png",
        imageAlt: "TikTok feed mockup for a seed-stage SaaS brand",
      },
      {
        platform: "Reels",
        hook: "From 6 hours of meetings to zero — how we built LaunchLoop",
        gradient: "from-purple-500/30 to-orange-500/30",
        caption: "Suggested · SaaS · Productivity",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "Instagram Reels mockup demonstrating a founder-led product story",
      },
      {
        platform: "Shorts",
        hook: "Why most startup standups waste 30 minutes every day",
        gradient: "from-red-500/20 to-red-500/10",
        caption: "Trending · Startup Tips",
        image: "/showcases/social/haven-home-shorts.png",
        imageAlt: "YouTube Shorts mockup for a startup productivity tip",
      },
      {
        platform: "Facebook",
        hook: "LaunchLoop beta is live — 482 teams on the waitlist so far",
        gradient: "from-blue-600/30 to-blue-800/30",
        caption: "Startup Community · Product Launch",
        image: "/showcases/social/iron-tribe-facebook.png",
        imageAlt: "Facebook feed mockup for a startup product launch announcement",
      },
    ] satisfies PlatformSpreadItem[],
  },

  roiCalculator: {
    eyebrow: "Social Impact Calculator",
    title: "Estimate What Owned Audience Could Mean for Signups",
    lede:
      "For startups, even modest lifts in social-driven profile visits and waitlist signups create meaningful pipeline — without increasing paid ad spend.",
    defaults: {
      monthlyVisitors: 420,
      currentRate: 2.4,
      improvedRate: 4.8,
      averageValue: 2400,
    },
    limits: {
      monthlyVisitors: { min: 50, max: 3000, step: 25 },
      currentRate: { min: 0.5, max: 10, step: 0.2 },
      improvedRate: { min: 1, max: 15, step: 0.2 },
      averageValue: { min: 500, max: 25000, step: 250 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly social profile visits",
      currentRate: "Current waitlist signup rate (%)",
      improvedRate: "Improved signup rate (%)",
      averageValue: "Average customer value ($)",
      currentOpportunities: "Current monthly signups",
      improvedOpportunities: "Improved monthly signups",
      additionalOpportunities: "Additional signups",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Sporadic Posts to a Content Launch Engine",
    before: {
      label: "Before",
      headline: "Posting into the void.",
      items: [
        "Random product screenshots",
        "No hooks or retention editing",
        "Same post cross-posted everywhere",
        "Bio link to homepage only",
        "Founder burned out creating content",
      ],
    },
    after: {
      label: "After",
      headline: "Content that drives waitlist signups.",
      items: [
        "Batch-produced platform-native founder content",
        "Hooks engineered for retention and shares",
        "Native edits per platform format",
        "Profile optimized for waitlist conversion",
        "482 signups/month from social traffic",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};

export type StartupsSocialModules = typeof startupsSocialModules;
