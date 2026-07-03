"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { useIndustry } from "./IndustryContext";

/**
 * "I run a ___ business" — live-swaps the hero's floating panels and
 * example metrics to the selected industry.
 */
export function IndustrySwitcher() {
  const { presets, selected, select } = useIndustry();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative z-30 flex flex-wrap items-center gap-2 text-sm text-heading" ref={ref}>
      <span>I run a</span>
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="relative z-30 flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5 font-display text-sm font-semibold text-accent transition-all hover:border-accent/60 hover:shadow-[0_0_16px_rgba(0,212,255,0.2)]"
        >
          <Icon name={selected.icon} className="h-3.5 w-3.5" />
          {selected.title}
          <ChevronDown
            className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
            strokeWidth={2}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              className="glass absolute left-0 top-full z-50 mt-2 max-h-72 w-56 overflow-y-auto rounded-xl p-1.5 shadow-card"
            >
              {presets.map((preset) => (
                <li key={preset.slug}>
                  <button
                    onClick={() => {
                      select(preset.slug);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                      preset.slug === selected.slug
                        ? "bg-accent/10 text-accent"
                        : "text-body hover:bg-white/5 hover:text-heading",
                    )}
                  >
                    <Icon name={preset.icon} className="h-3.5 w-3.5 shrink-0" />
                    {preset.title}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <span>business</span>
    </div>
  );
}
