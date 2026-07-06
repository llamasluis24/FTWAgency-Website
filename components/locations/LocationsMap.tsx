"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAPBOX_STYLE, MAPBOX_TOKEN } from "@/lib/map/config";
import { getMapPinsForCity, getOverviewBounds, type MapCityPin } from "@/lib/map/pins";
import { MapCityList, MapFallback } from "./MapFallback";

mapboxgl.accessToken = MAPBOX_TOKEN;

const MAP_LOAD_TIMEOUT_MS = 12_000;

type LocationsMapProps = {
  pins: MapCityPin[];
  mode?: "overview" | "city";
  focusSlug?: string;
  className?: string;
};

export function LocationsMap({
  pins,
  mode = "overview",
  focusSlug,
  className,
}: LocationsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [activeSlug, setActiveSlug] = useState<string | null>(
    mode === "city" ? focusSlug ?? null : null,
  );
  const [mapReady, setMapReady] = useState(false);
  const [mapFailed, setMapFailed] = useState(!MAPBOX_TOKEN);

  const cityContext = focusSlug ? getMapPinsForCity(pins, focusSlug) : null;
  const sidebarPins =
    mode === "city" && cityContext
      ? [cityContext.focus, ...cityContext.nearby]
      : pins;
  const activePin =
    sidebarPins.find((pin) => pin.slug === activeSlug) ?? sidebarPins[0] ?? null;

  useLayoutEffect(() => {
    if (!MAPBOX_TOKEN || !containerRef.current || mapRef.current) return;

    let cancelled = false;
    const container = containerRef.current;

    const map = new mapboxgl.Map({
      container,
      style: MAPBOX_STYLE,
      center: [-117.5, 33.8],
      zoom: 7,
      attributionControl: false,
      failIfMajorPerformanceCaveat: false,
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
    map.addControl(new mapboxgl.AttributionControl({ compact: true }), "bottom-right");

    const failMap = () => {
      if (!cancelled) setMapFailed(true);
    };

    const timeoutId = window.setTimeout(failMap, MAP_LOAD_TIMEOUT_MS);

    const onReady = () => {
      if (cancelled) return;
      map.resize();
      window.clearTimeout(timeoutId);
      setMapReady(true);
    };

    map.once("idle", onReady);

    map.on("load", () => {
      map.resize();
    });

    map.on("error", (event) => {
      const message = event.error?.message ?? "";
      if (
        message.includes("401") ||
        message.includes("403") ||
        message.includes("Unauthorized") ||
        message.includes("Forbidden")
      ) {
        failMap();
      }
    });

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });
    resizeObserver.observe(container);

    mapRef.current = map;

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      resizeObserver.disconnect();
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
      setMapReady(false);
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || mapFailed) return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    const visiblePins =
      mode === "city" && focusSlug
        ? (() => {
            const context = getMapPinsForCity(pins, focusSlug);
            return context ? [context.focus, ...context.nearby] : pins;
          })()
        : pins;

    visiblePins.forEach((pin) => {
      const el = document.createElement("button");
      el.type = "button";
      el.className = cn(
        "h-4 w-4 rounded-full border-2 border-[#0b0f14] transition-transform",
        pin.slug === activeSlug || pin.slug === focusSlug
          ? "scale-125 bg-[#00d4ff] shadow-[0_0_16px_rgba(0,212,255,0.8)]"
          : "bg-[#00d4ff]/80 hover:scale-110",
      );
      el.setAttribute("aria-label", `${pin.city}, ${pin.stateAbbr}`);
      el.addEventListener("click", () => setActiveSlug(pin.slug));

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([pin.lng, pin.lat])
        .addTo(map);
      markersRef.current.push(marker);
    });

    if (mode === "city" && focusSlug) {
      const focus = pins.find((pin) => pin.slug === focusSlug);
      if (focus) {
        map.flyTo({ center: [focus.lng, focus.lat], zoom: 10.5, duration: 900 });

        const sourceId = "city-radius";
        if (map.getLayer("city-radius-fill")) map.removeLayer("city-radius-fill");
        if (map.getLayer("city-radius-line")) map.removeLayer("city-radius-line");
        if (map.getSource(sourceId)) map.removeSource(sourceId);

        map.addSource(sourceId, {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [focus.lng, focus.lat],
            },
            properties: {},
          },
        });

        map.addLayer({
          id: "city-radius-fill",
          type: "circle",
          source: sourceId,
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 18, 11, 70, 13, 140],
            "circle-color": "#00d4ff",
            "circle-opacity": 0.08,
          },
        });

        map.addLayer({
          id: "city-radius-line",
          type: "circle",
          source: sourceId,
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 18, 11, 70, 13, 140],
            "circle-color": "#00d4ff",
            "circle-opacity": 0,
            "circle-stroke-width": 1.5,
            "circle-stroke-color": "#00d4ff",
            "circle-stroke-opacity": 0.35,
          },
        });
      }
    } else {
      const bounds = getOverviewBounds(pins);
      map.fitBounds(bounds, { padding: 72, maxZoom: 9.5, duration: 900 });
    }

    map.resize();
  }, [activeSlug, focusSlug, mapFailed, mapReady, mode, pins]);

  if (mapFailed) {
    return (
      <div className={cn("grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]", className)}>
        <MapFallback
          pins={pins}
          focusSlug={focusSlug}
          activeSlug={activeSlug}
          onSelect={setActiveSlug}
        />
        <MapCityList pins={sidebarPins} activeSlug={activeSlug} onSelect={setActiveSlug} />
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]", className)}>
      <div className="relative aspect-[16/10] min-h-[320px] w-full overflow-hidden rounded-2xl border border-white/10">
        <div ref={containerRef} className="locations-map-host absolute inset-0 h-full w-full" />
        {!mapReady ? (
          <div className="absolute inset-0 z-10">
            <MapFallback
              pins={pins}
              focusSlug={focusSlug}
              activeSlug={activeSlug}
              onSelect={setActiveSlug}
              overlay
            />
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <MapCityList
          pins={sidebarPins}
          activeSlug={activeSlug}
          onSelect={setActiveSlug}
          title={mode === "city" ? "This market & nearby" : "Southern California"}
        />

        {activePin ? (
          <div className="card-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {activePin.county}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-heading">
              {activePin.city}, {activePin.stateAbbr}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm text-body">{activePin.intro}</p>
            <Link
              href={activePin.href}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-heading"
            >
              Explore {activePin.city}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
