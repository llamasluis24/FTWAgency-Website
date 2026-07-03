"use client";

import {
  BarChart3,
  Calendar,
  Camera,
  ClipboardList,
  Database,
  FileText,
  MessageSquare,
  PenLine,
  Users,
  Workflow,
} from "lucide-react";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { mobilehomecrmSystemFeatures } from "@/content/case-studies/mobilehomecrm-cal-star";

const FEATURE_ICONS = [
  ClipboardList,
  FileText,
  FileText,
  PenLine,
  MessageSquare,
  Calendar,
  Users,
  Camera,
  FileText,
  Workflow,
  Database,
  BarChart3,
] as const;

export function SystemFeaturesGrid() {
  return (
    <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mobilehomecrmSystemFeatures.map((feature, i) => {
        const Icon = FEATURE_ICONS[i] ?? ClipboardList;
        return (
          <RevealItem key={feature}>
            <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#121821] p-4 transition-colors hover:border-accent/20 hover:shadow-[0_0_24px_rgba(0,212,255,0.08)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-heading">{feature}</span>
            </div>
          </RevealItem>
        );
      })}
    </RevealStagger>
  );
}
