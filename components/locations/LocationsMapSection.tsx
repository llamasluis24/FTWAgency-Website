"use client";

import dynamic from "next/dynamic";
import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapCityList, MapFallback } from "@/components/locations/MapFallback";
import type { MapCityPin } from "@/lib/map/pins";

const LocationsMap = dynamic(
  () =>
    import("@/components/locations/LocationsMap").then((mod) => ({
      default: mod.LocationsMap,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-[16/10] w-full animate-pulse rounded-2xl border border-white/10 bg-surface" />
    ),
  },
);

export function LocationsMapSection({
  pins,
  mode = "overview",
  focusSlug,
  eyebrow = "Markets",
  title = "Explore Southern *California*",
  lede = "Ten active markets across the Inland Empire, Orange County, and San Diego County — hover a city to preview, then dive into local growth systems.",
}: {
  pins: MapCityPin[];
  mode?: "overview" | "city";
  focusSlug?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
}) {
  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />
        <div className="mt-8">
          <LocationsMap pins={pins} mode={mode} focusSlug={focusSlug} />
          <noscript>
            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
              <MapFallback pins={pins} focusSlug={focusSlug} />
              <MapCityList pins={pins} title="All markets" />
            </div>
          </noscript>
        </div>
      </Container>
    </Section>
  );
}
