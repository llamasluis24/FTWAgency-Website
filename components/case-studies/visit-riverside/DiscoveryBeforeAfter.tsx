"use client";

import Image from "next/image";
import {
  Globe,
  Share2,
  Search,
  FileText,
  MapPin,
  LayoutGrid,
  Smartphone,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import {
  visitRiversideAfterItems,
  visitRiversideBeforeItems,
  visitRiversideImages,
} from "@/content/case-studies/visit-riverside";
import { BrowserFrame, MobileVisitMock } from "./DestinationUI";

const GAP_ICONS = [Globe, Search, Calendar, Share2, FileText, MapPin] as const;
const PLATFORM_ICONS = [LayoutGrid, LayoutGrid, MapPin, Calendar, TrendingUp, Smartphone] as const;

function GoogleSearchFragment() {
  return (
    <div className="w-[148px] rounded-lg border border-[#e8e4dc] bg-white p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-1.5 rounded-full border border-[#ddd8ce] bg-[#faf8f4] px-2 py-1">
        <Search className="h-2.5 w-2.5 text-[#8a7f72]" />
        <span className="text-[8px] text-[#6b6158]">things to do in Riverside</span>
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="space-y-0.5">
          <p className="text-[8px] font-medium text-[#1a56db]">Random travel blog</p>
          <p className="text-[7px] leading-tight text-[#6b6158]">Top 10 Riverside picks…</p>
        </div>
        <div className="space-y-0.5 opacity-70">
          <p className="text-[8px] font-medium text-[#1a56db]">Yelp · Restaurants</p>
          <p className="text-[7px] leading-tight text-[#6b6158]">Best tacos near UCR…</p>
        </div>
      </div>
    </div>
  );
}

function InstagramFragment() {
  return (
    <div className="w-[108px] overflow-hidden rounded-lg border border-[#e8e4dc] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-[#eee] px-2 py-1.5">
        <span className="h-4 w-4 rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]" />
        <span className="text-[7px] font-semibold text-[#262626]">visitriverside_?</span>
      </div>
      <div className="aspect-square bg-gradient-to-br from-[#f59231]/40 via-[#459A94]/30 to-[#1a2744]/50" />
      <p className="px-2 py-1.5 text-[7px] leading-tight text-[#555]">Weekend in #Riverside 🌴</p>
    </div>
  );
}

function YelpFragment() {
  return (
    <div className="w-[120px] rounded-lg border border-[#e8e4dc] bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <p className="text-[9px] font-bold text-[#d32323]">yelp</p>
      <p className="mt-1 text-[8px] font-semibold text-[#2c241c]">Local Restaurant</p>
      <div className="mt-0.5 flex gap-0.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-sm bg-[#ff1a1a]" />
        ))}
        <span className="h-2 w-2 rounded-sm bg-[#ff1a1a]/30" />
      </div>
      <p className="mt-1 text-[7px] text-[#6b6158]">142 reviews · Downtown</p>
    </div>
  );
}

function EventFlyerFragment() {
  return (
    <div className="w-[100px] overflow-hidden rounded-lg border border-[#f26522]/30 bg-gradient-to-br from-[#f26522] to-[#c44d12] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <p className="text-[7px] font-bold uppercase tracking-wider text-white/90">This Weekend</p>
      <p className="mt-1 text-[11px] font-black leading-tight text-white">RIVERSIDE</p>
      <p className="text-[11px] font-black leading-tight text-white">ART WALK</p>
      <p className="mt-2 text-[6px] text-white/80">Sat 6PM · Main Street</p>
    </div>
  );
}

function ChamberPdfFragment() {
  return (
    <div className="w-[112px] rounded-lg border border-[#e8e4dc] bg-[#faf8f4] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-1.5">
        <FileText className="h-4 w-4 text-[#459A94]" strokeWidth={1.75} />
        <span className="text-[7px] font-semibold text-[#2c241c]">Chamber Guide.pdf</span>
      </div>
      <div className="mt-2 space-y-1">
        <div className="h-1 rounded bg-[#ddd8ce]" />
        <div className="h-1 w-5/6 rounded bg-[#e8e4dc]" />
        <div className="h-1 w-4/6 rounded bg-[#e8e4dc]" />
        <div className="h-1 w-full rounded bg-[#ddd8ce]" />
      </div>
      <p className="mt-1.5 text-[6px] text-[#8a7f72]">Updated 2019 · 48 pages</p>
    </div>
  );
}

