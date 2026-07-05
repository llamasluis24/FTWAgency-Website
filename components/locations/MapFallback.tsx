import Link from "next/link";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { geoToPercent, type MapCityPin } from "@/lib/map/pins";

function MapPinMarker({ pin, highlighted }: { pin: MapCityPin; highlighted: boolean }) {
  return (
    <>
      <span
        className={cn(
          "absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#0b0f14]",
          highlighted
            ? "bg-accent shadow-[0_0_16px_rgba(0,212,255,0.8)]"
            : "bg-accent/70",
        )}
      />
      <span
        className={cn(
          "absolute left-1/2 top-[calc(50%+14px)] -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold md:text-xs",
          highlighted ? "bg-accent/20 text-accent" : "bg-surface/90 text-body",
        )}
      >
        {pin.city}
      </span>
    </>
  );
}

export function MapFallback({
  pins,
  focusSlug,
  activeSlug,
  onSelect,
  className,
}: {
  pins: MapCityPin[];
  focusSlug?: string;
  activeSlug?: string | null;
  onSelect?: (slug: string) => void;
  className?: string;
}) {
  const focusPin = focusSlug ? pins.find((pin) => pin.slug === focusSlug) : null;
  const visiblePins = focusPin
    ? [
        focusPin,
        ...focusPin.nearbySlugs
          .map((slug) => pins.find((p) => p.slug === slug))
          .filter((pin): pin is MapCityPin => Boolean(pin)),
      ]
    : pins;

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f14]",
        className,
      )}
      role="img"
      aria-label="Map of FTW Agency service markets in Southern California"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(0,212,255,0.12),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {visiblePins.map((pin) => {
        const { x, y } = geoToPercent(pin.lat, pin.lng);
        const highlighted = pin.slug === focusSlug || pin.slug === activeSlug;

        if (onSelect) {
          return (
            <button
              key={pin.slug}
              type="button"
              className="absolute z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-label={`Select ${pin.city}`}
              onClick={() => onSelect(pin.slug)}
            >
              <MapPinMarker pin={pin} highlighted={highlighted} />
            </button>
          );
        }

        return (
          <Link
            key={pin.slug}
            href={pin.href}
            className="absolute z-10 block h-10 w-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            aria-label={`${pin.city}, ${pin.stateAbbr}`}
          >
            <MapPinMarker pin={pin} highlighted={highlighted} />
          </Link>
        );
      })}
    </div>
  );
}

/** Accessible list fallback when maps are unavailable or for screen readers. */
export function MapCityList({
  pins,
  activeSlug,
  onSelect,
  title = "Explore markets",
}: {
  pins: MapCityPin[];
  activeSlug?: string | null;
  onSelect?: (slug: string) => void;
  title?: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{title}</p>
      <ul className="space-y-1.5">
        {pins.map((pin) => {
          const active = pin.slug === activeSlug;
          const itemClass = cn(
            "flex w-full items-start gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors",
            active
              ? "border-accent/30 bg-accent/10"
              : "border-white/10 bg-surface/50 hover:border-accent/20 hover:bg-surface",
          );

          const body = (
            <>
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
              <span>
                <span className="block text-sm font-semibold text-heading">
                  {pin.city}, {pin.stateAbbr}
                </span>
                <span className="mt-0.5 block text-xs text-muted">{pin.metro}</span>
              </span>
            </>
          );

          return (
            <li key={pin.slug}>
              {onSelect ? (
                <button type="button" className={itemClass} onClick={() => onSelect(pin.slug)}>
                  {body}
                </button>
              ) : (
                <Link href={pin.href} className={itemClass}>
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
