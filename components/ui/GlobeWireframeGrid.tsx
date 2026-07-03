"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

const CX = 50;
const CY = 50;

/** Wide horizontal ellipse — proportions match the FTW logo mockup. */
const RX = 46;
const RY = 18;

/** Seven meridians: straight center, curved sides. */
const MERIDIANS = [-66, -44, -22, 0, 22, 44, 66];
/** Three parallels: equator plus one above and below. */
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

/**
 * Orthographic globe wireframe on a wide horizontal ellipse —
 * straight center axes, curved meridians and parallels toward the edges.
 */
export function GlobeWireframeGrid({ className }: { className?: string }) {
  const clipId = useId();
  const gridStroke = "rgba(0,212,255,0.22)";
  const borderStroke = "rgba(0,212,255,0.38)";

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-full w-full", className)}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id={clipId}>
          <ellipse cx={CX} cy={CY} rx={RX} ry={RY} />
        </clipPath>
      </defs>

      <ellipse
        cx={CX}
        cy={CY}
        rx={RX}
        ry={RY}
        fill="none"
        stroke={borderStroke}
        strokeWidth="0.95"
      />

      <g clipPath={`url(#${clipId})`} fill="none" stroke={gridStroke} strokeWidth="0.42">
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
