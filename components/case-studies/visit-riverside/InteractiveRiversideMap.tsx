"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VisitRiversideListing } from "@/content/case-studies/visit-riverside";

function MapPinIcon({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "relative flex h-7 w-5 items-end justify-center md:h-8 md:w-6",
        active && "z-20",
      )}
    >
      {!active && (
        <span className="absolute bottom-0 h-5 w-5 rounded-full bg-[#f26522]/30 md:h-6 md:w-6" />
      )}
      {active && (
        <motion.span
          className="absolute bottom-0 h-6 w-6 rounded-full bg-[#f26522]/40 md:h-7 md:w-7"
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
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

export function InteractiveRiversideMap({
  mapImage,
  listings,
  selectedId,
  onSelect,
  onClosePopup,
}: {
  mapImage: string;
  listings: VisitRiversideListing[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onClosePopup: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const selected = listings.find((l) => l.id === selectedId) ?? null;
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClosePopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId, onClosePopup]);

  return (
    <div ref={mapRef} className="absolute inset-0 bg-[#e8ece8]">
      <Image src={mapImage} alt="" fill className="object-cover object-center" sizes="400px" />

      <div className="absolute right-2 top-2 flex overflow-hidden rounded-sm border border-[#ddd] bg-white text-[8px] shadow-sm">
        <span className="bg-[#f26522] px-2 py-1 font-semibold text-white">Map</span>
        <span className="px-2 py-1 text-[#666]">Satellite</span>
      </div>

      {listings.map((listing) => {
        const isActive = listing.id === selectedId;
        return (
          <button
            key={listing.id}
            type="button"
            aria-label={`Show ${listing.name} on map`}
            aria-pressed={isActive}
            onClick={() => onSelect(listing.id)}
            className="absolute z-10 -translate-x-1/2 -translate-y-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f26522] focus-visible:ring-offset-2"
            style={{ left: `${listing.mapPosition.x}%`, top: `${listing.mapPosition.y}%` }}
          >
            <MapPinIcon active={isActive} />
          </button>
        );
      })}

      {selected && (
        <motion.div
          role="dialog"
          aria-expanded="true"
          aria-label={selected.name}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 left-1/2 z-30 w-[min(92%,200px)] -translate-x-1/2 overflow-hidden rounded-sm border border-[#ddd] bg-white shadow-lg md:bottom-auto md:left-[52%] md:top-[38%] md:w-[180px] md:translate-x-0"
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
              className="object-cover object-center"
              sizes="180px"
            />
          </div>
        </motion.div>
      )}

      <div className="pointer-events-none absolute bottom-2 left-2 flex flex-col gap-0.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-[#ccc] bg-white text-[10px] font-bold text-[#666] shadow-sm">
          +
        </span>
        <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-[#ccc] bg-white text-[10px] font-bold text-[#666] shadow-sm">
          −
        </span>
      </div>
    </div>
  );
}
