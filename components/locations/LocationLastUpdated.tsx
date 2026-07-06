import { formatLastUpdated, getLocationLastModified } from "@/lib/publish-meta";
import type { Location } from "@/lib/schemas";

export function LocationLastUpdated({ location }: { location: Location }) {
  const iso = getLocationLastModified(location);
  return (
    <p className="text-xs text-muted">
      Last updated{" "}
      <time dateTime={iso}>{formatLastUpdated(iso)}</time>
    </p>
  );
}
