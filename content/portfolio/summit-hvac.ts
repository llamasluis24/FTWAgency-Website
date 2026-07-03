import type { Project } from "@/lib/schemas";

export const summitHvac: Project = {
  slug: "summit-hvac",
  title: "Summit Heating & Air",
  portfolioKind: "website",
  industry: "home-services",
  services: ["website-design-development", "seo", "business-automation", "review-reputation-growth"],
  description:
    "A complete growth system for a regional HVAC company: conversion-engineered website, local SEO dominance across 14 service areas, missed-call automation, and a review engine that tripled their rating velocity.",
  screenshots: [
    { title: "Conversion-first homepage", kind: "website" },
    { title: "Service area landing system", kind: "website" },
    { title: "Lead pipeline dashboard", kind: "pipeline" },
    { title: "Review growth tracking", kind: "reviews" },
  ],
  results: [
    { value: 212, suffix: "%", label: "increase in organic leads" },
    { value: 38, suffix: "%", label: "of missed calls recovered by automation" },
    { value: 4.9, label: "Google rating, up from 4.1" },
  ],
  technologies: ["Next.js", "Tailwind CSS", "CRM Integration", "Call Tracking", "Review Automation"],
  testimonial: {
    quote:
      "We went from invisible to the first name people see in every suburb we serve. The phone hasn't stopped ringing — and when we miss it, the system answers anyway.",
    author: "Marcus Reed",
    role: "Owner",
    company: "Summit Heating & Air",
    industry: "home-services",
  },
  featured: true,
};