function EventbriteFragment() {
  return (
    <div className="w-[124px] overflow-hidden rounded-lg border border-[#e8e4dc] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <div className="bg-[#f05537] px-2 py-1">
        <p className="text-[7px] font-bold text-white">eventbrite</p>
      </div>
      <div className="p-2">
        <p className="text-[8px] font-semibold text-[#2c241c]">Food Festival 2024</p>
        <p className="mt-0.5 text-[7px] text-[#6b6158]">Mar 15 · Fairmount Park</p>
        <span className="mt-1.5 inline-block rounded bg-[#f05537]/10 px-1.5 py-0.5 text-[6px] font-semibold text-[#f05537]">
          Free entry
        </span>
      </div>
    </div>
  );
}

function FragmentedDiscoveryVisual() {
  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-xl border border-white/8 bg-[linear-gradient(145deg,#1a2332_0%,#121821_45%,#0f1520_100%)] p-4 md:min-h-[380px] md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,146,49,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Scattered source fragments */}
      <div className="absolute left-2 top-3 z-10 rotate-[-7deg] md:left-4 md:top-4">
        <GoogleSearchFragment />
      </div>
      <div className="absolute right-2 top-2 z-10 rotate-[5deg] md:right-6 md:top-6">
        <InstagramFragment />
      </div>
      <div className="absolute bottom-16 left-1 z-10 rotate-[4deg] md:bottom-20 md:left-4">
        <YelpFragment />
      </div>
      <div className="absolute bottom-20 right-1 z-10 rotate-[-6deg] md:bottom-24 md:right-4">
        <EventFlyerFragment />
      </div>
      <div className="absolute left-[28%] top-[38%] z-10 hidden rotate-[-2deg] sm:block md:left-[32%]">
        <ChamberPdfFragment />
      </div>
      <div className="absolute bottom-4 right-[22%] z-10 rotate-[3deg] md:bottom-6 md:right-[26%]">
        <EventbriteFragment />
      </div>

      {/* Center — the missing hub */}
      <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-red-500/60 bg-red-500/10 shadow-[0_0_40px_rgba(239,68,68,0.25)] backdrop-blur-sm md:h-20 md:w-20">
          <Globe className="h-7 w-7 text-red-500 md:h-8 md:w-8" strokeWidth={1.5} />
        </div>
        <p className="mt-3 max-w-[200px] text-center text-sm font-semibold leading-snug text-heading md:text-base">
          No official place to explore Riverside
        </p>
        <p className="mt-1 max-w-[220px] text-center text-[11px] leading-relaxed text-muted md:text-xs">
          Visitors had to stitch the city together from unrelated sources
        </p>
      </div>

      {/* Disconnection lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full text-white/10" aria-hidden>
        <line x1="18%" y1="22%" x2="46%" y2="46%" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" />
        <line x1="82%" y1="20%" x2="54%" y2="44%" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" />
        <line x1="16%" y1="72%" x2="48%" y2="54%" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" />
        <line x1="84%" y1="68%" x2="52%" y2="52%" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" />
      </svg>
    </div>
  );
}

function PlatformHeroScreenshot() {
  return (
    <div className="relative aspect-[1024/499] w-full bg-[#0f1828]">
      <Image
        src={visitRiversideImages.homepageHero}
        alt="Visit Riverside homepage with library hero photography"
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 720px"
      />
    </div>
  );
}

function PlatformHubVisual() {
  return (
    <div className="space-y-3">
      <BrowserFrame url="visitriverside.com">
        <PlatformHeroScreenshot />
      </BrowserFrame>
      <div className="flex items-center justify-center rounded-xl border border-green-500/20 bg-[#121821] p-4">
        <MobileVisitMock />
      </div>
    </div>
  );
}

function ComparisonCard({
  variant,
  items,
  visual,
}: {
  variant: "gap" | "platform";
  items: readonly string[];
  visual: React.ReactNode;
}) {
  const isPlatform = variant === "platform";
  const icons = isPlatform ? PLATFORM_ICONS : GAP_ICONS;

  return (
    <div
      className={
        isPlatform
          ? "overflow-hidden rounded-2xl border border-green-500/30 bg-[#121821] shadow-[0_0_40px_rgba(34,197,94,0.1)]"
          : "overflow-hidden rounded-2xl border border-red-500/25 bg-[#121821] opacity-95"
      }
    >
      <div
        className={
          isPlatform
            ? "border-b border-green-500/20 bg-green-500/5 px-5 py-4"
            : "border-b border-red-500/15 px-5 py-4"
        }
      >
        <p className={`eyebrow ${isPlatform ? "!text-green-500" : "!text-red-500"}`}>
          {isPlatform ? "The Platform" : "The Gap"}
        </p>
        <p className="mt-1 text-lg font-semibold text-heading">
          {isPlatform ? "Visit Riverside Platform" : "Fragmented Discovery"}
        </p>
      </div>
      <div className="p-4">{visual}</div>
      <div className={`grid gap-2 border-t p-4 sm:grid-cols-2 ${isPlatform ? "border-green-500/15" : "border-red-500/10"}`}>
        {items.map((label, i) => {
          const Icon = icons[i] ?? Search;
          return (
            <div
              key={label}
              className={
                isPlatform
                  ? "flex items-center gap-3 rounded-xl border border-green-500/25 bg-green-500/[0.06] p-3"
                  : "flex items-center gap-3 rounded-xl border border-red-500/25 bg-red-500/[0.06] p-3"
              }
            >
              <span
                className={
                  isPlatform
                    ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500/15"
                    : "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/15"
                }
              >
                <Icon className={isPlatform ? "h-4 w-4 text-green-500" : "h-4 w-4 text-red-500"} strokeWidth={1.75} />
              </span>
              <span className="text-sm text-body">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function DiscoveryBeforeAfter() {
  return (
    <RevealStagger className="flex flex-col gap-6">
      <RevealItem>
        <ComparisonCard
          variant="gap"
          items={visitRiversideBeforeItems}
          visual={<FragmentedDiscoveryVisual />}
        />
      </RevealItem>
      <RevealItem>
        <ComparisonCard
          variant="platform"
          items={visitRiversideAfterItems}
          visual={<PlatformHubVisual />}
        />
      </RevealItem>
    </RevealStagger>
  );
}
