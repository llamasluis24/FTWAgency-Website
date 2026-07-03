import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Location } from "@/lib/schemas";

export function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="card-surface card-hover group flex flex-col p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
          <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
        </span>
        <ArrowUpRight
          className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          strokeWidth={2}
        />
      </div>
      <h3 className="font-display text-lg font-semibold text-heading transition-colors group-hover:text-accent">
        {location.city}, {location.stateAbbr}
      </h3>
      <p className="mt-1.5 text-sm leading-snug text-muted">{location.intro}</p>
      <p className="mt-4 text-xs text-muted">
        Serving {location.serviceAreas.slice(0, 3).join(", ")} and more
      </p>
    </Link>
  );
}
