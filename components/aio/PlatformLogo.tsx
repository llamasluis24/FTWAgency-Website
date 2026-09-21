"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";
import type { AioLlmSlide } from "@/content/aio-demo";

function LogoShell({
  className,
  children,
  tone,
}: {
  className?: string;
  children: React.ReactNode;
  tone: string;
}) {
  return (
    <span className={cn("flex shrink-0 items-center justify-center rounded-lg", tone, className)}>
      {children}
    </span>
  );
}

function ClaudeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      {/* Organic Claude starburst — irregular radiating arms */}
      {[
        { r: 0, len: 9.2, w: 1.35 },
        { r: 24, len: 8.4, w: 1.15 },
        { r: 47, len: 9.0, w: 1.3 },
        { r: 71, len: 8.1, w: 1.1 },
        { r: 94, len: 9.3, w: 1.4 },
        { r: 118, len: 8.3, w: 1.15 },
        { r: 141, len: 8.9, w: 1.25 },
        { r: 165, len: 8.0, w: 1.1 },
        { r: 188, len: 9.1, w: 1.35 },
        { r: 212, len: 8.2, w: 1.15 },
        { r: 235, len: 8.8, w: 1.25 },
        { r: 259, len: 8.1, w: 1.1 },
        { r: 282, len: 9.0, w: 1.3 },
        { r: 306, len: 8.3, w: 1.15 },
        { r: 329, len: 8.7, w: 1.2 },
        { r: 352, len: 8.2, w: 1.1 },
      ].map((arm) => (
        <rect
          key={arm.r}
          x={12 - arm.w / 2}
          y={12 - arm.len}
          width={arm.w}
          height={arm.len}
          rx={arm.w / 2}
          transform={`rotate(${arm.r} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="2.35" />
    </svg>
  );
}

function PerplexityMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      {/* Filled geometric Perplexity asterisk */}
      <path d="M11.15 2.1h1.7v19.8h-1.7z" />
      <path d="M4.6 4.6h4.1v4.1H4.6zm10.7 0h4.1v4.1h-4.1zM4.6 15.3h4.1v4.1H4.6zm10.7 0h4.1v4.1h-4.1z" />
      <path d="M8.7 4.6 12 11.2 15.3 4.6h-1.85L12 8.05 10.55 4.6zm0 14.8L12 12.8l3.3 6.6h-1.85L12 15.95 10.55 19.4z" />
      <path d="M4.6 8.7 11.2 12 4.6 15.3v-1.85L8.05 12 4.6 10.55zm14.8 0L12.8 12l6.6 3.3v-1.85L15.95 12 19.4 10.55z" />
      <path d="M12 2.1 8.7 4.6h6.6L12 2.1zm0 19.8 3.3-2.5H8.7L12 21.9z" />
    </svg>
  );
}

function CopilotMark({ className }: { className?: string }) {
  const gradId = useId();

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0078D4" />
          <stop offset="25%" stopColor="#00BCF2" />
          <stop offset="45%" stopColor="#7FBA00" />
          <stop offset="60%" stopColor="#FFB900" />
          <stop offset="78%" stopColor="#F25022" />
          <stop offset="100%" stopColor="#8764B8" />
        </linearGradient>
      </defs>
      {/* Twisted ribbon silhouette with S-shaped negative space */}
      <path
        fill={`url(#${gradId})`}
        fillRule="evenodd"
        d="M8.1 3.2c2.6-1.6 5.9-1.3 8.1.8 1.6 1.5 2.3 3.6 2 5.6 1.7.6 3 2.1 3.3 3.9.5 2.9-1.2 5.7-4 6.5-1.3.4-2.7.3-3.9-.2-.7 1.9-2.5 3.3-4.7 3.4-3.1.2-5.8-2.2-6.1-5.3-.2-1.7.4-3.3 1.5-4.5C3.1 12 2.2 9.5 3 7.1c1-3.1 4.1-4.9 5.1-3.9zm.9 1.9c-1.7.4-2.9 1.9-2.8 3.6 1-.1 2.1 0 3 .5 1.1-1.8 3.1-2.8 5.1-2.6-.8-1.3-2.3-2-3.8-1.8-.5 0-1 .1-1.5.3zm7.8 2.8c-1.5-.4-3.1.2-4.1 1.4 1.3.8 2.2 2.1 2.4 3.6 1.5-.6 2.5-2 2.5-3.6 0-.5-.2-1-.8-1.4zM8.6 10c-1.6 0-2.9 1.2-3 2.8-.1 1.6 1.1 3 2.7 3.1 1.1-1.7 3-2.8 5.1-2.8-.2-1.8-1.6-3.1-3.3-3.2-.5 0-1 0-1.5.1zm6.8 5.2c-1.6.1-3.1 1-4.1 2.3 1.5.6 3.2.5 4.6-.2.9-.5 1.5-1.3 1.7-2.3-.7.1-1.5.2-2.2.2z"
      />
    </svg>
  );
}

/** Brand marks for AI platforms — recreated for small UI use. */
export function PlatformLogo({
  theme,
  className,
}: {
  theme: AioLlmSlide["theme"];
  className?: string;
}) {
  switch (theme) {
    case "chatgpt":
      return (
        <LogoShell className={className} tone="bg-[#10a37f]/15 text-[#10a37f]">
          <svg viewBox="0 0 24 24" className="h-[62%] w-[62%]" fill="currentColor" aria-hidden>
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .742 7.097 5.98 5.98 0 0 0 .511 4.911 6.051 6.051 0 0 0 6.515 2.899A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.045l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.582a4.504 4.504 0 0 1-4.494 4.502zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.168a.077.077 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.782 2.759a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.499 2.607 1.5v2.998l-2.597 1.5-2.607-1.5z" />
          </svg>
        </LogoShell>
      );

    case "gemini":
      return (
        <LogoShell
          className={className}
          tone="bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400"
        >
          <svg viewBox="0 0 24 24" className="h-[62%] w-[62%]" fill="currentColor" aria-hidden>
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </LogoShell>
      );

    case "claude":
      return (
        <LogoShell className={className} tone="bg-[#d97757]/15 text-[#d97757]">
          <ClaudeMark className="h-[72%] w-[72%]" />
        </LogoShell>
      );

    case "perplexity":
      return (
        <LogoShell className={className} tone="bg-[#20b8cd]/15 text-[#20b8cd]">
          <PerplexityMark className="h-[70%] w-[70%]" />
        </LogoShell>
      );

    case "copilot":
      return (
        <LogoShell className={className} tone="bg-white/10">
          <CopilotMark className="h-[74%] w-[74%]" />
        </LogoShell>
      );

    case "grok":
      return (
        <LogoShell className={className} tone="bg-white/10 font-display text-sm text-[#e7e9ea]">
          G
        </LogoShell>
      );
  }
}
