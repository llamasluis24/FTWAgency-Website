"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProductFrame({
  children,
  title,
  className,
  active = false,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  active?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-[#0B0F14] p-1 shadow-[0_0_60px_rgba(0,212,255,0.08)] transition-[border-color,box-shadow] duration-500",
        active
          ? "border-accent/40 shadow-[0_0_48px_rgba(0,212,255,0.18)]"
          : "border-accent/15 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(0,212,255,0.14)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#121821] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/50" />
        {title && <span className="ml-2 text-xs font-medium text-muted">{title}</span>}
      </div>
      <div className="overflow-hidden rounded-b-[14px] bg-white">{children}</div>
    </motion.div>
  );
}
