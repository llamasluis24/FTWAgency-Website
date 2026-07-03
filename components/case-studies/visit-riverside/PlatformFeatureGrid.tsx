"use client";

import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { visitRiversideFeatures } from "@/content/case-studies/visit-riverside";
import {
  BrowserFrame,
  CategoryGridMock,
  ListingCardMock,
  MapDiscoveryMock,
  MobileVisitMock,
  PlatformScreenshot,
} from "./DestinationUI";

function FeatureVisual({ visual }: { visual: (typeof visitRiversideFeatures)[number]["visual"] }) {
  switch (visual) {
    case "homepage":
      return (
        <BrowserFrame>
          <PlatformScreenshot />
        </BrowserFrame>
      );
    case "categories":
      return (
        <BrowserFrame>
          <CategoryGridMock activeIndex={1} />
        </BrowserFrame>
      );
    case "listing":
      return (
        <BrowserFrame>
          <ListingCardMock />
        </BrowserFrame>
      );
    case "mobile":
      return (
        <div className="flex items-center justify-center rounded-xl bg-[#0B0F14] py-6">
          <MobileVisitMock />
        </div>
      );
    case "seo":
      return (
        <div className="space-y-2 p-4">
          <div className="rounded-lg border border-[#e8e4dc] bg-[#f7f4ee] px-3 py-2 text-xs text-[#6b6158]">
            /restaurants
          </div>
          <div className="rounded-lg border border-[#e8e4dc] bg-[#f7f4ee] px-3 py-2 text-xs text-[#6b6158]">
            /events
          </div>
          <div className="rounded-lg border border-[#e8e4dc] bg-[#f7f4ee] px-3 py-2 text-xs text-[#6b6158]">
            /things-to-do
          </div>
          <div className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-medium text-accent">
            Structured for local search intent
          </div>
        </div>
      );
    case "growth":
      return <MapDiscoveryMock />;
    default:
      return null;
  }
}

export function PlatformFeatureGrid() {
  return (
    <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {visitRiversideFeatures.map((feature) => (
        <RevealItem key={feature.title}>
          <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#121821] transition-[border-color,box-shadow] duration-500 hover:border-accent/25 hover:shadow-[0_0_48px_rgba(0,212,255,0.1)]">
            <div className="overflow-hidden border-b border-white/5 bg-white">
              <FeatureVisual visual={feature.visual} />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-heading">{feature.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{feature.description}</p>
            </div>
          </article>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}
