"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, GripVertical } from "lucide-react";
import { farmhouseImages } from "@/content/case-studies/farmhouse-collective";

const DEFAULT_POSITION = 50;

function FullBleedPanel({
  src,
  alt,
  priority,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[16/10] w-full min-h-[320px] md:min-h-[480px] lg:min-h-[540px] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={priority}
      />
    </div>
  );
}

export function FarmHouseBeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const dragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
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
        aria-label="FarmHouse Collective before and after timeline comparison"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <FullBleedPanel
          src={farmhouseImages.afterPolaroid}
          alt="Architectural rendering of the restored Farm House Motel with neon sign, courtyard, and visitors"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-accent"
          style={{ width: `${position}%` }}
        >
          <div style={{ width: containerWidth || "100%" }}>
            <FullBleedPanel
              src={farmhouseImages.beforePolaroid}
              alt="The Farm House Motel before restoration — weathered sign and red wood buildings in Riverside"
              priority
            />
          </div>
        </div>

        <div
          className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${position}%` }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-[#04222b] shadow-[0_0_24px_rgba(0,212,255,0.5)]">
            <GripVertical className="h-5 w-5" strokeWidth={2} />
          </div>
        </div>

        <span className="absolute left-4 top-4 z-10 rounded-full bg-bg/80 px-3 py-1 text-xs font-semibold text-muted backdrop-blur">
          1953 — Before
        </span>
        <span className="absolute right-4 top-4 z-10 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
          2024 — After
        </span>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted">
        <ChevronLeft className="h-4 w-4 text-accent" aria-hidden />
        Slide left to reveal the transformation
      </p>
    </div>
  );
}
