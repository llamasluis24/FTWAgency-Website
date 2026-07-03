"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const APPS = [
  {
    name: "FreshBite",
    category: "Food & Dining",
    icon: "UtensilsCrossed",
    gradient: "from-orange-500/80 to-rose-600/80",
    rating: "4.9",
    offset: "translate-x-0 translate-y-0",
  },
  {
    name: "CrewDispatch",
    category: "Field Service",
    icon: "HardHat",
    gradient: "from-amber-500/80 to-yellow-600/80",
    rating: "4.8",
    offset: "translate-x-8 translate-y-6",
  },
  {
    name: "FitTrack Pro",
    category: "Health & Fitness",
    icon: "Heart",
    gradient: "from-emerald-500/80 to-teal-600/80",
    rating: "4.7",
    offset: "translate-x-2 translate-y-12",
  },
  {
    name: "StyleCart",
    category: "Shopping",
    icon: "ShoppingBag",
    gradient: "from-violet-500/80 to-purple-600/80",
    rating: "4.8",
    offset: "translate-x-12 translate-y-2",
  },
  {
    name: "BookEasy",
    category: "Booking",
    icon: "CalendarCheck",
    gradient: "from-sky-500/80 to-cyan-600/80",
    rating: "4.9",
    offset: "translate-x-2 translate-y-16",
  },
  {
    name: "MedConnect",
    category: "Healthcare",
    icon: "HeartPulse",
    gradient: "from-blue-500/80 to-indigo-600/80",
    rating: "4.8",
    offset: "translate-x-16 translate-y-14",
  },
] as const;

function AppTile({
  app,
  index,
  reduceMotion,
}: {
  app: (typeof APPS)[number];
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.94 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative w-[168px] sm:w-[184px]", app.offset)}
    >
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -6, 0] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }
        }
        className="rounded-2xl border border-white/10 bg-[#121821]/90 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-sm"
      >
        <div className="flex items-start gap-3">
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-inner",
              app.gradient,
            )}
          >
            <Icon name={app.icon} className="h-5 w-5 text-white" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-xs font-semibold text-heading">{app.name}</p>
            <p className="truncate text-[10px] text-muted">{app.category}</p>
            <div className="mt-1 flex items-center gap-1">
              <Icon name="Star" className="h-3 w-3 text-amber-400" />
              <span className="tnum text-[10px] font-medium text-body">{app.rating}</span>
            </div>
          </div>
        </div>
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-muted">
            App Store
          </span>
          <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[10px] font-semibold text-accent">
            GET
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function MobileAppMarketplaceBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_42%,black_88%,transparent_100%)]"
      aria-hidden
    >
      <div className="absolute -right-12 top-1/2 hidden w-[min(52rem,58vw)] -translate-y-1/2 translate-x-6 md:block lg:-right-8 lg:translate-x-8 xl:right-0 xl:translate-x-0">
        <div className="relative h-[420px] lg:h-[480px]">
          <div className="absolute left-[8%] top-[4%]">
            <AppTile app={APPS[0]} index={0} reduceMotion={!!reduceMotion} />
          </div>
          <div className="absolute left-[42%] top-[0%]">
            <AppTile app={APPS[1]} index={1} reduceMotion={!!reduceMotion} />
          </div>
          <div className="absolute left-[14%] top-[34%]">
            <AppTile app={APPS[2]} index={2} reduceMotion={!!reduceMotion} />
          </div>
          <div className="absolute left-[48%] top-[28%]">
            <AppTile app={APPS[3]} index={3} reduceMotion={!!reduceMotion} />
          </div>
          <div className="absolute left-[18%] top-[58%]">
            <AppTile app={APPS[4]} index={4} reduceMotion={!!reduceMotion} />
          </div>
          <div className="absolute left-[52%] top-[54%]">
            <AppTile app={APPS[5]} index={5} reduceMotion={!!reduceMotion} />
          </div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-[28%] top-[22%] h-32 w-32 rounded-full bg-accent/20 blur-3xl"
          />
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-[8%] right-[12%] h-40 w-40 rounded-full bg-violet-500/20 blur-3xl"
          />
        </div>
      </div>
    </div>
  );
}
