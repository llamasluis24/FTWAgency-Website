"use client";

import Image from "next/image";
import { MapPin, Search, Share2, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  visitRiversideCategoryExplorer,
  visitRiversideImages,
} from "@/content/case-studies/visit-riverside";
import { VisitRiversideLogo } from "./VisitRiversideLogo";
import { VisitRiversideHomepageMock } from "./VisitRiversideHomepageMock";

export function BrowserFrame({
  children,
  url = "visitriverside.com",
  className,
}: {
  children: React.ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-accent/20 bg-[#0B0F14] shadow-[0_0_60px_rgba(0,212,255,0.12)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#121821] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
        <span className="ml-3 flex-1 truncate rounded-full bg-white/5 px-3 py-1 text-[10px] text-muted">
          {url}
        </span>
      </div>
      <div className="overflow-hidden bg-white">{children}</div>
    </div>
  );
}

export function PlatformScreenshot({ className }: { className?: string }) {
  return (
    <VisitRiversideHomepageMock
      variant="desktop"
      className={cn("w-full", className)}
    />
  );
}

export function CategoryGridMock({
  activeIndex = -1,
  large = false,
}: {
  activeIndex?: number;
  large?: boolean;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-2 sm:grid-cols-4", large ? "gap-3 p-6 md:p-8" : "p-4")}>
      {visitRiversideCategoryExplorer.map((tab, i) => (
        <div
          key={tab.id}
          className={cn(
            "rounded-lg border px-2 py-3 text-center font-semibold uppercase tracking-wide transition-colors",
            large ? "text-[11px] sm:text-xs" : "text-[10px] sm:text-[11px]",
            i === activeIndex
              ? "border-accent/40 bg-accent/10 text-[#0B0F14]"
              : "border-[#e8e4dc] bg-[#f7f4ee] text-[#4a4038]",
          )}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}

export function SearchMock({ large = false }: { large?: boolean }) {
  return (
    <div className={cn("space-y-3", large ? "p-8 md:p-10" : "p-5")}>
      <div className="flex items-center gap-2 rounded-full border border-[#ddd8ce] bg-[#faf8f4] px-4 py-3 md:py-4">
        <Search className="h-4 w-4 text-[#8a7f72]" />
        <span className={cn("text-[#6b6158]", large ? "text-base md:text-lg" : "text-sm")}>
          things to do in Riverside
        </span>
      </div>
      <div className="rounded-xl border border-[#e8e4dc] bg-[#f7f4ee] p-4 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8a7f72]">Top result</p>
        <div className="mt-3">
          <VisitRiversideLogo size={large ? "md" : "sm"} />
        </div>
        <p className={cn("mt-3 text-[#6b6158]", large ? "text-base" : "text-sm")}>
          Official city guide for dining, events, and attractions
        </p>
      </div>
    </div>
  );
}

export function ChooseDirectoryScreenshot({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-[1024/541] w-full bg-[#faf8f4]", className)}>
      <Image
        src={visitRiversideImages.journeyChoose}
        alt="Visit Riverside restaurants directory with listing grid and map"
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 640px"
      />
    </div>
  );
}

export function ListingCardMock({ large = false }: { large?: boolean }) {
  return (
    <div className={large ? "p-6 md:p-8" : "p-4"}>
      <div className="overflow-hidden rounded-xl border border-[#e8e4dc] bg-white shadow-sm">
        <div className={cn("relative w-full bg-[#d9d0c4]", large ? "aspect-[16/9]" : "aspect-[16/9]")}>
          <Image
            src={`${visitRiversideImages.journeyChoose}`}
            alt=""
            fill
            className="object-cover object-top"
            sizes="400px"
          />
        </div>
        <div className={cn("space-y-3", large ? "p-5 md:p-6" : "p-4")}>
          <div className="flex flex-wrap gap-1.5">
            {["Restaurant", "Downtown", "Family Friendly"].map((tag) => (
              <span
                key={tag}
                className={cn(
                  "rounded-full bg-[#f0ebe3] font-medium text-[#6b6158]",
                  large ? "px-2.5 py-1 text-[11px]" : "px-2 py-0.5 text-[10px]",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          <h4 className={cn("font-semibold text-[#2c241c]", large ? "text-xl md:text-2xl" : "text-lg")}>
            Riverside Riverwalk Dining
          </h4>
          <p className={cn("flex items-center gap-1.5 text-[#6b6158]", large ? "text-base" : "text-sm")}>
            <MapPin className={large ? "h-4 w-4" : "h-3.5 w-3.5"} />
            Downtown Riverside, CA
          </p>
          <button
            type="button"
            className={cn(
              "w-full rounded-lg bg-[#1f4f63] font-semibold uppercase tracking-wider text-white",
              large ? "px-4 py-3 text-xs md:text-sm" : "px-4 py-2.5 text-xs",
            )}
          >
            View Listing
          </button>
        </div>
      </div>
    </div>
  );
}

export function MobileVisitMock() {
  return (
    <div className="mx-auto w-[220px] overflow-hidden rounded-[2rem] border-[6px] border-[#1a1f28] bg-[#1a1f28] shadow-2xl">
      <div className="relative bg-[#0f1828]">
        <VisitRiversideHomepageMock variant="mobile" />
        <div className="absolute inset-x-0 bottom-0 space-y-2 bg-gradient-to-t from-[#0B0F14]/95 to-transparent p-4 pt-10">
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold text-[#04222b]">
              <Navigation className="h-3 w-3" />
              Directions
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/30 px-2.5 py-1 text-[10px] font-semibold text-white">
              <Share2 className="h-3 w-3" />
              Share
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiversideMapPin({ active = false, className }: { active?: boolean; className?: string }) {
  return (
    <span className={cn("relative flex h-7 w-5 items-end justify-center md:h-8 md:w-6", className)}>
      {!active && (
        <span className="absolute bottom-0 h-5 w-5 rounded-full bg-[#f26522]/30 md:h-6 md:w-6" />
      )}
      {active && (
        <span className="absolute bottom-0 h-6 w-6 animate-pulse rounded-full bg-[#f26522]/40 md:h-7 md:w-7" />
      )}
      <svg viewBox="0 0 24 36" className="relative h-7 w-5 drop-shadow md:h-8 md:w-6" aria-hidden>
        <path
          d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 19 9 19s9-12.25 9-19c0-4.97-4.03-9-9-9z"
          fill={active ? "#e85d4a" : "#f26522"}
        />
        <circle cx="12" cy="9" r="3.5" fill="white" />
      </svg>
    </span>
  );
}

const GROWTH_MAP_PINS = [
  { top: "22%", left: "16%", active: false },
  { top: "26%", left: "84%", active: false },
  { top: "48%", left: "10%", active: false },
  { top: "74%", left: "20%", active: false },
  { top: "70%", left: "80%", active: true },
  { top: "82%", left: "62%", active: false },
] as const;

export function MapDiscoveryMock() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8ece8]">
      <Image
        src={visitRiversideImages.mapThingsToDo}
        alt="Riverside discovery map with business and attraction pins"
        fill
        className="object-cover object-center"
        sizes="400px"
      />

      <div className="absolute right-2 top-2 flex overflow-hidden rounded-sm border border-[#ddd] bg-white text-[8px] shadow-sm">
        <span className="bg-[#f26522] px-2 py-1 font-semibold text-white">Map</span>
        <span className="px-2 py-1 text-[#666]">Satellite</span>
      </div>

      {GROWTH_MAP_PINS.map((pin, i) => (
        <span
          key={i}
          className="absolute z-10 -translate-x-1/2 -translate-y-full"
          style={{ top: pin.top, left: pin.left }}
          aria-hidden
        >
          <RiversideMapPin active={pin.active} />
        </span>
      ))}

      <div className="absolute bottom-2 left-2 flex flex-col gap-0.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-[#ccc] bg-white text-[10px] font-bold text-[#666] shadow-sm">
          +
        </span>
        <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-[#ccc] bg-white text-[10px] font-bold text-[#666] shadow-sm">
          −
        </span>
      </div>

      <div className="absolute bottom-2 right-2 rounded-sm border border-[#ddd] bg-white/95 px-2 py-1 text-[8px] font-medium text-[#666] shadow-sm">
        Riverside, CA
      </div>
    </div>
  );
}

export function JourneyVisual({ stepId, variant = "default" }: { stepId: string; variant?: "default" | "large" }) {
  const large = variant === "large";
  const frameClass = large ? "h-full" : undefined;
  const mobileWrap = large ? "flex h-full items-center justify-center" : "flex items-center justify-center rounded-2xl border border-accent/20 bg-[#0B0F14] p-8";

  switch (stepId) {
    case "search":
      return (
        <BrowserFrame className={cn(large && "h-full", frameClass)}>
          <SearchMock large={large} />
        </BrowserFrame>
      );
    case "discover":
      return (
        <BrowserFrame className={cn(large && "h-full", frameClass)}>
          <PlatformScreenshot className={large ? "min-h-[280px] md:min-h-[312px]" : undefined} />
        </BrowserFrame>
      );
    case "explore":
      return (
        <BrowserFrame className={cn(large && "h-full", frameClass)}>
          <CategoryGridMock activeIndex={2} large={large} />
        </BrowserFrame>
      );
    case "choose":
      return (
        <BrowserFrame className={cn(large && "h-full", frameClass)}>
          <ChooseDirectoryScreenshot className={large ? "min-h-[280px] md:min-h-[312px]" : undefined} />
        </BrowserFrame>
      );
    case "visit":
      return (
        <div className={mobileWrap}>
          <MobileVisitMock />
        </div>
      );
    default:
      return null;
  }
}
