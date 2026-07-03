"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { VisitRiversideListing } from "@/content/case-studies/visit-riverside";

export function ListingGrid({
  listings,
  selectedId,
  onSelect,
}: {
  listings: VisitRiversideListing[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3 md:gap-2.5 md:p-3">
      {listings.map((listing) => {
        const isSelected = listing.id === selectedId;
        return (
          <button
            key={listing.id}
            type="button"
            onClick={() => onSelect(listing.id)}
            aria-pressed={isSelected}
            className={cn(
              "overflow-hidden rounded-sm bg-white text-left shadow-sm transition-[box-shadow,ring-color] duration-200",
              isSelected
                ? "ring-2 ring-[#f26522] ring-offset-1"
                : "hover:shadow-md hover:ring-1 hover:ring-[#f26522]/40",
            )}
          >
            <div className="relative aspect-[16/10] w-full bg-[#e8e4dc]">
              <Image
                src={listing.image}
                alt={listing.name}
                fill
                className="object-cover object-center"
                sizes="160px"
              />
            </div>
            <div className="space-y-1 px-1.5 py-2 md:px-2">
              <p className="line-clamp-2 text-[8px] font-bold uppercase leading-tight text-[#5a6578] md:text-[9px]">
                {listing.name}
              </p>
              <span className="inline-block bg-[#f26522] px-1 py-0.5 text-[6px] font-bold uppercase tracking-wide text-white md:text-[7px]">
                {listing.tag}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
