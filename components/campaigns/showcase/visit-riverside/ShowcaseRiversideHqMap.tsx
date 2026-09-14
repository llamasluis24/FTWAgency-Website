"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VisitRiversideListing } from "@/content/case-studies/visit-riverside";

const HQ_STREETS = "/campaigns/visit-riverside-hq/map-riverside-hq.jpg";
const HQ_SATELLITE = "/campaigns/visit-riverside-hq/map-riverside-satellite-hq.jpg";

/** Base zoom when a listing is focused. */
const FOCUS_ZOOM = 1.62;

function MapPinIcon({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "relative flex h-8 w-6 items-end justify-center",
        active && "z-20",
      )}
    >
      {!active && (
        <span className="absolute bottom-0 h-6 w-6 rounded-full bg-[#f26522]/30" />
      )}
      {active && (
        <motion.span
          className="absolute bottom-0 h-7 w-7 rounded-full bg-[#f26522]/40"
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <svg
        viewBox="0 0 24 36"
        className="relative h-8 w-6 drop-shadow-md"
        aria-hidden
      >
        <path
          d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 19 9 19s9-12.25 9-19c0-4.97-4.03-9-9-9z"
          fill={active ? "#e85d4a" : "#f26522"}
        />
        <circle cx="12" cy="9" r="3.5" fill="white" />
      </svg>
    </span>
  );
}

/**
 * High-quality Visit Riverside map for the campaign LP.
 * Selecting a place pans/zooms the map toward that pin.
 */
export function ShowcaseRiversideHqMap({
  listings,
  selectedId,
  onSelect,
  onClosePopup,
}: {
  fallbackImage?: string;
  listings: VisitRiversideListing[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onClosePopup: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [satellite, setSatellite] = useState(false);
  /** Extra zoom from +/- controls (1 = none). */
  const [zoomBoost, setZoomBoost] = useState(1);
  const selected = listings.find((l) => l.id === selectedId) ?? null;
  const mapSrc = satellite ? HQ_SATELLITE : HQ_STREETS;

  // Reset boost when jumping to a new place so each visit feels like a fresh fly-in
  useEffect(() => {
    setZoomBoost(1);
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClosePopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId, onClosePopup]);

  const camera = useMemo(() => {
    if (!selected) {
      return {
        scale: zoomBoost,
        originX: 50,
        originY: 50,
        tx: 0,
        ty: 0,
      };
    }

    const fx = selected.mapPosition.x;
    const fy = selected.mapPosition.y;
    const scale = FOCUS_ZOOM * zoomBoost;

    // Pull the selected pin toward the visual center, with a slight left bias
    // so the popup on the right has room. Dampen so edges don't empty out.
    const targetX = 42;
    const targetY = 48;
    const tx = ((targetX - fx) / 100) * 42 * scale;
    const ty = ((targetY - fy) / 100) * 42 * scale;

    return {
      scale,
      originX: fx,
      originY: fy,
      tx,
      ty,
    };
  }, [selected, zoomBoost]);

  const durationMs = reduceMotion ? 0 : 550;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#e8ece8]">
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transformOrigin: `${camera.originX}% ${camera.originY}%`,
          transform: `translate(${camera.tx}%, ${camera.ty}%) scale(${camera.scale})`,
          transition: reduceMotion
            ? undefined
            : `transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1), transform-origin ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      >
        <Image
          key={mapSrc}
          src={mapSrc}
          alt=""
          fill
          priority
          quality={95}
          sizes="(max-width: 768px) 100vw, 1400px"
          className="object-cover object-center"
        />

        {listings.map((listing) => {
          const isActive = listing.id === selectedId;
          return (
            <button
              key={listing.id}
              type="button"
              aria-label={`Show ${listing.name} on map`}
              aria-pressed={isActive}
              onClick={() => onSelect(listing.id)}
              className="absolute z-10 -translate-x-1/2 -translate-y-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f26522]"
              style={{
                left: `${listing.mapPosition.x}%`,
                top: `${listing.mapPosition.y}%`,
              }}
            >
              <MapPinIcon active={isActive} />
            </button>
          );
        })}
      </div>

      <div className="absolute right-2 top-2 z-40 flex overflow-hidden rounded-sm border border-[#ddd] bg-white text-[8px] shadow-sm md:text-[9px]">
        <button
          type="button"
          onClick={() => setSatellite(false)}
          className={cn(
            "px-2 py-1 font-semibold",
            !satellite ? "bg-[#f26522] text-white" : "text-[#666]",
          )}
        >
          Map
        </button>
        <button
          type="button"
          onClick={() => setSatellite(true)}
          className={cn(
            "px-2 py-1 font-semibold",
            satellite ? "bg-[#f26522] text-white" : "text-[#666]",
          )}
        >
          Satellite
        </button>
      </div>

      {selected ? (
        <motion.div
          role="dialog"
          aria-label={selected.name}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 left-1/2 z-30 w-[min(92%,210px)] -translate-x-1/2 overflow-hidden rounded-sm border border-[#ddd] bg-white shadow-lg md:bottom-auto md:left-[52%] md:top-[36%] md:w-[190px] md:translate-x-0"
        >
          <div className="flex items-start justify-between gap-1 border-b border-[#eee] px-2 py-1.5">
            <p className="line-clamp-2 text-[9px] font-bold uppercase leading-tight text-[#1a2744]">
              {selected.name}
            </p>
            <button
              type="button"
              onClick={onClosePopup}
              className="shrink-0 rounded p-0.5 text-[#888] hover:bg-[#f5f5f5]"
              aria-label="Close popup"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
          <div className="relative aspect-[16/10] w-full bg-[#e8e4dc]">
            <Image
              src={selected.image}
              alt=""
              fill
              quality={90}
              className="object-cover object-center"
              sizes="190px"
            />
          </div>
        </motion.div>
      ) : null}

      <div className="absolute bottom-2 left-2 z-40 flex flex-col gap-0.5">
        <button
          type="button"
          onClick={() =>
            setZoomBoost((z) => Math.min(1.45, Number((z + 0.12).toFixed(2))))
          }
          className="flex h-6 w-6 items-center justify-center rounded-sm border border-[#ccc] bg-white text-[12px] font-bold text-[#666] shadow-sm hover:bg-[#faf8f4]"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          type="button"
          onClick={() =>
            setZoomBoost((z) => Math.max(0.85, Number((z - 0.12).toFixed(2))))
          }
          className="flex h-6 w-6 items-center justify-center rounded-sm border border-[#ccc] bg-white text-[12px] font-bold text-[#666] shadow-sm hover:bg-[#faf8f4]"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>
    </div>
  );
}
