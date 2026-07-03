"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Command, Search } from "lucide-react";
import type { PaletteItem } from "@/components/layout/nav-data";
import { cn } from "@/lib/utils";

/**
 * Cmd+K command palette: keyboard-driven navigation across every content
 * collection. Items are supplied by the server layout from the content layer.
 */
export function CommandPalette({ items }: { items: PaletteItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? items.filter((item) =>
          `${item.label} ${item.group} ${item.keywords ?? ""}`
            .toLowerCase()
            .includes(q),
        )
      : items;
    return filtered.slice(0, 12);
  }, [items, query]);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router],
  );

  // Expose a custom event so the header search button can open the palette.
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("ftw:open-palette", onOpen);
    return () => window.removeEventListener("ftw:open-palette", onOpen);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-bg/80 px-4 pt-[14vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="glass w-full max-w-xl overflow-hidden rounded-2xl shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/5 px-5 py-4">
              <Search className="h-4 w-4 text-muted" strokeWidth={2} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, results.length - 1));
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  }
                  if (e.key === "Enter" && results[active]) {
                    go(results[active].href);
                  }
                }}
                placeholder="Search services, industries, work, articles..."
                className="flex-1 bg-transparent text-sm text-heading outline-none placeholder:text-muted"
              />
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-muted">
                ESC
              </kbd>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-muted">
                  No results for &ldquo;{query}&rdquo;
                </p>
              )}
              {results.map((item, i) => (
                <button
                  key={`${item.href}-${i}`}
                  onClick={() => go(item.href)}
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-left text-sm transition-colors",
                    i === active ? "bg-accent/10 text-heading" : "text-body",
                  )}
                >
                  <span className="truncate">{item.label}</span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-muted">
                    {item.group}
                    <ArrowUpRight
                      className={cn(
                        "h-3.5 w-3.5",
                        i === active ? "text-accent" : "text-muted/50",
                      )}
                      strokeWidth={2}
                    />
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 border-t border-white/5 px-5 py-3 text-[11px] text-muted">
              <Command className="h-3 w-3" strokeWidth={2} />
              <span>Navigate with arrow keys. Press Enter to open.</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
