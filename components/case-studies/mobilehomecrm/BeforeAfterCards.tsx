"use client";

import {
  Calculator,
  Camera,
  FileText,
  Phone,
  Table,
  Zap,
  Calendar,
  CheckCircle2,
  Database,
  PenLine,
} from "lucide-react";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import {
  mobilehomecrmOperationalAfter,
  mobilehomecrmOperationalBefore,
} from "@/content/case-studies/mobilehomecrm-cal-star";

const BEFORE_ITEMS = [
  { icon: FileText, label: mobilehomecrmOperationalBefore[0] },
  { icon: Calculator, label: mobilehomecrmOperationalBefore[1] },
  { icon: Phone, label: mobilehomecrmOperationalBefore[2] },
  { icon: Table, label: mobilehomecrmOperationalBefore[3] },
  { icon: Camera, label: mobilehomecrmOperationalBefore[4] },
  { icon: PenLine, label: mobilehomecrmOperationalBefore[5] },
] as const;

const AFTER_ITEMS = [
  { icon: Zap, label: mobilehomecrmOperationalAfter[0] },
  { icon: Database, label: mobilehomecrmOperationalAfter[1] },
  { icon: CheckCircle2, label: mobilehomecrmOperationalAfter[2] },
  { icon: Calendar, label: mobilehomecrmOperationalAfter[3] },
  { icon: Camera, label: mobilehomecrmOperationalAfter[4] },
  { icon: PenLine, label: mobilehomecrmOperationalAfter[5] },
] as const;

function ComparisonCard({
  variant,
  items,
}: {
  variant: "before" | "after";
  items: readonly { icon: typeof FileText; label: string }[];
}) {
  const isAfter = variant === "after";

  return (
    <div
      className={
        isAfter
          ? "card-surface overflow-hidden border-success/25 shadow-[0_0_40px_rgba(46,212,122,0.1)]"
          : "card-surface overflow-hidden border-red-500/25 shadow-[0_0_40px_rgba(239,68,68,0.08)]"
      }
    >
      <div
        className={
          isAfter
            ? "border-b border-success/20 bg-success/5 px-5 py-3"
            : "border-b border-red-500/15 bg-red-500/[0.06] px-5 py-3"
        }
      >
        <p className={`eyebrow ${isAfter ? "text-success" : "text-red-400"}`}>
          {isAfter ? "After" : "Before"}
        </p>
        <p
          className={`mt-1 text-lg font-semibold ${isAfter ? "text-success" : "text-red-400"}`}
        >
          {isAfter ? "Cal Star Today" : "Cal Star's Manual Process"}
        </p>
      </div>
      <div className="grid gap-2 p-4 sm:grid-cols-2">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className={
              isAfter
                ? "flex items-center gap-3 rounded-xl border border-success/10 bg-success/[0.04] p-3"
                : "flex items-center gap-3 rounded-xl border border-red-500/25 bg-red-500/[0.06] p-3"
            }
          >
            <span
              className={
                isAfter
                  ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-success/15"
                  : "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/15"
              }
            >
              <Icon
                className={isAfter ? "h-4 w-4 text-success" : "h-4 w-4 text-red-500"}
                strokeWidth={1.75}
              />
            </span>
            <span
              className={`text-sm ${isAfter ? "text-success/90" : "text-red-400/90"}`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BeforeAfterCards() {
  return (
    <RevealStagger className="grid gap-6 lg:grid-cols-2">
      <RevealItem>
        <ComparisonCard variant="before" items={BEFORE_ITEMS} />
      </RevealItem>
      <RevealItem>
        <ComparisonCard variant="after" items={AFTER_ITEMS} />
      </RevealItem>
    </RevealStagger>
  );
}
