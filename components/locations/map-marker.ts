import { cn } from "@/lib/utils";

export const MAP_FLY_ZOOM = {
  overview: 10,
  city: 10.5,
} as const;

export function createMapMarkerElement({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}): HTMLButtonElement {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "map-marker-btn";
  button.setAttribute("aria-label", label);

  const ping = document.createElement("span");
  ping.className = "map-marker-ping";
  ping.setAttribute("aria-hidden", "true");

  const dot = document.createElement("span");
  dot.className = cn("map-marker-dot", active && "map-marker-dot--active");

  button.append(ping, dot);
  button.addEventListener("click", onClick);

  return button;
}

export function setMapMarkerActive(element: HTMLButtonElement, active: boolean) {
  const dot = element.querySelector(".map-marker-dot");
  if (dot) {
    dot.classList.toggle("map-marker-dot--active", active);
  }
}

export function triggerMapPinPing(element: HTMLButtonElement) {
  const ping = element.querySelector(".map-marker-ping");
  if (!ping) return;

  ping.classList.remove("map-marker-ping--active");
  // Force reflow so repeated selections retrigger the animation.
  void (ping as HTMLElement).offsetWidth;
  ping.classList.add("map-marker-ping--active");
}
