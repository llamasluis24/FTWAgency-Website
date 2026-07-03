import { websiteBeforeAfterExamples } from "./website-portfolio-before-after";

const growingBrandsImages = websiteBeforeAfterExamples.find(
  (example) => example.title === "Growing Brands",
)!;

export const blueSocialAppShowcaseExample = {
  title: "Blue Social",
  before: growingBrandsImages.before,
  after: growingBrandsImages.after,
  beforeTitle: "Blue Social — Early App Experience",
  beforeDescription:
    "A minimal first release with core proximity discovery, basic profiles, and limited in-app engagement for early users.",
  afterTitle: "Blue Social — Full-Featured Social App",
  afterDescription:
    "A production-ready iOS and Android app with discovery mode, direct messaging, profile customization, analytics, and real-world networking built to scale.",
};

export const mobileAppBlueSocialShowcase = {
  eyebrow: "Real Client Example",
  headline: "Blue Social — *Mobile App* We Built",
  lede:
    "Blue Social is a proximity-based social networking app for iOS and Android — built to help people discover, connect, and stay social in the real world.",
  body:
    "When Blue Social came to us, the product vision was clear but the app experience wasn't keeping up. We designed and built the mobile product from the ground up — discovery mode, profile flows, in-app messaging, analytics, and the onboarding paths that turn first-time downloads into active users.",
  highlights: [
    "iOS & Android native apps",
    "Proximity discovery & networking",
    "In-app messaging & profiles",
    "Launch-ready App Store deployment",
  ],
  comparisonEyebrow: "Product Evolution",
  comparisonTitle: "From Early Build to *Production App*",
  comparisonLede:
    "How the Blue Social mobile experience evolved as we engineered the features, UX, and performance needed for a growing social app.",
  appStoreLinks: {
    googlePlay: {
      label: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=blue.social.app&hl=en_US",
    },
    appStore: {
      label: "Download on the App Store",
      href: "https://apps.apple.com/us/app/blue-social-networking-irl/id1151689697",
    },
  },
} as const;
