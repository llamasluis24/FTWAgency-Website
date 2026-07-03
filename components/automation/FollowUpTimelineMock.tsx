"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Mail, MessageSquare } from "lucide-react";
import type { TimelineStep } from "@/content/automation-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const statusStyles = {
  sent: "border-slate-300 bg-slate-50 text-slate-500",
  opened: "border-blue-300 bg-blue-50 text-blue-600",
  replied: "border-accent/40 bg-accent/10 text-accent",
  booked: "border-emerald-300 bg-emerald-50 text-emerald-700",
};

const statusLabels = {
  sent: "Sent",
  opened: "Opened",
  replied: "Replied",
  booked: "Booked",
};

function ChannelIcon({ channel }: { channel: string }) {
  if (channel === "SMS") return <MessageSquare className="h-3.5 w-3.5" />;
  return <Mail className="h-3.5 w-3.5" />;
}

export function FollowUpTimelineMock({
  steps,
  title = "Lead Follow-Up Sequence",
  subtitle = "Active nurture",
}: {
  steps: TimelineStep[];
  title?: string;
  subtitle?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(steps.length - 1);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    setActiveIndex(-1);
    let i = 0;
    let cancelled = false;

    const advance = () => {
      if (cancelled || i >= steps.length) return;
      setActiveIndex(i);
      i += 1;
      setTimeout(advance, 700);
    };

    const t = setTimeout(advance, 300);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [isInView, steps.length, reduceMotion]);

  return (
    <div ref={ref} className="w-full">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {title}
            </p>
            <p className="mt-0.5 font-display text-sm font-semibold text-slate-800">
              {subtitle}
            </p>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            {steps.length} touchpoints
          </span>
        </div>

        <div className="relative space-y-0">
          {steps.map((step, idx) => {
            const isActive = idx <= activeIndex;
            const isLast = idx === steps.length - 1;

            return (
              <div key={`${idx}-${step.channel}-${step.action}`} className="relative flex gap-4 pb-6 last:pb-0">
                {!isLast && (
                  <motion.div
                    className="absolute left-[15px] top-8 w-0.5 bg-slate-200"
                    initial={{ height: 0 }}
                    animate={{ height: isActive && idx < activeIndex ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: EASE }}
                    style={{ maxHeight: "calc(100% - 8px)" }}
                  />
                )}

                <motion.div
                  initial={{ scale: 0.8, opacity: 0.4 }}
                  animate={
                    isActive
                      ? { scale: 1, opacity: 1, boxShadow: "0 0 0 4px rgba(0,212,255,0.15)" }
                      : { scale: 0.8, opacity: 0.4 }
                  }
                  transition={{ duration: 0.4, ease: EASE }}
                  className={cn(
                    "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2",
                    isActive && step.status === "booked"
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : isActive
                        ? "border-accent bg-accent text-[#04222b]"
                        : "border-slate-200 bg-white text-slate-300",
                  )}
                >
                  {isActive && step.status === "booked" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="text-[10px] font-bold">{idx + 1}</span>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.35, x: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="min-w-0 flex-1 rounded-lg border border-slate-100 bg-slate-50 p-3"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-xs font-bold text-slate-700">{step.day}</span>
                    <span className="flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-medium text-slate-500 ring-1 ring-slate-200">
                      <ChannelIcon channel={step.channel} />
                      {step.channel}
                    </span>
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                        statusStyles[step.status],
                      )}
                    >
                      {statusLabels[step.status]}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{step.action}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
