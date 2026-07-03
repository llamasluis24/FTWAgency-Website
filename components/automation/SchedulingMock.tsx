"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BellRing, CalendarCheck, Check } from "lucide-react";
import type { SchedulingSlot } from "@/content/automation-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SchedulingMock({
  slots,
  selectedSlot,
}: {
  slots: SchedulingSlot[];
  selectedSlot: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(reduceMotion ? 3 : 0);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      setPhase(3);
      return;
    }

    setPhase(0);
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [isInView, reduceMotion]);

  return (
    <div ref={ref} className="grid w-full gap-4 sm:grid-cols-2">
      {/* Calendar */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
          <CalendarCheck className="h-4 w-4 text-accent" />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Book a Strategy Call
            </p>
            <p className="font-display text-sm font-semibold text-slate-800">Thursday, Jun 12</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {slots.map((slot) => {
            const isSelected = slot.time === selectedSlot && phase >= 1;
            return (
              <motion.button
                key={slot.time}
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? {
                        opacity: slot.available ? 1 : 0.4,
                        scale: isSelected ? 1.02 : 1,
                      }
                    : {}
                }
                transition={{ duration: 0.3, ease: EASE }}
                className={cn(
                  "rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors",
                  !slot.available && "cursor-not-allowed line-through",
                  isSelected
                    ? "border-accent bg-accent/10 text-accent ring-2 ring-accent/30"
                    : slot.available
                      ? "border-slate-200 bg-slate-50 text-slate-700 hover:border-accent/30"
                      : "border-slate-100 bg-slate-50 text-slate-400",
                )}
              >
                {slot.time}
              </motion.button>
            );
          })}
        </div>

        {phase >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 ring-1 ring-emerald-200"
          >
            <Check className="h-4 w-4 text-emerald-600" />
            <span className="text-xs font-medium text-emerald-700">
              {selectedSlot} confirmed · Added to calendar
            </span>
          </motion.div>
        )}
      </div>

      {/* Reminders stack */}
      <div className="space-y-3">
        {[
          {
            label: "Confirmation",
            text: "Your strategy call is booked for Thu at 2:00 PM. Reply C to confirm.",
            show: phase >= 2,
            tone: "accent",
          },
          {
            label: "24-hr Reminder",
            text: "Reminder: Your FTW strategy call is tomorrow at 2:00 PM.",
            show: phase >= 3,
            tone: "slate",
          },
          {
            label: "1-hr Reminder",
            text: "Your call starts in 1 hour. Join link: ftw.agency/meet",
            show: phase >= 3,
            tone: "slate",
          },
        ].map((reminder) => (
          <motion.div
            key={reminder.label}
            initial={{ opacity: 0, x: 16 }}
            animate={reminder.show ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-xl border border-slate-200 bg-white p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <BellRing
                className={cn(
                  "h-3.5 w-3.5",
                  reminder.tone === "accent" ? "text-accent" : "text-slate-400",
                )}
              />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                {reminder.label}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">{reminder.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
