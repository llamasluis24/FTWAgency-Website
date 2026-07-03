export type SocialVisualType = "feed" | "shoot-day" | "platform-spread" | "profile-convert";

export interface SocialFeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface FeedPost {
  hook: string;
  views: string;
  likes: string;
  shares: string;
  platform: "TikTok" | "Reels" | "Shorts";
  /** Full phone mockup screenshot — when set, renders instead of the gradient placeholder. */
  image?: string;
  imageAlt?: string;
}

export interface ShootClip {
  platform: string;
  format: string;
  hook: string;
  gradient: string;
}

export interface PlatformSpreadItem {
  platform: "TikTok" | "Reels" | "Shorts" | "Facebook" | "Reddit";
  hook: string;
  gradient: string;
  caption: string;
  /** Phone mockup screenshot — replaces gradient placeholder when set. */
  image?: string;
  imageAlt?: string;
}

export interface ProfileHighlight {
  label: string;
}

export interface SocialShowcaseRow {
  id: string;
  stepNumber: 1 | 2 | 3 | 4;
  eyebrow: string;
  headline: string;
  body: string;
  visualType: SocialVisualType;
  imagePosition: "left" | "right";
  cards: SocialFeatureCard[];
  feedPosts?: FeedPost[];
  shootClips?: ShootClip[];
  shootLocation?: string;
  shootDuration?: string;
  /** Full shoot-day mockup screenshot — replaces the gradient placeholder when set. */
  shootImage?: string;
  shootImageAlt?: string;
  platformSpread?: PlatformSpreadItem[];
  profileName?: string;
  profileHandle?: string;
  profileBio?: string;
  profileLink?: string;
  profileHighlights?: ProfileHighlight[];
  /** Full profile mockup screenshot — replaces the interactive placeholder when set. */
  profileImage?: string;
  profileImageAlt?: string;
}

export const socialShowcaseIntro = {
  eyebrow: "Social Media in Action",
  headline: "See How Attention Becomes Audience — and Audience Becomes Revenue",
  subheadline:
    "Posting randomly doesn't build a business. FTW Agency builds content systems — strategy, production, distribution, and conversion paths — that turn short-form video into reach, trust, and customers.",
};

