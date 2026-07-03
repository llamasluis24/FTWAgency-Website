"use client";

import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisitRiversideLogo } from "./VisitRiversideLogo";

function SocialIcon({
  label,
  children,
  compact,
}: {
  label: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <span
      aria-label={label}
      className={cn(
        "flex items-center justify-center rounded-full border border-white/20 text-white/80",
        compact ? "h-6 w-6" : "h-7 w-7",
      )}
    >
      {children}
    </span>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3.5c.4 2.2 1.8 3.9 3.9 4.2v3.2c-1.4.1-2.8-.3-4-1.1v6.8c0 3.4-2.8 5.8-6.1 5.3-2.5-.4-4.4-2.4-4.8-4.9-.6-3.3 1.7-6.2 5-6.5.4 0 .8 0 1.2.1v3.4c-.3-.1-.7-.2-1.1-.2-1.2 0-2.2 1-2.1 2.2.1 1.1 1.1 2 2.3 2 1.3 0 2.3-1 2.3-2.3V3.5h3.4z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 8.5h2.5l-.5 3H14v8.5h-3.5V11.5H9V8.5h1.5V6.8c0-2.4 1.4-3.8 3.7-3.8.7 0 1.5.1 2.2.2v2.8H14c-1 0-1.2.5-1.2 1.2v1.5z" />
    </svg>
  );
}

function HeroSocialLinks({ compact }: { compact?: boolean }) {
  const iconClass = compact ? "h-3 w-3" : "h-3.5 w-3.5";

  return (
    <div
      className={cn(
        "absolute z-10 flex flex-col gap-2",
        compact ? "left-3 top-5" : "left-5 top-8 md:left-8 md:top-10",
      )}
    >
      <SocialIcon label="Instagram" compact={compact}>
        <InstagramIcon className={iconClass} />
      </SocialIcon>
      <SocialIcon label="TikTok" compact={compact}>
        <TikTokIcon className={iconClass} />
      </SocialIcon>
      <SocialIcon label="Facebook" compact={compact}>
        <FacebookIcon className={iconClass} />
      </SocialIcon>
    </div>
  );
}

const NAV_ITEMS = [
  { label: "Things To Do", dropdown: true },
  { label: "Eat & Drink", dropdown: true },
  { label: "Where to Stay", dropdown: false },
  { label: "Events", dropdown: false },
  { label: "Trip Planner", dropdown: false },
] as const;

function TopUtilityBar({ compact }: { compact?: boolean }) {
  return (
    <div className="flex items-center justify-between bg-[#459A94] px-3 py-1.5 text-[8px] text-white md:px-4 md:py-2 md:text-[9px]">
      <span className={cn("truncate", compact && "text-[7px]")}>info@visitriverside.com</span>
      <div className="flex shrink-0 items-center gap-2">
        {!compact && (
          <span className="hidden items-center gap-1 sm:flex">
            <span className="rounded-sm bg-white/15 px-1.5 py-0.5 font-semibold">EN</span>
            <span className="rounded-sm px-1.5 py-0.5 text-white/75">ES</span>
          </span>
        )}
        <span className="rounded-sm bg-[#f26522] px-2 py-1 text-[7px] font-bold uppercase tracking-wide text-white md:text-[8px]">
          Submit Your Business
        </span>
      </div>
    </div>
  );
}

function MainNav({ compact }: { compact?: boolean }) {
  return (
    <div className="border-b border-white/10 bg-[#1a2744] px-3 py-2 md:px-4">
      <div className="flex items-center justify-between gap-2">
        <VisitRiversideLogo size={compact ? "xs" : "sm"} className={compact ? "max-w-[96px]" : "max-w-[132px]"} />
        <nav className={cn("hidden items-center gap-2 text-[8px] font-medium text-white/90 lg:flex", compact && "lg:hidden")}>
          {NAV_ITEMS.map((item) => (
            <span key={item.label} className="flex items-center gap-0.5 whitespace-nowrap">
              {item.label}
              {item.dropdown && <ChevronDown className="h-2 w-2 opacity-70" />}
            </span>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1 border-b border-white/35 pb-0.5 text-[8px] text-white/80 md:text-[9px]">
          {!compact && <span className="hidden sm:inline">Search for</span>}
          <Search className="h-3 w-3" />
        </div>
      </div>
      {compact && (
        <div className="mt-2 flex gap-2 overflow-x-auto text-[7px] font-medium text-white/80">
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <span key={item.label} className="flex shrink-0 items-center gap-0.5 whitespace-nowrap">
              {item.label}
              {item.dropdown && <ChevronDown className="h-2 w-2 opacity-70" />}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function HeroContent({ compact }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#0f1828]",
        compact ? "px-3 pb-8 pt-5" : "px-5 pb-10 pt-8 md:px-8 md:pb-12 md:pt-10",
      )}
    >
      <p
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif text-[#1a2744]/35 select-none"
        aria-hidden
      >
        <span className={cn("italic", compact ? "text-[4.5rem] leading-none" : "text-[7rem] md:text-[9rem]")}>
          Riverside
        </span>
      </p>

      <HeroSocialLinks compact={compact} />

      <div className={cn("relative z-10", compact ? "pl-9" : "pl-10 md:pl-12")}>
        <p
          className={cn(
            "font-semibold uppercase tracking-[0.18em] text-white/85",
            compact ? "text-[8px]" : "text-[9px] md:text-[10px]",
          )}
        >
          Start your next adventure in...
        </p>
        <h2
          className={cn(
            "mt-2 font-black uppercase leading-[0.92] tracking-[-0.03em] text-white",
            compact ? "text-[2.4rem]" : "text-[3.25rem] md:text-[4.5rem]",
          )}
        >
          Riverside
        </h2>
        <p
          className={cn(
            "mt-2 font-serif italic text-[#f26522]",
            compact ? "text-lg" : "text-2xl md:text-[2rem]",
          )}
        >
          The Heart Of Southern California
        </p>
        <button
          type="button"
          className={cn(
            "mt-5 inline-flex items-center gap-2 rounded-sm bg-[#f26522] font-bold uppercase tracking-[0.12em] text-white",
            compact ? "px-3 py-2 text-[8px]" : "px-4 py-2.5 text-[10px] md:text-[11px]",
          )}
        >
          Explore Now
          <ArrowRight className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} />
        </button>
      </div>
    </div>
  );
}

export function VisitRiversideHomepageMock({
  variant = "desktop",
  className,
}: {
  variant?: "desktop" | "mobile";
  className?: string;
}) {
  const compact = variant === "mobile";

  return (
    <div className={cn("overflow-hidden bg-[#0f1828] font-sans", className)}>
      <TopUtilityBar compact={compact} />
      <MainNav compact={compact} />
      <HeroContent compact={compact} />
    </div>
  );
}
