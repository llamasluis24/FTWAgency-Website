import { cache } from "react";
import {
  getAllArticles,
  getAllCaseStudies,
  getAllIndustries,
  getAllServices,
} from "@/lib/content";
import { getPublishedLocations } from "@/lib/publish";
import type { NavData, PaletteItem } from "@/components/layout/nav-data";

function navDescription(excerpt: string, maxLength = 54): string {
  const first = excerpt.split(".")[0]?.trim() ?? excerpt;
  if (first.length <= maxLength) return `${first}.`;
  const trimmed = first.slice(0, maxLength).replace(/\s+\S*$/, "");
  return `${trimmed}…`;
}

/** Cached per request — avoids re-reading blog MDX on every layout render. */
export const getSiteNav = cache((): NavData => {
  const services = getAllServices();
  const industries = getAllIndustries();
  const locations = getPublishedLocations();

  return {
    services: services.map((s) => ({
      label: s.shortTitle,
      href: `/services/${s.slug}`,
      description: navDescription(s.excerpt),
      icon: s.icon,
      group: s.category,
    })),
    industries: industries.map((i) => ({
      label: i.title,
      href: `/industries/${i.slug}`,
      icon: i.icon,
    })),
    resources: [
      {
        label: "Blog",
        href: "/resources/blog",
        icon: "MessageSquare",
        description: "Growth insights and playbooks",
      },
      {
        label: "Guides",
        href: "/resources/guides",
        icon: "Layers",
        description: "Deep-dive growth guides",
      },
      {
        label: "Academy",
        href: "/resources/academy",
        icon: "Crown",
        description: "Courses and training",
      },
      {
        label: "Tools & Templates",
        href: "/resources/tools",
        icon: "Wrench",
        description: "Free resources that work",
      },
    ],
    locations: locations.map((l) => ({
      label: `${l.city}, ${l.stateAbbr}`,
      href: `/locations/${l.slug}`,
      icon: "MapPin",
    })),
  };
});

export const getSitePaletteItems = cache((): PaletteItem[] => {
  const services = getAllServices();
  const industries = getAllIndustries();
  const locations = getPublishedLocations();

  return [
    { label: "Home", href: "/", group: "Pages" },
    { label: "About", href: "/about", group: "Pages" },
    { label: "Contact — Schedule Strategy Call", href: "/contact", group: "Pages" },
    { label: "Portfolio", href: "/portfolio", group: "Pages" },
    { label: "Case Studies", href: "/case-studies", group: "Pages" },
    { label: "Resources", href: "/resources", group: "Pages" },
    ...services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
      group: "Services",
      keywords: s.excerpt,
    })),
    ...industries.map((i) => ({
      label: i.title,
      href: `/industries/${i.slug}`,
      group: "Industries",
      keywords: i.excerpt,
    })),
    ...locations.map((l) => ({
      label: `${l.city}, ${l.state}`,
      href: `/locations/${l.slug}`,
      group: "Locations",
    })),
    ...getAllCaseStudies().map((c) => ({
      label: c.title,
      href: `/case-studies/${c.slug}`,
      group: "Case Studies",
      keywords: c.summary,
    })),
    ...getAllArticles().map((a) => ({
      label: a.title,
      href: `/resources/blog/${a.slug}`,
      group: "Blog",
      keywords: a.tags.join(" "),
    })),
  ];
});