export const socialShowcaseRows: SocialShowcaseRow[] = [
  {
    id: "hooks",
    stepNumber: 1,
    eyebrow: "Platform-Native Content",
    headline: "Content Engineered for the Algorithm",
    body: "Platforms reward retention, not effort. We build hooks, pacing, and formats proven to stop the scroll — then adapt each asset natively for TikTok, Reels, Shorts, and Facebook.",
    visualType: "feed",
    imagePosition: "right",
    cards: [
      {
        title: "Scroll-Stopping Hooks",
        description:
          "First 2 seconds decide everything. We script openings that earn the watch — not just the upload.",
        icon: "Zap",
      },
      {
        title: "Retention Editing",
        description:
          "Cuts, captions, and pacing tuned for watch time — the metric algorithms actually reward.",
        icon: "Clapperboard",
      },
      {
        title: "Native Formats",
        description:
          "Same shoot, different edit per platform. No reposted flyers that get buried instantly.",
        icon: "Smartphone",
      },
      {
        title: "Trend Integration",
        description:
          "Proven formats and audio trends adapted to your brand — not chasing every viral dance.",
        icon: "Flame",
      },
    ],
    feedPosts: [
      {
        hook: "Better coffee. Higher standards.",
        views: "8.7K",
        likes: "8.7K",
        shares: "312",
        platform: "TikTok",
        image: "/showcases/social/elevate-coffee-tiktok-v2.png",
        imageAlt: "TikTok post mockup for Elevate Coffee Co. with espresso pour and brand overlay",
      },
      {
        hook: "Bigger. Juicier. Better. — New Smokehouse Burger",
        views: "15.2K",
        likes: "15.2K",
        shares: "2.1K",
        platform: "Reels",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "Instagram Reels mockup for BRGR HAUS promoting the Smokehouse Burger",
      },
      {
        hook: "Spaces that inspire. Results that sell.",
        views: "5.9K",
        likes: "5.9K",
        shares: "243",
        platform: "TikTok",
        image: "/showcases/social/luxe-interiors-tiktok.png",
        imageAlt: "TikTok post mockup for Luxe Interiors showcasing a luxury living room design",
      },
    ],
  },
  {
    id: "production",
    stepNumber: 2,
    eyebrow: "Efficient Production",
    headline: "One Shoot Day. A Month of Content.",
    body: "You shouldn't need a full-time content team. Our batch production system captures weeks of short-form video in a single structured session — strategy, scripts, and editing handled by our team.",
    visualType: "shoot-day",
    imagePosition: "left",
    shootLocation: "Peak Solar + Roofing · Phoenix, AZ",
    shootDuration: "4-hour shoot session",
    shootImage: "/showcases/social/peak-solar-shoot-day.png",
    shootImageAlt:
      "Content shoot day mockup for Peak Solar + Roofing showing 8 assets across TikTok, Reels, Shorts, Facebook, Stories, and Carousel",
    cards: [
      {
        title: "Batch Filming Days",
        description:
          "2–4 hours on location produces 20–30 raw clips — enough for weeks of posting.",
        icon: "Video",
      },
      {
        title: "Scripted on Site",
        description:
          "Every clip mapped to a hook and format before the camera rolls — no wasted footage.",
        icon: "Clapperboard",
      },
      {
        title: "Repurposing Engine",
        description:
          "Long-form clips become 5–8 platform-native shorts — maximum output per shoot.",
        icon: "Layers",
      },
      {
        title: "Brand Consistency",
        description:
          "Templates, captions, and visual style that make your content instantly recognizable.",
        icon: "Gem",
      },
    ],
    shootClips: [
      {
        platform: "TikTok",
        format: "15s Hook Reel",
        hook: "POV: your AC dies on the hottest day of the year",
        gradient: "from-pink-500 to-cyan-500",
      },
      {
        platform: "Reels",
        format: "Before/After",
        hook: "Same house. $400 tune-up vs $4,000 emergency repair.",
        gradient: "from-purple-500 to-orange-400",
      },
      {
        platform: "Shorts",
        format: "Quick Tip",
        hook: "The one filter change that saves you $200/year",
        gradient: "from-red-500 to-rose-600",
      },
      {
        platform: "Facebook",
        format: "Community Post",
        hook: "Riverside homeowners — priority scheduling open this week",
        gradient: "from-blue-600 to-blue-800",
      },
      {
        platform: "Stories",
        format: "Behind the Scenes",
        hook: "Day on the truck with our lead tech Marcus",
        gradient: "from-amber-400 to-orange-500",
      },
      {
        platform: "Carousel",
        format: "5-Slide Guide",
        hook: "What a $89 tune-up actually includes",
        gradient: "from-teal-500 to-emerald-600",
      },
    ],
  },
  {
    id: "growth",
    stepNumber: 3,
    eyebrow: "Organic Reach",
    headline: "Your Brand Shows Up Everywhere Your Customers Scroll",
    body: "One coordinated content push puts your business in front of local buyers across every platform they use — not as a reposted flyer, but as native content that feels like it belongs in their feed.",
    visualType: "platform-spread",
    imagePosition: "right",
    cards: [
      {
        title: "Multi-Platform Presence",
        description:
          "TikTok, Reels, Shorts, and Facebook — each version edited for how that audience actually watches.",
        icon: "Globe",
      },
      {
        title: "Local Discoverability",
        description:
          "Geo-tags, local hooks, and community angles that put you in front of nearby buyers.",
        icon: "MapPin",
      },
      {
        title: "Shareable Formats",
        description:
          "Content people send to friends — 'you need to call these guys' — not ads they scroll past.",
        icon: "Heart",
      },
      {
        title: "Daily Brand Recall",
        description:
          "When you're the account people see every day, you become the default choice in your category.",
        icon: "Crown",
      },
    ],
    platformSpread: [
      {
        platform: "Facebook",
        hook: "Stronger today. Unstoppable tomorrow.",
        gradient: "from-blue-600/30 to-blue-800/30",
        caption: "Sponsored · Iron Tribe Fitness",
        image: "/showcases/social/iron-tribe-facebook.png",
        imageAlt: "Facebook feed mockup for Iron Tribe Fitness gym ad",
      },
      {
        platform: "TikTok",
        hook: "Better coffee. Higher standards.",
        gradient: "from-pink-500/30 to-cyan-500/30",
        caption: "For You · Elevate Coffee Co.",
        image: "/showcases/social/elevate-coffee-tiktok-v2.png",
        imageAlt: "TikTok post mockup for Elevate Coffee Co.",
      },
      {
        platform: "Reddit",
        hook: "Gear for the journey ahead.",
        gradient: "from-orange-500/20 to-orange-700/10",
        caption: "Promoted · Wilder Co.",
        image: "/showcases/social/wilder-co-reddit.png",
        imageAlt: "Reddit feed mockup for Wilder Co. outdoor gear ad",
      },
      {
        platform: "Reels",
        hook: "Bigger. Juicier. Better.",
        gradient: "from-purple-500/30 to-orange-500/30",
        caption: "Suggested · BRGR HAUS",
        image: "/showcases/social/brgrhaus-reels.png",
        imageAlt: "Instagram Reels mockup for BRGR HAUS Smokehouse Burger",
      },
      {
        platform: "Shorts",
        hook: "Beautiful spaces. Built around you.",
        gradient: "from-amber-500/20 to-amber-600/10",
        caption: "Sponsored · Haven Home Design",
        image: "/showcases/social/haven-home-shorts.png",
        imageAlt: "YouTube Shorts mockup for Haven Home Design kitchen remodel",
      },
      {
        platform: "TikTok",
        hook: "Spaces that inspire. Results that sell.",
        gradient: "from-red-500/20 to-red-500/10",
        caption: "For You · Luxe Interiors",
        image: "/showcases/social/luxe-interiors-tiktok.png",
        imageAlt: "TikTok post mockup for Luxe Interiors design showcase",
      },
    ],
  },
  {
    id: "conversion",
    stepNumber: 4,
    eyebrow: "Views to Customers",
    headline: "Attention Without Conversion Is Just Entertainment",
    body: "Views don't pay bills. Every content system we build includes conversion paths — optimized profiles, lead magnets, DM automation, and clear CTAs that route curious viewers into your pipeline.",
    visualType: "profile-convert",
    imagePosition: "left",
    profileName: "Wag & Wonder Pet Care",
    profileHandle: "@wagandwonderpetcare",
    profileBio: "Riverside's trusted pet care crew · Dog walks · Pet sitting · Lots of love",
    profileLink: "Book a Meet & Greet →",
    profileImage: "/showcases/social/wag-and-wonder-profile.jpg",
    profileImageAlt:
      "Instagram profile mockup for Wag & Wonder Pet Care with highlights, CTA, and content grid",
    profileHighlights: [
      { label: "Services" },
      { label: "Reviews" },
      { label: "Before/After" },
      { label: "FAQ" },
    ],
    cards: [
      {
        title: "Profile Optimization",
        description:
          "Bio, link, and highlights engineered to convert curious viewers into action-takers.",
        icon: "UserPlus",
      },
      {
        title: "Lead Magnets",
        description:
          "Free guides, checklists, and offers that capture emails from engaged followers.",
        icon: "Sparkles",
      },
      {
        title: "DM Automation",
        description:
          "Keyword triggers and auto-responses that start conversations while you sleep.",
        icon: "MessageSquare",
      },
      {
        title: "Retargeting Audiences",
        description:
          "Engaged viewers become ad audiences — so paid spend targets people who already know you.",
        icon: "Target",
      },
    ],
  },
];

export const socialShowcaseCta = {
  headline: "Ready to Build an Audience That Builds Your Business?",
  body: "FTW Agency builds content systems that grow reach, authority, and revenue — not just likes from people who already know you. Let's map the opportunity in your market.",
  primaryLabel: "Schedule Strategy Call",
  primaryHref: "/contact",
  secondaryLabel: "View Related Services",
  secondaryHref: "#related-services",
};
