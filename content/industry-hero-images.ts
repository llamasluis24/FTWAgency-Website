export interface IndustryHeroImage {
  src: string;
  alt: string;
}

/** Hero background photos keyed by industry slug. */
export const industryHeroImages: Record<string, IndustryHeroImage> = {
  "home-services": {
    src: "/industries/heroes/home-services.jpg",
    alt: "Modern suburban home at golden hour — the kind of property home service businesses serve",
  },
  construction: {
    src: "/industries/heroes/construction.jpg",
    alt: "Yellow excavator and heavy construction equipment on an active job site",
  },
  healthcare: {
    src: "/industries/heroes/healthcare.jpg",
    alt: "Healthcare professional consulting with a patient in a modern clinic",
  },
  "restaurants-hospitality": {
    src: "/industries/heroes/restaurants-hospitality.jpg",
    alt: "Busy restaurant dining room with guests and warm lighting",
  },
  "professional-services": {
    src: "/industries/heroes/professional-services.jpg",
    alt: "Professional team collaborating in a modern office",
  },
  "transportation-logistics": {
    src: "/industries/heroes/transportation-logistics.jpg",
    alt: "Semi trucks moving freight along a highway at sunset",
  },
  "retail-ecommerce": {
    src: "/industries/heroes/retail-ecommerce.jpg",
    alt: "Modern retail store interior with merchandise displays and shoppers",
  },
  manufacturing: {
    src: "/industries/heroes/manufacturing.jpg",
    alt: "Manufacturing facility with precision equipment and production line",
  },
  technology: {
    src: "/industries/heroes/technology.jpg",
    alt: "Industrial robotic arm operating on a precision manufacturing line",
  },
  startups: {
    src: "/industries/heroes/startups.jpg",
    alt: "Startup founders planning growth strategy in a collaborative workspace",
  },
};

export function getIndustryHeroImage(slug: string): IndustryHeroImage | undefined {
  return industryHeroImages[slug];
}
