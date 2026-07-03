"use client";

import { useId } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CX = 50;
const CY = 50;
const RX = 46;
const RY = 18;
const MERIDIANS = [-66, -44, -22, 0, 22, 44, 66];
const PARALLELS = [-52, 0, 52];

function meridianPath(lonDeg: number): string {
  const lon = (lonDeg * Math.PI) / 180;
  const points: string[] = [];

  for (let latDeg = -90; latDeg <= 90; latDeg += 2) {
    const lat = (latDeg * Math.PI) / 180;
    const x = CX + RX * Math.cos(lat) * Math.sin(lon);
    const y = CY - RY * Math.sin(lat);
    points.push(`${latDeg === -90 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  return points.join(" ");
}

function parallelPath(latDeg: number): string {
  const lat = (latDeg * Math.PI) / 180;
  const y = CY - RY * Math.sin(lat);
  const halfWidth = RX * Math.cos(lat);

  if (halfWidth < 0.3) return "";

  const x1 = CX - halfWidth;
  const x2 = CX + halfWidth;
  return `M ${x1.toFixed(2)} ${y.toFixed(2)} L ${x2.toFixed(2)} ${y.toFixed(2)}`;
}

function CompactGlobe({ clipId }: { clipId: string }) {
  const gridStroke = "rgba(0,212,255,0.42)";
  const borderStroke = "rgba(0,212,255,0.62)";

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id={clipId}>
          <ellipse cx={CX} cy={CY} rx={RX} ry={RY} />
        </clipPath>
      </defs>

      <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill="none" stroke={borderStroke} strokeWidth="1.1" />

      <g clipPath={`url(#${clipId})`} fill="none" stroke={gridStroke} strokeWidth="0.5">
        {PARALLELS.map((lat) => (
          <path key={`lat-${lat}`} d={parallelPath(lat)} />
        ))}
        {MERIDIANS.map((lon) => (
          <path key={`lon-${lon}`} d={meridianPath(lon)} />
        ))}
      </g>
    </svg>
  );
}

/**
 * Horizontal FTW Agency lockup — For The World | globe + bolt | AGENCY.
 * `emblem` = frameless hero treatment; `badge` = bordered stamp.
 * `centerGlobe` = pin the globe to the horizontal center (hero layout).
 */
const LOCKUP_CLASS =
  "font-serif text-2xl font-bold leading-none text-heading sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl 2xl:text-[3.25rem]";

function WorldLabel({ className }: { className?: string }) {
  return (
    <span className={cn(LOCKUP_CLASS, "whitespace-nowrap text-right tracking-[-0.015em]", className)}>
      For The World
    </span>
  );
}

export function FtwAgencyLogoBadge({
  className,
  variant = "badge",
  centerGlobe = false,
}: {
  className?: string;
  variant?: "badge" | "emblem";
  centerGlobe?: boolean;
}) {
  const clipId = useId();
  const isEmblem = variant === "emblem";

  const agencyClass = cn(LOCKUP_CLASS, "uppercase tracking-[0.05em]");
  const globeClass =
    "relative aspect-[46/18] w-[min(38vw,9rem)] shrink-0 sm:w-44 md:w-56 lg:w-[21rem]";

  const globeMark = (
    <>
      <CompactGlobe clipId={clipId} />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/brand/favicon-lightning-transparent.png"
          alt=""
          width={512}
          height={512}
          className="h-[72%] w-auto object-contain drop-shadow-[0_0_16px_rgba(96,216,184,0.55)]"
          sizes="12rem"
        />
      </div>
    </>
  );

  const emblemGlow = (
    <>
      <div className="pointer-events-none absolute inset-[-30%] rounded-full bg-accent/[0.1] blur-3xl" />
      <div className="pointer-events-none absolute inset-[-12%] rounded-[50%] border border-accent/15" />
      <div className="pointer-events-none absolute inset-[-4%] rounded-[50%] border border-accent/25" />
    </>
  );

  return (
    <div
      className={cn(
        "relative max-w-full",
        centerGlobe ? "w-full" : "mx-auto w-fit",
        isEmblem ? "py-1" : "border border-accent/35 bg-white/[0.025] px-3 py-2 shadow-[0_0_48px_rgba(0,212,255,0.1)] sm:px-4 sm:py-2.5 md:px-5 md:py-3",
        className,
      )}
    >
      {isEmblem && !centerGlobe ? emblemGlow : null}

      {!isEmblem ? (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_50%_50%,rgba(0,212,255,0.06),transparent_70%)]" />
      ) : null}

      {centerGlobe ? (
        <div className="relative grid w-full grid-cols-[1fr_auto_1fr] items-center">
          <WorldLabel className="justify-self-end pr-1 sm:pr-2 md:pr-3" />
          <div className={cn(globeClass, "-mx-2 sm:-mx-4 md:-mx-6 lg:-mx-10")}>
            {isEmblem ? emblemGlow : null}
            {globeMark}
          </div>
          <span className={cn(agencyClass, "justify-self-start pl-1 sm:pl-2 md:pl-3")}>Agency</span>
        </div>
      ) : (
        <div className="relative flex w-fit items-center">
          <WorldLabel className="text-right" />
          <div className={cn(globeClass, "-mx-2 sm:-mx-4 md:-mx-6 lg:-mx-10")}>{globeMark}</div>
          <span className={agencyClass}>Agency</span>
        </div>
      )}
    </div>
  );
}
