import type { Project } from "@/lib/schemas";

export const velocityCouriers: Project = {
  slug: "velocity-couriers",
  title: "Velocity Couriers",
  portfolioKind: "software",
  industry: "transportation-logistics",
  services: ["custom-software", "mobile-app-development", "business-automation"],
  description:
    "A custom dispatch platform and driver app for a regional courier company — real-time tracking, automated customer updates, and route coordination that raised fleet utilization 25% while cutting status calls in half.",
  screenshots: [
    { title: "Dispatch control board", kind: "dashboard" },
    { title: "Driver mobile app", kind: "mobile" },
    { title: "Customer tracking portal", kind: "website" },
    { title: "Fleet utilization analytics", kind: "chart" },
  ],
  results: [
    { value: 25, suffix: "%", label: "increase in fleet utilization" },
    { value: 54, suffix: "%", label: "fewer 'where's my delivery' calls" },
    { value: 2, suffix: "hr", label: "average dispatch time saved daily" },
  ],
  technologies: ["React Native", "Real-Time GPS", "Custom Dispatch Engine", "SMS Automation"],
  testimonial: {
    quote:
      "The whiteboard is gone. Dispatch sees every truck, customers track their own deliveries, and we added routes without adding office staff.",
    author: "Tom Castillo",
    role: "Operations Director",
    company: "Velocity Couriers",
    industry: "transportation-logistics",
  },
  featured: false,
};
