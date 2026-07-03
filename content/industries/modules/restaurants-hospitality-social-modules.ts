import type { FeedPost, PlatformSpreadItem, ShootClip } from "@/content/social-showcase";
import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleRoiCalculator,
} from "./types";

export const restaurantsHospitalitySocialModules = {
  showcase: {
    eyebrow: "Restaurant Social Example",
    title: "See What Food-First Content Looks Like for a Farm-to-Table Group",
    lede:
      "Diners discover restaurants in the feed before they ever search Google. Short-form food content fills weeknights, builds hype for specials, and turns scrollers into reservations.",
    feedPosts: [
      {
        hook: "POV: the brunch plate that broke the group chat",
        views: "1.2M",
        likes: "84.2K",
        shares: "12.6K",
        platform: "TikTok",
        image: "/showcases/social/elevate-coffee-tiktok-v2.png",
        imageAlt:
          "TikTok post mockup for a farm-to-table brunch spot with espresso pour and brand overlay",
      },
      {
        hook: "Our chef's 60-second seasonal menu breakdown",
        views: "486K",
        likes: "32.1K",
        shares: "4.8K",
        platform: "Reels",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt:
          "Instagram Reels mockup for BRGR HAUS promoting a signature smokehouse burger",
      },
      {
        hook: "Tuesday night special — why locals keep coming back",
        views: "628K",
        likes: "41.4K",
        shares: "6.2K",
        platform: "Shorts",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "YouTube Shorts mockup highlighting a weeknight restaurant special",
      },
    ] satisfies FeedPost[],
    shootLocation: "Farm House Collective · Kitchen & Patio",
    shootDuration: "Half-day food content shoot",
    shootImage: "/showcases/social/peak-solar-shoot-day.png",
    shootImageAlt:
      "Batch food content shoot mockup showing multiple platform-native clips from one session",
    shootClips: [
      {
        platform: "TikTok",
        format: "Plating Reveal",
        hook: "Watch our chef build the signature harvest bowl in real time",
        gradient: "from-emerald-500 to-lime-400",
      },
      {
        platform: "Reels",
        format: "Behind the Kitchen",
        hook: "Farm delivery day — here's what hits the menu this week",
        gradient: "from-amber-400 to-orange-500",
      },
      {
        platform: "Shorts",
        format: "Weeknight Special",
        hook: "$18 Tuesday pasta — locals already know, now you do too",
        gradient: "from-rose-400 to-red-500",
      },
      {
        platform: "Stories",
        format: "Patio Vibes",
        hook: "Golden hour on the patio — tables open tonight",
        gradient: "from-orange-400 to-amber-500",
      },
      {
        platform: "Carousel",
        format: "Brunch Menu",
        hook: "5 dishes from this weekend's brunch menu",
        gradient: "from-yellow-500 to-orange-600",
      },
      {
        platform: "TikTok",
        format: "Staff Pick",
        hook: "Our bartender's secret off-menu cocktail order",
        gradient: "from-violet-500 to-purple-600",
      },
    ] satisfies ShootClip[],
    profileName: "Farm House Collective",
    profileHandle: "@farmhousecollective",
    profileBio:
      "A 1950's motel transformed into a unique music venue, dining & retail destination 🍃",
    profileLink: "linktr.ee/farmhouseriverside →",
    profileImage: "/showcases/social/farmhouse-collective-profile.jpg",
    profileImageAlt:
      "Instagram profile for Farm House Collective showing events calendar, highlights, and content grid",
    profileImageWidth: 1024,
    profileImageHeight: 679,
    profileHighlights: [
      { label: "Events" },
      { label: "Local POV" },
      { label: "FAQs" },
      { label: "Grand Opening" },
    ],
  },

  funnel: {
    eyebrow: "Content-to-Covers",
    title: "Turn Social Attention Into Booked Tables",
    lede:
      "Strong social for restaurants does not stop at views. Every piece of content routes hungry locals toward reservations, specials, and the nights that need filling.",
    stages: [
      { label: "Video Views", value: 2100000 },
      { label: "Profile Visits", value: 12400 },
      { label: "Reservation Link Clicks", value: 1860 },
      { label: "Tables Requested", value: 620 },
      { label: "Covers Booked", value: 412 },
    ],
  } satisfies IndustryModuleFunnel,

  platformSpread: {
    eyebrow: "Multi-Platform Distribution",
    title: "One Food Shoot, Every Platform Diners Scroll",
    lede:
      "Your guests live across TikTok, Instagram, YouTube, and Facebook. We adapt each asset natively — same shoot, different hook, zero reposted menu PDFs.",
    items: [
      {
        platform: "TikTok",
        hook: "The brunch spot your friends won't stop tagging you in",
        gradient: "from-pink-500/30 to-cyan-500/30",
        caption: "For You · Farm House Collective",
        image: "/showcases/social/elevate-coffee-tiktok-v2.png",
        imageAlt: "TikTok feed mockup for a farm-to-table brunch restaurant",
      },
      {
        platform: "Reels",
        hook: "Chef's seasonal menu drop — everything is from local farms",
        gradient: "from-purple-500/30 to-orange-500/30",
        caption: "Suggested · Farm House Collective",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "Instagram Reels mockup promoting a signature restaurant dish",
      },
      {
        platform: "Shorts",
        hook: "Why Tuesday is our busiest night (hint: it's not weekend)",
        gradient: "from-red-500/20 to-red-500/10",
        caption: "Trending · Local Eats",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "YouTube Shorts mockup for a weeknight restaurant special",
      },
      {
        platform: "Facebook",
        hook: "Private event inquiry? Our patio seats 40 — here's how to book",
        gradient: "from-rose-500/30 to-amber-500/30",
        caption: "Events · Farm House Collective",
        image: "/showcases/social/iron-tribe-facebook.png",
        imageAlt: "Facebook feed mockup for a hospitality brand event promotion",
      },
    ] satisfies PlatformSpreadItem[],
  },

  roiCalculator: {
    eyebrow: "Social Impact Calculator",
    title: "Estimate What Owned Audience Could Mean for Covers",
    lede:
      "For restaurants, even modest lifts in social-driven reservation clicks create meaningful cover volume — especially on weeknights that need a push.",
    defaults: {
      monthlyVisitors: 420,
      currentRate: 18,
      improvedRate: 32,
      averageValue: 68,
    },
    limits: {
      monthlyVisitors: { min: 80, max: 2000, step: 20 },
      currentRate: { min: 5, max: 40, step: 1 },
      improvedRate: { min: 10, max: 55, step: 1 },
      averageValue: { min: 25, max: 200, step: 5 },
      maxAddedRevenue: 5_000_000,
    },
    labels: {
      monthlyVisitors: "Monthly reservation link clicks",
      currentRate: "Current booking conversion rate (%)",
      improvedRate: "Improved conversion rate (%)",
      averageValue: "Average cover value ($)",
      currentOpportunities: "Current monthly covers",
      improvedOpportunities: "Improved monthly covers",
      additionalOpportunities: "Additional covers",
      addedRevenue: "Estimated added monthly revenue",
    },
  } satisfies IndustryModuleRoiCalculator,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Stale Menu Posts to a Content Reservation Engine",
    before: {
      label: "Before",
      headline: "Food photos into the void.",
      items: [
        "Static menu shots posted sporadically",
        "No hooks or retention editing",
        "Same post cross-posted everywhere",
        "Bio link to homepage only",
        "Tuesday nights consistently empty",
      ],
    },
    after: {
      label: "After",
      headline: "Content that fills weeknight tables.",
      items: [
        "Batch-produced platform-native food content",
        "Hooks engineered for saves and shares",
        "Native edits per platform format",
        "Reservation-optimized profile with location links",
        "40% lift in weeknight covers from social",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};

export type RestaurantsHospitalitySocialModules = typeof restaurantsHospitalitySocialModules;
