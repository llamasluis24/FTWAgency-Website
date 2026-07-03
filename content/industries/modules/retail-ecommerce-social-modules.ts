import type { FeedPost, PlatformSpreadItem, ShootClip } from "@/content/social-showcase";
import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";

export const retailEcommerceSocialModules = {
  showcase: {
    eyebrow: "Retail Social Example",
    title: "See What Product Content Looks Like for a DTC Brand",
    lede:
      "Shoppers discover products in the feed before they ever search Google. Short-form product content builds audience, demand, and the owned channel that makes paid ads cheaper over time.",
    feedPosts: [
      {
        hook: "POV: you finally found sheets that don't trap heat",
        views: "840K",
        likes: "52.4K",
        shares: "8.2K",
        platform: "TikTok",
        image: "/showcases/social/luxe-interiors-tiktok.png",
        imageAlt: "TikTok post mockup showcasing a luxury home product lifestyle scene",
      },
      {
        hook: "Unboxing our best-selling Sage Linen Bundle",
        views: "312K",
        likes: "18.6K",
        shares: "2.4K",
        platform: "Reels",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "Instagram Reels mockup for a product reveal and unboxing-style content",
      },
      {
        hook: "3 home upgrades under $200 that feel luxury",
        views: "428K",
        likes: "24.1K",
        shares: "3.8K",
        platform: "Shorts",
        image: "/showcases/social/haven-home-shorts.png",
        imageAlt: "YouTube Shorts mockup promoting home product upgrades",
      },
    ] satisfies FeedPost[],
    shootLocation: "Verde Market Studio · Product Launch",
    shootDuration: "Full-day product shoot",
    shootImage: "/showcases/social/peak-solar-shoot-day.png",
    shootImageAlt:
      "Batch product content shoot mockup showing multiple platform-native clips from one session",
    shootClips: [
      {
        platform: "TikTok",
        format: "Product Reveal",
        hook: "We spent 2 years finding this linen mill — here's why it matters",
        gradient: "from-emerald-500 to-teal-400",
      },
      {
        platform: "Reels",
        format: "Unboxing",
        hook: "Watch the Sage Linen Bundle go from box to bed in 30 seconds",
        gradient: "from-amber-400 to-orange-500",
      },
      {
        platform: "Shorts",
        format: "Quick Tip",
        hook: "How to style a neutral bedroom that still feels warm",
        gradient: "from-stone-400 to-stone-600",
      },
      {
        platform: "Stories",
        format: "Flash Sale",
        hook: "24-hour free shipping on every order — today only",
        gradient: "from-pink-500 to-rose-500",
      },
      {
        platform: "Carousel",
        format: "Collection Drop",
        hook: "5 pieces from our new Autumn Collection",
        gradient: "from-violet-500 to-purple-600",
      },
      {
        platform: "TikTok",
        format: "UGC Style",
        hook: "Real customers showing their Verde Market setup",
        gradient: "from-cyan-500 to-blue-500",
      },
    ] satisfies ShootClip[],
    profileName: "Verde Market",
    profileHandle: "@verdemarket.co",
    profileBio: "Sustainable home goods · Organic linen · Free shipping $75+ · Shop 👇",
    profileLink: "Shop Now →",
    profileImage: "/showcases/social/wag-and-wonder-profile.jpg",
    profileImageAlt:
      "Instagram profile mockup with shop CTA, highlights, and product content grid for a DTC brand",
    profileHighlights: [
      { label: "Bestsellers" },
      { label: "New Drops" },
      { label: "Reviews" },
      { label: "Sale" },
    ],
  },

  funnel: {
    eyebrow: "Content-to-Commerce",
    title: "Turn Social Attention Into Product Sales",
    lede:
      "Strong social for ecommerce brands does not stop at views. Every piece of content routes curious shoppers toward product pages, collections, and the offers that close sales.",
    stages: [
      { label: "Video Views", value: 2400000 },
      { label: "Profile Visits", value: 8400 },
      { label: "Shop Link Clicks", value: 1680 },
      { label: "Add to Cart", value: 504 },
      { label: "Purchases", value: 186 },
    ],
  } satisfies IndustryModuleFunnel,

  platformSpread: {
    eyebrow: "Multi-Platform Distribution",
    title: "One Product Shoot, Every Platform Shoppers Use",
    lede:
      "Your customers live across TikTok, Instagram, YouTube, and Pinterest. We adapt each asset natively — same campaign, different format, zero reposted catalog photos.",
    items: [
      {
        platform: "TikTok",
        hook: "The linen sheets that made me cancel my Amazon order",
        gradient: "from-pink-500/30 to-cyan-500/30",
        caption: "For You · Verde Market · Home",
        image: "/showcases/social/luxe-interiors-tiktok.png",
        imageAlt: "TikTok feed mockup for a sustainable home goods brand",
      },
      {
        platform: "Reels",
        hook: "Unboxing the Sage Linen Bundle — worth the hype?",
        gradient: "from-purple-500/30 to-orange-500/30",
        caption: "Suggested · Home Decor",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "Instagram Reels mockup for a product unboxing video",
      },
      {
        platform: "Shorts",
        hook: "3 bedding mistakes that ruin your sleep",
        gradient: "from-red-500/20 to-red-500/10",
        caption: "Trending · Sleep Tips",
        image: "/showcases/social/haven-home-shorts.png",
        imageAlt: "YouTube Shorts mockup for home product tips",
      },
      {
        platform: "Facebook",
        hook: "Autumn Collection mood board — neutral tones, organic textures",
        gradient: "from-rose-500/30 to-amber-500/30",
        caption: "Home Inspiration · Shop",
        image: "/showcases/social/wilder-co-reddit.png",
        imageAlt: "Facebook feed mockup promoting a retail collection drop",
      },
    ] satisfies PlatformSpreadItem[],
  },

  roiCalculator: {
    eyebrow: "Social Impact Calculator",
    title: "Estimate What Owned Audience Could Mean for Sales",
    lede:
      "For DTC brands, even modest lifts in social-driven shop clicks and conversion create meaningful order volume — without increasing paid ad spend.",
    defaults: {
      monthlyVisitors: 680,
      currentRate: 1.2,
      improvedRate: 2.4,
      averageValue: 92,
    },
    limits: {
      monthlyVisitors: { min: 100, max: 5000, step: 50 },
      currentRate: { min: 0.3, max: 5, step: 0.1 },
      improvedRate: { min: 0.5, max: 8, step: 0.1 },
      averageValue: { min: 30, max: 300, step: 5 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly shop link clicks",
      currentRate: "Current purchase conversion rate (%)",
      improvedRate: "Improved conversion rate (%)",
      averageValue: "Average order value ($)",
      currentOpportunities: "Current monthly orders",
      improvedOpportunities: "Improved monthly orders",
      additionalOpportunities: "Additional orders",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Catalog Posts to a Content Commerce Engine",
    before: {
      label: "Before",
      headline: "Product photos into the void.",
      items: [
        "Static catalog shots on Instagram",
        "No hooks or retention editing",
        "Same post cross-posted everywhere",
        "Bio link to homepage only",
        "Zero content-to-purchase tracking",
      ],
    },
    after: {
      label: "After",
      headline: "Content that drives shop clicks.",
      items: [
        "Batch-produced platform-native product content",
        "Hooks engineered for retention and saves",
        "Native edits per platform format",
        "Shop-optimized profile with collection links",
        "186 purchases/month from social traffic",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};

export type RetailEcommerceSocialModules = typeof retailEcommerceSocialModules;
