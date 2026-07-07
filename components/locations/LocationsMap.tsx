"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAPBOX_STYLE, MAPBOX_TOKEN } from "@/lib/map/config";
import { getMapPinsForCity, getOverviewBounds, type MapCityPin } from "@/lib/map/pins";
import {
  createMapMarkerElement,
  MAP_FLY_ZOOM,
  setMapMarkerActive,
  triggerMapPinPing,
} from "./map-marker";
import { MapCityList, MapFallback } from "./MapFallback";

mapboxgl.accessToken = MAPBOX_TOKEN;

const MAP_LOAD_TIMEOUT_MS = 12_000;
const CITY_RADIUS_SOURCE = "city-radius";

type LocationsMapProps = {
  pins: MapCityPin[];
  mode?: "overview" | "city";
  focusSlug?: string;
  className?: string;
};

function getVisiblePins(pins: MapCityPin[], mode: "overview" | "city", focusSlug?: string) {
  if (mode === "city" && focusSlug) {
    const context = getMapPinsForCity(pins, focusSlug);
    return context ? [context.focus, ...context.nearby] : pins;
  }
  return pins;
}

function ensureCityRadiusLayers(map: mapboxgl.Map, pin: MapCityPin) {
  const data: GeoJSON.Feature = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [pin.lng, pin.lat],
    },
    properties: {},
  };

  const source = map.getSource(CITY_RADIUS_SOURCE) as mapboxgl.GeoJSONSource | undefined;
  if (source) {
    source.setData(data);
    return;
  }

  map.addSource(CITY_RADIUS_SOURCE, {
    type: "geojson",
    data,
  });

  map.addLayer({
    id: "city-radius-fill",
    type: "circle",
    source: CITY_RADIUS_SOURCE,
    paint: {
      "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 18, 11, 70, 13, 140],
      "circle-color": "#60d8b8",
      "circle-opacity": 0.08,
    },
  });

  map.addLayer({
    id: "city-radius-line",
    type: "circle",
    source: CITY_RADIUS_SOURCE,
    paint: {
      "circle-radius": ["interpolate", ["linear"], ["zoom"], 8, 18, 11, 70, 13, 140],
      "circle-color": "#60d8b8",
      "circle-opacity": 0,
      "circle-stroke-width": 1.5,
      "circle-stroke-color": "#60d8b8",
      "circle-stroke-opacity": 0.35,
    },
  });
}

export function LocationsMap({
  pins,
  mode = "overview",
  focusSlug,
  className,
}: LocationsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markerRegistryRef = useRef<Map<string, HTMLButtonElement>>(new Map());
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const flyRequestRef = useRef(0);
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
  const visiblePins = getVisiblePins(pins, mode, focusSlug);
  const activePin =
    sidebarPins.find((pin) => pin.slug === activeSlug) ?? sidebarPins[0] ?? null;

  const handleSelect = useCallback((slug: string) => {
    setActiveSlug(slug);
  }, []);

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
      markerRegistryRef.current.clear();
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
    markerRegistryRef.current.clear();

    visiblePins.forEach((pin) => {
      const el = createMapMarkerElement({
        label: `${pin.city}, ${pin.stateAbbr}`,
        active: pin.slug === activeSlug,
        onClick: () => handleSelect(pin.slug),
      });

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([pin.lng, pin.lat])
        .addTo(map);

      markerRegistryRef.current.set(pin.slug, el);
      markersRef.current.push(marker);
    });
  }, [focusSlug, handleSelect, mapFailed, mapReady, mode, pins, visiblePins]);

  useEffect(() => {
    markerRegistryRef.current.forEach((el, slug) => {
      setMapMarkerActive(el, slug === activeSlug);
    });
  }, [activeSlug]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady || mapFailed) return;

    if (mode === "overview" && !activeSlug) {
      const bounds = getOverviewBounds(pins);
      map.fitBounds(bounds, { padding: 72, maxZoom: 9.5, duration: 900 });
      return;
    }

    if (!activePin) return;

    const requestId = ++flyRequestRef.current;
    const markerEl = markerRegistryRef.current.get(activePin.slug);

    if (mode === "city") {
      ensureCityRadiusLayers(map, activePin);
    }

    const onMoveEnd = () => {
      if (requestId !== flyRequestRef.current) return;
      map.off("moveend", onMoveEnd);
      if (markerEl) triggerMapPinPing(markerEl);
    };

    map.on("moveend", onMoveEnd);
    map.flyTo({
      center: [activePin.lng, activePin.lat],
      zoom: MAP_FLY_ZOOM[mode],
      duration: 900,
      essential: true,
    });

    return () => {
      map.off("moveend", onMoveEnd);
    };
  }, [activePin, activeSlug, mapFailed, mapReady, mode, pins]);

  if (mapFailed) {
    return (
      <div className={cn("grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]", className)}>
        <MapFallback
          pins={pins}
          focusSlug={focusSlug}
          activeSlug={activeSlug}
          onSelect={handleSelect}
        />
        <MapCityList pins={sidebarPins} activeSlug={activeSlug} onSelect={handleSelect} />
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
              onSelect={handleSelect}
              overlay
            />
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-4">
        <MapCityList
          pins={sidebarPins}
          activeSlug={activeSlug}
          onSelect={handleSelect}
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
