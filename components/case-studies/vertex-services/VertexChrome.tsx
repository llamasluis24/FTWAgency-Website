"use client";

import { cn } from "@/lib/utils";

export function BlueprintGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]",
        className,
      )}
    />
  );
}

export function SteelPanel({
  children,
  className,
  glow,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-[#121821]/90 backdrop-blur-sm",
        glow
          ? "border-accent/40 shadow-[0_0_32px_rgba(0,212,255,0.18)]"
          : "border-white/10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BrowserChrome({
  children,
  url = "vertex-services.co",
  className,
}: {
  children: React.ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F14] shadow-[0_0_60px_rgba(0,212,255,0.1)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#121821] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
        <span className="ml-3 flex-1 truncate rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] text-muted">
          {url}
        </span>
      </div>
      <div className="overflow-hidden bg-[#f4f6f8]">{children}</div>
    </div>
  );
}

export function FlowConnector({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center py-1", className)} aria-hidden>
      <div className="h-6 w-px bg-gradient-to-b from-accent/50 to-accent/10" />
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  headline,
  body,
  centered,
}: {
  eyebrow: string;
  headline: string;
  body?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-[2.75rem]">
        {headline}
      </h2>
      {body && (
        <p className="mt-5 text-base leading-relaxed text-body md:text-lg">{body}</p>
      )}
    </div>
  );
}
