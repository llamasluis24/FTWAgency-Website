"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { useIndustry } from "./IndustryContext";

interface TickerEvent {
  icon: string;
  text: string;
  time: string;
}

/**
 * Simulated live outcomes feed — makes the growth engine feel operational.
 * Events adapt to the selected industry.
 */
export function LiveTicker() {
  const { selected } = useIndustry();
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const events: TickerEvent[] = [
    { icon: "UserPlus", text: selected.examples.lead, time: "just now" },
    { icon: "Star", text: selected.examples.review, time: "2m ago" },
    { icon: "CalendarCheck", text: selected.examples.appointment, time: "5m ago" },
    { icon: "MessageSquare", text: "Missed call recovered by text", time: "9m ago" },
    { icon: "TrendingUp", text: "Keyword moved to position #1", time: "14m ago" },
  ];

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % events.length), 3400);
    return () => clearInterval(id);
  }, [events.length, reduceMotion]);

  const event = events[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass inline-flex h-12 items-center gap-3 overflow-hidden rounded-full py-2 pl-3 pr-5"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="flex min-w-0 items-center gap-2 text-xs text-body"
        >
          <Icon name={event.icon} className="h-3.5 w-3.5 shrink-0 text-accent" />
          <span className="max-w-56 truncate sm:max-w-72">{event.text}</span>
          <span className="shrink-0 text-muted">· {event.time}</span>
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
