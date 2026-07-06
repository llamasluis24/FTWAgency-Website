import type { Location } from "./schemas";
import type { Metadata } from "next";

export function getLocationLastModified(location: Location): string {
  return location.publish.lastModified ?? location.publish.publishedAt ?? "2026-07-05";
}

export function formatLastUpdated(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Robots directives for location pages based on publish tier. */
export function getLocationRobots(location: Location): Metadata["robots"] | undefined {
  if (location.publish.status === "draft") {
    return { index: false, follow: false };
  }
  return undefined;
}

export type PublishTierSummary = {
  slug: string;
  city: string;
  status: Location["publish"]["status"];
  hubLive: boolean;
  serviceCombos: number;
  industryCombos: number;
  totalCombos: number;
};
