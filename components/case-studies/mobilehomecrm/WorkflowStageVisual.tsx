"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bell,
  Calendar,
  Camera,
  CheckCircle2,
  Clock,
  PenLine,
  User,
} from "lucide-react";
import type { WorkflowStageId } from "@/content/case-studies/mobilehomecrm-cal-star";
import { cn } from "@/lib/utils";
import { ProductFrame } from "./ProductFrame";

function MockLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500",
        className,
      )}
    >
      {children}
    </span>
  );
}

function StageChrome({
  title,
  subtitle,
  badge,
  children,
}: {
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[280px] flex-col p-4 md:min-h-[300px] md:p-5">
      <div className="mb-4 flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-800">{title}</p>
          {subtitle ? (
            <p className="mt-0.5 truncate text-[11px] text-slate-400">{subtitle}</p>
          ) : null}
        </div>
        {badge}
      </div>
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}

function LeadCaptureMock() {
  const leads = [
    {
      name: "Maria Gonzalez",
      service: "Mobile Home Skirting",
      status: "New",
      rep: "J. Rivera",
      followUp: "Call today",
    },
    {
      name: "Robert Chen",
      service: "Roof Replacement",
      status: "Follow-up",
      rep: "S. Martinez",
      followUp: "Tomorrow",
    },
    {
      name: "Linda Park",
      service: "Deck Addition",
      status: "Qualified",
      rep: "J. Rivera",
      followUp: "Estimate sent",
    },
  ];
  const [selected, setSelected] = useState(0);

  return (
    <StageChrome
      title="Lead Pipeline"
      subtitle="Cal Star Mobile Home Construction"
      badge={<MockLabel className="bg-cyan-50 text-cyan-700">12 Active</MockLabel>}
    >
      <div className="space-y-2">
        {leads.map((lead, index) => {
          const isActive = selected === index;
          return (
            <button
              key={lead.name}
              type="button"
              onClick={() => setSelected(index)}
              className={cn(
                "w-full rounded-xl border px-3 py-2.5 text-left transition-colors",
                isActive
                  ? "border-cyan-200 bg-cyan-50/70"
                  : "border-slate-200 bg-white hover:bg-slate-50",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {lead.name}
                  </p>
                  <p className="truncate text-[11px] text-slate-500">{lead.service}</p>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                    isActive
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-100 text-slate-600",
                  )}
                >
                  {lead.status}
                </span>
              </div>
              <div className="mt-2 flex gap-3 text-[10px] text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <User className="h-3 w-3" /> {lead.rep}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {lead.followUp}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </StageChrome>
  );
}

function EstimateBuilderMock() {
  const lines = [
    { item: "Vinyl skirting — 120 LF", price: "$4,800" },
    { item: "Installation labor", price: "$2,400" },
    { item: "Trim & fasteners", price: "$380" },
    { item: "Permit fee", price: "$250" },
  ];

  return (
    <StageChrome
      title="Field Estimate"
      subtitle="Maria Gonzalez · Skirting"
      badge={<MockLabel>Draft</MockLabel>}
    >
      <div className="space-y-2">
        {lines.map((line) => (
          <div
            key={line.item}
            className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2"
          >
            <span className="truncate text-[12px] text-slate-600">{line.item}</span>
            <span className="shrink-0 text-[12px] font-semibold text-slate-800">
              {line.price}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-slate-400">Total</p>
          <p className="text-lg font-bold text-slate-800">$7,830</p>
        </div>
        <span className="rounded-lg bg-cyan-500 px-3.5 py-2 text-[11px] font-bold text-white">
          Generate Proposal
        </span>
      </div>
    </StageChrome>
  );
}

function ProposalDeliveryMock() {
  const photos = [
    {
      src: "/showcases/software/cal-star/proposal-skirting-corner.png",
      alt: "Vinyl skirting corner detail",
    },
    {
      src: "/showcases/software/cal-star/proposal-mobile-home-exterior.png",
      alt: "Mobile home exterior with skirting",
    },
  ] as const;

  return (
    <StageChrome
      title="Customer Proposal"
      subtitle="Maria Gonzalez · Mobile Home Skirting"
      badge={<MockLabel className="bg-emerald-50 text-emerald-700">Ready</MockLabel>}
    >
      <p className="mb-3 text-[12px] leading-relaxed text-slate-600">
        Remove damaged skirting, install vinyl panel system with ventilation, finish trim,
        and haul debris.
      </p>
      <div className="mb-3 grid grid-cols-2 gap-2">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[5/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
        <div>
          <p className="text-[10px] text-slate-400">Total investment</p>
          <p className="text-base font-bold text-slate-800">$7,830</p>
        </div>
        <span className="rounded-lg bg-emerald-500 px-3.5 py-2 text-[11px] font-bold text-white">
          Accept Proposal
        </span>
      </div>
    </StageChrome>
  );
}

function ESignatureMock() {
  return (
    <StageChrome
      title="Digital Approval"
      subtitle="Proposal · $7,830"
      badge={
        <MockLabel className="bg-emerald-50 text-emerald-700">Signed</MockLabel>
      }
    >
      <div className="mb-3 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
        <div>
          <p className="text-sm font-semibold text-emerald-800">Proposal accepted</p>
          <p className="text-[10px] text-emerald-600">Jun 12, 2025 · 2:34 PM</p>
        </div>
      </div>
      <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center">
        <PenLine className="mx-auto h-5 w-5 text-slate-300" />
        <p className="mt-2 font-serif text-2xl italic text-slate-600">M. Gonzalez</p>
        <p className="mt-1 text-[10px] text-slate-400">Digital signature captured</p>
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-lg bg-cyan-50 px-3 py-2 text-[11px] text-cyan-800">
        <Bell className="h-3.5 w-3.5 shrink-0" />
        Next step: schedule installation crew
      </div>
    </StageChrome>
  );
}

function SchedulingMock() {
  const days: {
    label: string;
    jobs: { title: string; time: string; active?: boolean }[];
  }[] = [
    { label: "Mon", jobs: [{ title: "Chen — Roof", time: "8:00a" }] },
    {
      label: "Tue",
      jobs: [{ title: "Gonzalez — Skirting", time: "9:30a", active: true }],
    },
    { label: "Wed", jobs: [] },
    { label: "Thu", jobs: [{ title: "Park — Deck", time: "7:00a" }] },
    { label: "Fri", jobs: [] },
  ];

  return (
    <StageChrome
      title="Crew Schedule"
      subtitle="Week of Jun 16"
      badge={<MockLabel className="bg-violet-50 text-violet-700">Team B</MockLabel>}
    >
      <div className="grid flex-1 grid-cols-5 gap-1.5">
        {days.map((day) => (
          <div key={day.label} className="flex min-h-0 flex-col">
            <div
              className={cn(
                "mb-1.5 rounded-md py-1 text-center text-[10px] font-semibold",
                day.jobs.some((j) => j.active)
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-100 text-slate-500",
              )}
            >
              {day.label}
            </div>
            <div className="flex flex-1 flex-col gap-1">
              {day.jobs.length === 0 ? (
                <div className="flex-1 rounded-md border border-dashed border-slate-200 bg-slate-50/60" />
              ) : (
                day.jobs.map((job) => (
                  <div
                    key={job.title}
                    className={cn(
                      "rounded-md border px-1.5 py-1.5",
                      job.active
                        ? "border-cyan-200 bg-cyan-50"
                        : "border-slate-200 bg-white",
                    )}
                  >
                    <p className="text-[9px] font-semibold leading-tight text-slate-700">
                      {job.title}
                    </p>
                    <p className="mt-0.5 text-[9px] text-slate-400">{job.time}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500">
        <Calendar className="h-3.5 w-3.5" />
        Installer assigned · SMS reminder queued
      </div>
    </StageChrome>
  );
}

function FieldOperationsMock() {
  return (
    <StageChrome
      title="Job Documentation"
      subtitle="Gonzalez · Skirting · #CS-2847"
      badge={<MockLabel className="bg-amber-50 text-amber-700">75%</MockLabel>}
    >
      <div className="mb-3 grid grid-cols-2 gap-2">
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Before
          </p>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <Image
              src="/showcases/software/cal-star/job-before-damaged-skirting.png"
              alt="Damaged skirting before replacement"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        </div>
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            After
          </p>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-emerald-200 bg-emerald-50">
            <Image
              src="/showcases/software/cal-star/job-after-skirting-corner.png"
              alt="Completed vinyl skirting after installation"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        {["Remove old skirting", "Install vinyl panels", "Final inspection"].map(
          (item, i) => (
            <div key={item} className="flex items-center gap-2 text-[11px]">
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full",
                  i < 2 ? "bg-emerald-500 text-white" : "border border-slate-300",
                )}
              >
                {i < 2 ? <CheckCircle2 className="h-2.5 w-2.5" /> : null}
              </span>
              <span className={i < 2 ? "text-slate-400 line-through" : "text-slate-700"}>
                {item}
              </span>
            </div>
          ),
        )}
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-[10px] text-slate-500">
        <Camera className="h-3.5 w-3.5" />
        Customer approved trim color on-site
      </div>
    </StageChrome>
  );
}

function OwnerDashboardMock() {
  const stats = [
    { label: "Leads", value: "12", tone: "text-cyan-600" },
    { label: "Proposals", value: "8", tone: "text-violet-600" },
    { label: "Closed", value: "5", tone: "text-emerald-600" },
  ];
  const bars = [
    { label: "Jan", h: "35%" },
    { label: "Feb", h: "48%" },
    { label: "Mar", h: "42%" },
    { label: "Apr", h: "68%" },
    { label: "May", h: "55%" },
    { label: "Jun", h: "82%" },
  ];

  return (
    <StageChrome
      title="Sales Dashboard"
      subtitle="Pipeline overview · This month"
      badge={<MockLabel className="bg-cyan-50 text-cyan-700">Live</MockLabel>}
    >
      <div className="mb-4 grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
          >
            <p className="text-[10px] font-medium text-slate-400">{stat.label}</p>
            <p className={cn("mt-0.5 text-xl font-bold", stat.tone)}>{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-xl border border-slate-200 bg-white p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[11px] font-semibold text-slate-700">Closed jobs</p>
          <p className="text-[10px] text-slate-400">Last 6 months</p>
        </div>
        <div className="flex h-24 items-end gap-1.5">
          {bars.map((bar) => (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-sm bg-cyan-500/80"
                style={{ height: bar.h }}
              />
              <span className="text-[9px] text-slate-400">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </StageChrome>
  );
}

const STAGE_TITLES: Record<WorkflowStageId, string> = {
  "lead-capture": "Cal Star — Lead Pipeline",
  "estimate-builder": "Cal Star — Field Estimates",
  "proposal-delivery": "Cal Star — Customer Proposals",
  "e-signatures": "Cal Star — Digital Approvals",
  scheduling: "Cal Star — Crew Schedule",
  "field-operations": "Cal Star — Job Documentation",
  "owner-dashboard": "Cal Star — Sales Dashboard",
};

export function WorkflowStageVisual({
  stageId,
  active = false,
}: {
  stageId: WorkflowStageId;
  active?: boolean;
}) {
  const mocks: Record<WorkflowStageId, React.ReactNode> = {
    "lead-capture": <LeadCaptureMock />,
    "estimate-builder": <EstimateBuilderMock />,
    "proposal-delivery": <ProposalDeliveryMock />,
    "e-signatures": <ESignatureMock />,
    scheduling: <SchedulingMock />,
    "field-operations": <FieldOperationsMock />,
    "owner-dashboard": <OwnerDashboardMock />,
  };

  return (
    <ProductFrame title={STAGE_TITLES[stageId]} active={active}>
      {mocks[stageId]}
    </ProductFrame>
  );
}
