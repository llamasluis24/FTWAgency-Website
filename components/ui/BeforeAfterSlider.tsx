"use client";

import { useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import type { CaseStudy } from "@/lib/schemas";
import { MockPanel } from "./MockPanel";

/**
 * Draggable before/after comparison. Renders stylized mock panels until
 * real screenshots are uploaded to the CMS.
 */
export function BeforeAfterSlider({
  beforeAfter,
}: {
  beforeAfter: CaseStudy["beforeAfter"];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, pct)));
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/10"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && updateFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        role="slider"
        aria-label="Before and after comparison"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* After (full) */}
        <div className="bg-surface p-4 md:p-8">
          <MockPanel
            screenshot={{ title: beforeAfter.after.title, kind: "website" }}
          />
        </div>

        {/* Before (clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden border-r-2 border-accent bg-bg"
          style={{ width: `${position}%` }}
        >
          <div
            className="p-4 md:p-8"
            style={{ width: containerRef.current?.clientWidth ?? "100%" }}
          >
            <MockPanel
              screenshot={{ title: beforeAfter.before.title, kind: "website" }}
              muted
            />
          </div>
        </div>

        {/* Handle */}
        <div
          className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${position}%` }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-[#04222b] shadow-[0_0_24px_rgba(0,212,255,0.5)]">
            <GripVertical className="h-5 w-5" strokeWidth={2} />
          </div>
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 rounded-full bg-bg/80 px-3 py-1 text-xs font-semibold text-muted backdrop-blur">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
          After
        </span>
      </div>
      <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <p className="text-muted">
          <span className="font-semibold text-heading">Before:</span>{" "}
          {beforeAfter.before.caption}
        </p>
        <p className="text-muted sm:text-right">
          <span className="font-semibold text-accent">After:</span>{" "}
          {beforeAfter.after.caption}
        </p>
      </div>
    </div>
  );
}
