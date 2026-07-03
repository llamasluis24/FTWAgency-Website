"use client";

import { useEffect, useState } from "react";
import type { VisitRiversideInteractiveCategory } from "@/content/case-studies/visit-riverside";
import { VisitRiversideDirectoryChrome } from "./VisitRiversideDirectoryChrome";
import { ListingGrid } from "./ListingGrid";
import { InteractiveRiversideMap } from "./InteractiveRiversideMap";

export function InteractiveDirectoryView({
  category,
}: {
  category: VisitRiversideInteractiveCategory;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(category.listings[0]?.id ?? null);

  useEffect(() => {
    setSelectedId(category.listings[0]?.id ?? null);
  }, [category.id]);

  return (
    <div className="overflow-hidden bg-[#faf8f4] font-sans">
      <VisitRiversideDirectoryChrome filterLabel={category.filterLabel} />

      <div className="border-b border-[#e8e4dc] bg-[#faf8f4] px-3 py-2 md:px-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-[#1a2744] md:text-base">
          {category.sectionTitle}
        </h3>
      </div>

      <div className="grid md:grid-cols-[1fr_1.35fr] md:min-h-[400px]">
        <ListingGrid
          listings={category.listings}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <div className="relative min-h-[300px] border-t border-[#e8e4dc] md:min-h-full md:border-l md:border-t-0">
          <InteractiveRiversideMap
            mapImage={category.mapImage}
            listings={category.listings}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onClosePopup={() => setSelectedId(null)}
          />
        </div>
      </div>
    </div>
  );
}
