"use client";

import { createContext, useContext, useState } from "react";

export interface IndustryPreset {
  slug: string;
  title: string;
  icon: string;
  examples: {
    lead: string;
    review: string;
    appointment: string;
    metricLabel: string;
    metricValue: string;
  };
}

interface IndustryContextValue {
  presets: IndustryPreset[];
  selected: IndustryPreset;
  select: (slug: string) => void;
}

const IndustryContext = createContext<IndustryContextValue | null>(null);

/**
 * Homepage-wide industry personalization: the hero switcher sets the
 * selected industry; floating panels, example metrics, and the industries
 * grid all react to it.
 */
export function IndustryProvider({
  presets,
  children,
}: {
  presets: IndustryPreset[];
  children: React.ReactNode;
}) {
  const [slug, setSlug] = useState(presets[0]?.slug);
  const selected = presets.find((p) => p.slug === slug) ?? presets[0];

  return (
    <IndustryContext.Provider
      value={{ presets, selected, select: setSlug }}
    >
      {children}
    </IndustryContext.Provider>
  );
}

export function useIndustry(): IndustryContextValue {
  const ctx = useContext(IndustryContext);
  if (!ctx) throw new Error("useIndustry must be used within IndustryProvider");
  return ctx;
}
