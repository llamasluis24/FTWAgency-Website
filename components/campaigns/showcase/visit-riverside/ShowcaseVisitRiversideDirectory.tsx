"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  visitRiversideCategoryExplorer,
  type VisitRiversideInteractiveCategory,
  type VisitRiversideListing,
} from "@/content/case-studies/visit-riverside";
import { VisitRiversideLogo } from "./VisitRiversideLogo";
import { ShowcaseRiversideHqMap } from "./ShowcaseRiversideHqMap";

const INTERACTIVE = visitRiversideCategoryExplorer.filter(
  (c): c is VisitRiversideInteractiveCategory => c.interactive === true,
);

const NAV_ITEMS = [
  { label: "Things To Do", categoryId: "things-to-do", hasMenu: true },
  { label: "Eat & Drink", categoryId: "restaurants", hasMenu: true },
  { label: "Where to Stay", categoryId: null, hasMenu: false },
  { label: "Events", categoryId: null, hasMenu: false },
  { label: "Trip Planner", categoryId: null, hasMenu: false },
] as const;

type SortMode = "featured" | "az" | "za";

function DirectoryChrome({
  category,
  query,
  onQueryChange,
  onSubmitSearch,
  sort,
  onSortChange,
  onCategoryChange,
  categoryOpen,
  setCategoryOpen,
  sortOpen,
  setSortOpen,
}: {
  category: VisitRiversideInteractiveCategory;
  query: string;
  onQueryChange: (value: string) => void;
  onSubmitSearch: () => void;
  sort: SortMode;
  onSortChange: (value: SortMode) => void;
  onCategoryChange: (id: string) => void;
  categoryOpen: boolean;
  setCategoryOpen: (open: boolean) => void;
  sortOpen: boolean;
  setSortOpen: (open: boolean) => void;
}) {
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      const t = e.target as Node;
      if (categoryRef.current && !categoryRef.current.contains(t)) {
        setCategoryOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(t)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [setCategoryOpen, setSortOpen]);

  return (
    <div className="font-sans text-[#2c3e50]">
      <header className="bg-[#1a2744] px-3 py-2.5 md:px-4">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 shrink-0">
            <VisitRiversideLogo
              size="xs"
              className="max-w-[120px] md:max-w-[148px]"
            />
          </div>
          <nav className="hidden items-center gap-3 text-[9px] font-medium text-white/85 lg:flex xl:gap-4 xl:text-[10px]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  if (item.categoryId) onCategoryChange(item.categoryId);
                }}
                className={cn(
                  "flex items-center gap-0.5 whitespace-nowrap transition-colors",
                  item.categoryId === category.id
                    ? "text-white"
                    : "hover:text-white",
                  !item.categoryId && "cursor-default opacity-80",
                )}
              >
                {item.label}
                {item.hasMenu ? (
                  <ChevronDown className="h-2.5 w-2.5 opacity-70" />
                ) : null}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              const input = document.getElementById(
                "vr-showcase-search",
              ) as HTMLInputElement | null;
              input?.focus();
            }}
            className="flex shrink-0 items-center gap-1 border-b border-white/40 pb-0.5 text-[9px] text-white/80"
          >
            <span className="hidden sm:inline">Search for</span>
            <Search className="h-3 w-3" />
          </button>
        </div>
      </header>

      <div className="relative z-40 flex flex-wrap items-center gap-1.5 border-b border-[#e8e4dc] bg-white px-2 py-2 md:gap-2 md:px-3">
        <div ref={categoryRef} className="relative">
          <button
            type="button"
            aria-expanded={categoryOpen}
            aria-haspopup="listbox"
            onClick={() => {
              setCategoryOpen(!categoryOpen);
              setSortOpen(false);
            }}
            className="flex items-center gap-1 rounded border border-[#ddd8ce] bg-white px-2 py-1.5 text-[9px] text-[#4a5568] md:text-[10px]"
          >
            — {category.filterLabel}
            <ChevronDown className="h-2.5 w-2.5" />
          </button>
          {categoryOpen ? (
            <ul
              role="listbox"
              className="absolute left-0 top-full z-50 mt-1 min-w-[180px] overflow-hidden rounded border border-[#ddd8ce] bg-white py-1 shadow-lg"
            >
              {INTERACTIVE.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={item.id === category.id}
                    onClick={() => {
                      onCategoryChange(item.id);
                      setCategoryOpen(false);
                    }}
                    className={cn(
                      "block w-full px-3 py-1.5 text-left text-[10px]",
                      item.id === category.id
                        ? "bg-[#f26522]/10 font-semibold text-[#f26522]"
                        : "text-[#4a5568] hover:bg-[#faf8f4]",
                    )}
                  >
                    {item.filterLabel}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <form
          className="flex min-w-[120px] flex-1 items-center gap-1 rounded border border-[#ddd8ce] bg-[#faf8f4] px-2 py-1.5 text-[9px] text-[#4a5568] md:text-[10px]"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitSearch();
          }}
        >
          <Search className="h-2.5 w-2.5 shrink-0 text-[#8a7f72]" />
          <input
            id="vr-showcase-search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search for"
            className="w-full bg-transparent text-[#2c3e50] outline-none placeholder:text-[#8a7f72]"
            aria-label="Search listings"
          />
          {query ? (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="text-[#8a7f72] hover:text-[#2c3e50]"
              aria-label="Clear search"
            >
              <X className="h-3 w-3" />
            </button>
          ) : null}
        </form>

        <button
          type="button"
          className="flex items-center gap-1 rounded border border-[#ddd8ce] bg-[#faf8f4] px-2 py-1.5 text-[9px] text-[#8a7f72] md:text-[10px]"
          title="Location filter demo"
        >
          <MapPin className="h-2.5 w-2.5 shrink-0" />
          <span>Near</span>
        </button>

        <button
          type="button"
          onClick={onSubmitSearch}
          className="flex h-8 w-8 items-center justify-center rounded bg-[#f26522] text-white transition-colors hover:bg-[#e85d4a]"
          aria-label="Search"
        >
          <Search className="h-3.5 w-3.5" />
        </button>

        <div ref={sortRef} className="relative hidden sm:block">
          <button
            type="button"
            aria-expanded={sortOpen}
            onClick={() => {
              setSortOpen(!sortOpen);
              setCategoryOpen(false);
            }}
            className="flex items-center gap-1 rounded border border-[#ddd8ce] px-2 py-1.5 text-[9px] text-[#4a5568] md:text-[10px]"
          >
            Sort By
            <ChevronDown className="h-2.5 w-2.5" />
          </button>
          {sortOpen ? (
            <ul className="absolute right-0 top-full z-50 mt-1 min-w-[140px] overflow-hidden rounded border border-[#ddd8ce] bg-white py-1 shadow-lg">
              {(
                [
                  ["featured", "Featured"],
                  ["az", "Name A–Z"],
                  ["za", "Name Z–A"],
                ] as const
              ).map(([value, label]) => (
                <li key={value}>
                  <button
                    type="button"
                    onClick={() => {
                      onSortChange(value);
                      setSortOpen(false);
                    }}
                    className={cn(
                      "block w-full px-3 py-1.5 text-left text-[10px]",
                      sort === value
                        ? "bg-[#f26522]/10 font-semibold text-[#f26522]"
                        : "text-[#4a5568] hover:bg-[#faf8f4]",
                    )}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ListingGrid({
  listings,
  selectedId,
  onSelect,
}: {
  listings: VisitRiversideListing[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const selectedRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedId || !selectedRef.current) return;
    selectedRef.current.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [selectedId]);

  if (listings.length === 0) {
    return (
      <div className="flex min-h-[280px] items-center justify-center p-6 text-center text-sm text-[#5a6578]">
        No listings match your search.
      </div>
    );
  }

  return (
    <div className="grid max-h-[520px] grid-cols-2 gap-2 overflow-y-auto p-2 md:grid-cols-3 md:gap-2.5 md:p-3">
      {listings.map((listing) => {
        const isSelected = listing.id === selectedId;
        return (
          <button
            key={listing.id}
            ref={isSelected ? selectedRef : undefined}
            type="button"
            onClick={() => onSelect(listing.id)}
            aria-pressed={isSelected}
            className={cn(
              "overflow-hidden rounded-sm bg-white text-left shadow-sm transition-[box-shadow,ring-color] duration-200 focus:outline-none",
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
                quality={90}
                className="object-cover object-center"
                sizes="180px"
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

/**
 * Campaign-native Visit Riverside directory replica — same chrome/colors/layout
 * as the live destination site, with a high-quality Mapbox map.
 */
export function ShowcaseVisitRiversideDirectory({
  initialCategoryId = "restaurants",
}: {
  initialCategoryId?: string;
}) {
  const [categoryId, setCategoryId] = useState(initialCategoryId);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortMode>("featured");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const category =
    INTERACTIVE.find((c) => c.id === categoryId) ?? INTERACTIVE[0]!;

  const filteredListings = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = category.listings;
    if (q) {
      list = list.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.tag.toLowerCase().includes(q),
      );
    }
    if (sort === "az") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "za") {
      list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }, [query, category.listings, sort]);

  useEffect(() => {
    setSelectedId(category.listings[0]?.id ?? null);
    setQuery("");
  }, [category.id, category.listings]);

  useEffect(() => {
    if (
      selectedId &&
      !filteredListings.some((l) => l.id === selectedId)
    ) {
      setSelectedId(filteredListings[0]?.id ?? null);
    }
  }, [filteredListings, selectedId]);

  return (
    <div
      className="overflow-hidden bg-[#faf8f4] font-sans"
      aria-label="Visit Riverside interactive directory demo"
    >
      <DirectoryChrome
        category={category}
        query={query}
        onQueryChange={setQuery}
        onSubmitSearch={() => undefined}
        sort={sort}
        onSortChange={setSort}
        onCategoryChange={setCategoryId}
        categoryOpen={categoryOpen}
        setCategoryOpen={setCategoryOpen}
        sortOpen={sortOpen}
        setSortOpen={setSortOpen}
      />

      <div className="border-b border-[#e8e4dc] bg-[#faf8f4] px-3 py-2 md:px-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-[#1a2744] md:text-base">
          {category.sectionTitle}
          {query.trim() ? (
            <span className="ml-2 text-xs font-medium normal-case tracking-normal text-[#5a6578]">
              · “{query.trim()}” ({filteredListings.length})
            </span>
          ) : null}
        </h3>
      </div>

      <div className="grid md:min-h-[520px] md:grid-cols-[1fr_1.35fr]">
        <ListingGrid
          listings={filteredListings}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <div className="relative min-h-[360px] border-t border-[#e8e4dc] md:min-h-full md:border-l md:border-t-0">
          <ShowcaseRiversideHqMap
            fallbackImage={category.mapImage}
            listings={filteredListings}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onClosePopup={() => setSelectedId(null)}
          />
        </div>
      </div>
    </div>
  );
}
