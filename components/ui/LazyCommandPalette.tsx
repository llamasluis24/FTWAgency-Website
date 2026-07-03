"use client";

import dynamic from "next/dynamic";
import type { PaletteItem } from "@/components/layout/nav-data";

const CommandPalette = dynamic(
  () =>
    import("@/components/ui/CommandPalette").then((m) => ({
      default: m.CommandPalette,
    })),
  { ssr: false },
);

export function LazyCommandPalette({ items }: { items: PaletteItem[] }) {
  return <CommandPalette items={items} />;
}
