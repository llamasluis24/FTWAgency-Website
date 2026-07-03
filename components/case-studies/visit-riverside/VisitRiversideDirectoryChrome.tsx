import { ChevronDown, MapPin, Search } from "lucide-react";
import { VisitRiversideLogo } from "./VisitRiversideLogo";

export function VisitRiversideDirectoryChrome({
  filterLabel,
}: {
  filterLabel: string;
}) {
  return (
    <div className="font-sans text-[#2c3e50]">
      <header className="bg-[#1a2744] px-3 py-2 md:px-4">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 shrink-0">
            <VisitRiversideLogo size="xs" className="max-w-[120px] md:max-w-[148px]" />
          </div>
          <nav className="hidden items-center gap-3 text-[9px] font-medium text-white/85 lg:flex">
            {["Things To Do", "Eat & Drink", "Where to Stay", "Events", "Trip Planner"].map(
              (item) => (
                <span key={item} className="flex items-center gap-0.5 whitespace-nowrap">
                  {item}
                  {(item === "Things To Do" || item === "Eat & Drink") && (
                    <ChevronDown className="h-2.5 w-2.5 opacity-70" />
                  )}
                </span>
              ),
            )}
          </nav>
          <div className="flex shrink-0 items-center gap-1 border-b border-white/40 pb-0.5 text-[9px] text-white/80">
            <span className="hidden sm:inline">Search for</span>
            <Search className="h-3 w-3" />
          </div>
        </div>
      </header>

      <div className="flex flex-wrap items-center gap-1.5 border-b border-[#e8e4dc] bg-white px-2 py-2 md:gap-2 md:px-3">
        <button
          type="button"
          className="flex items-center gap-1 rounded border border-[#ddd8ce] bg-white px-2 py-1 text-[9px] text-[#4a5568] md:text-[10px]"
        >
          — {filterLabel}
          <ChevronDown className="h-2.5 w-2.5" />
        </button>
        <div className="flex min-w-[80px] flex-1 items-center gap-1 rounded border border-[#ddd8ce] bg-[#faf8f4] px-2 py-1 text-[9px] text-[#8a7f72] md:text-[10px]">
          <Search className="h-2.5 w-2.5 shrink-0" />
          <span>Search for</span>
        </div>
        <div className="flex items-center gap-1 rounded border border-[#ddd8ce] bg-[#faf8f4] px-2 py-1 text-[9px] text-[#8a7f72] md:text-[10px]">
          <MapPin className="h-2.5 w-2.5 shrink-0" />
          <span>Near</span>
        </div>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded bg-[#f26522] text-white"
          aria-label="Search"
        >
          <Search className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          className="hidden items-center gap-1 rounded border border-[#ddd8ce] px-2 py-1 text-[9px] text-[#4a5568] sm:flex md:text-[10px]"
        >
          Sort By
          <ChevronDown className="h-2.5 w-2.5" />
        </button>
      </div>
    </div>
  );
}
