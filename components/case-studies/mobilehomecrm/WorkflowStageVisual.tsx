"use client";

import Image from "next/image";
import {
  Bell,
  Calendar,
  Camera,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  PenLine,
  User,
} from "lucide-react";
import type { WorkflowStageId } from "@/content/case-studies/mobilehomecrm-cal-star";
import { cn } from "@/lib/utils";
import { ProductFrame } from "./ProductFrame";

function MockLabel({ children, className }: { children: React.ReactNode; className?: string }) {
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

function LeadCaptureMock() {
  const leads = [
    {
      name: "Maria Gonzalez",
      service: "Mobile Home Skirting",
      status: "New Lead",
      rep: "J. Rivera",
      followUp: "Call today",
      notes: 2,
      photos: 3,
      accent: true,
    },
    {
      name: "Robert Chen",
      service: "Roof Replacement",
      status: "Follow-Up",
      rep: "S. Martinez",
      followUp: "Tomorrow",
      notes: 1,
      photos: 0,
      accent: false,
    },
    {
      name: "Linda Park",
      service: "Deck Addition",
      status: "Qualified",
      rep: "J. Rivera",
      followUp: "Estimate sent",
      notes: 4,
      photos: 5,
      accent: false,
    },
  ];

  return (
    <div className="p-4 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-800">Lead Pipeline</p>
          <p className="text-[10px] text-slate-400">Cal Star Mobile Home Construction</p>
        </div>
        <MockLabel className="bg-cyan-50 text-cyan-700">12 Active Leads</MockLabel>
      </div>
      <div className="space-y-2.5">
        {leads.map((lead) => (
          <div
            key={lead.name}
            className={cn(
              "rounded-xl border p-3",
              lead.accent ? "border-cyan-200 bg-cyan-50/60" : "border-slate-200 bg-slate-50/50",
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-slate-800">{lead.name}</p>
                <p className="text-xs text-slate-500">{lead.service}</p>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                  lead.accent ? "bg-cyan-500 text-white" : "bg-slate-200 text-slate-600",
                )}
              >
                {lead.status}
              </span>
            </div>
            <div className="mt-2.5 grid grid-cols-2 gap-2 text-[10px] text-slate-500">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" /> {lead.rep}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {lead.followUp}
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" /> {lead.notes} notes
              </span>
              <span className="flex items-center gap-1">
                <Camera className="h-3 w-3" /> {lead.photos} photos
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EstimateBuilderMock() {
  const lines = [
    { item: "Skirting — Vinyl Panel (120 LF)", qty: "120", price: "$4,800" },
    { item: "Labor — Installation Crew", qty: "16 hrs", price: "$2,400" },
    { item: "Materials — Trim & Fasteners", qty: "1 kit", price: "$380" },
    { item: "Permit Processing Fee", qty: "1", price: "$250" },
  ];

  return (
    <div className="relative aspect-[16/11] w-full">
      <Image
        src="/showcases/software/mobilehomecrm-hero.jpg"
        alt="Cal Star Mobile Home Construction field estimate tool"
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent p-4 pt-10 md:p-5">
        <div className="rounded-xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur-sm">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Line Items
          </p>
          <div className="space-y-1.5">
            {lines.slice(0, 2).map((line) => (
              <div key={line.item} className="flex items-center justify-between gap-2 text-[11px]">
                <span className="truncate text-slate-600">{line.item}</span>
                <span className="shrink-0 font-semibold text-slate-800">{line.price}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2">
            <span className="text-xs font-bold text-slate-800">Total — $7,830</span>
            <span className="rounded-lg bg-cyan-500 px-3 py-1.5 text-[10px] font-bold text-white">
              Generate Proposal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProposalDeliveryMock() {
  const projectPhotos = [
    {
      src: "/showcases/software/cal-star/proposal-skirting-corner.png",
      alt: "White vinyl skirting corner detail with trim on a mobile home",
      position: "object-center",
    },
    {
      src: "/showcases/software/cal-star/proposal-porch-enclosure.png",
      alt: "Enclosed porch addition with clear vinyl panels and stone chimney",
      position: "object-center",
    },
    {
      src: "/showcases/software/cal-star/proposal-mobile-home-exterior.png",
      alt: "Mobile home exterior with skirting and entry deck",
      position: "object-center",
    },
  ] as const;

  return (
    <div className="p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <p className="text-sm font-bold text-slate-800">Project Proposal</p>
          <p className="text-xs text-slate-400">Maria Gonzalez · Mobile Home Skirting</p>
        </div>
        <MockLabel>Ready to Send</MockLabel>
      </div>
      <div className="mb-4 rounded-xl bg-slate-50 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Project Scope
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">
          Remove existing damaged skirting, install new vinyl panel system with ventilation,
          complete trim work, and haul-away debris.
        </p>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {projectPhotos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={cn("object-cover", photo.position)}
              sizes="120px"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
        <div>
          <p className="text-[10px] text-slate-400">Total Investment</p>
          <p className="text-lg font-bold text-slate-800">$7,830</p>
        </div>
        <button
          type="button"
          className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-bold text-white"
        >
          Accept Proposal
        </button>
      </div>
    </div>
  );
}

function ESignatureMock() {
  return (
    <div className="p-4 md:p-6">
      <div className="mb-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5">
        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
        <div>
          <p className="text-sm font-bold text-emerald-800">Proposal Accepted</p>
          <p className="text-[10px] text-emerald-600">Signed digitally · Jun 12, 2025 · 2:34 PM</p>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 p-4">
        <p className="text-xs font-semibold text-slate-700">Maria Gonzalez</p>
        <p className="text-[10px] text-slate-400">Mobile Home Skirting — $7,830</p>
        <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-6">
          <PenLine className="mx-auto h-6 w-6 text-slate-300" />
          <p className="mt-2 text-center font-serif text-2xl italic text-slate-600">M. Gonzalez</p>
          <p className="mt-1 text-center text-[10px] text-slate-400">Digital Signature Captured</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-cyan-50 px-3 py-2 text-[11px] text-cyan-800">
        <Bell className="h-3.5 w-3.5" />
        Next step created: Schedule installation crew
      </div>
    </div>
  );
}

function SchedulingMock() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const jobs = [
    { day: 1, title: "Chen — Roof", crew: "Team A", time: "8:00 AM" },
    { day: 2, title: "Gonzalez — Skirting", crew: "Team B", time: "9:30 AM", active: true },
    { day: 4, title: "Park — Deck", crew: "Team A", time: "7:00 AM" },
  ];

  return (
    <div className="p-4 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-bold text-slate-800">Crew Schedule</p>
        <MockLabel className="bg-violet-50 text-violet-700">Week of Jun 16</MockLabel>
      </div>
      <div className="mb-3 grid grid-cols-5 gap-1">
        {days.map((day, i) => (
          <div
            key={day}
            className={cn(
              "rounded-lg py-1.5 text-center text-[10px] font-semibold",
              i === 2 ? "bg-cyan-500 text-white" : "bg-slate-100 text-slate-500",
            )}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="relative min-h-[140px] rounded-xl border border-slate-200 bg-slate-50/80 p-2">
        {jobs.map((job) => (
          <div
            key={job.title}
            className={cn(
              "absolute rounded-lg border px-2 py-1.5 text-[10px] shadow-sm",
              job.active
                ? "border-cyan-300 bg-cyan-50 left-[22%] top-[30%] w-[28%]"
                : "border-slate-200 bg-white",
              !job.active && job.day === 1 && "left-[2%] top-[20%] w-[16%]",
              !job.active && job.day === 4 && "left-[62%] top-[50%] w-[16%]",
            )}
          >
            <p className="font-semibold text-slate-700">{job.title}</p>
            <p className="text-slate-400">{job.crew} · {job.time}</p>
            {job.active && (
              <span className="mt-1 flex items-center gap-0.5 text-cyan-600">
                <MessageSquare className="h-2.5 w-2.5" /> SMS reminder sent
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500">
        <Calendar className="h-3.5 w-3.5" />
        Installer assigned · Job notes attached
      </div>
    </div>
  );
}

function FieldOperationsMock() {
  const beforePhotos = [
    {
      src: "/showcases/software/cal-star/job-before-damaged-skirting.png",
      alt: "Damaged and buckled mobile home skirting before replacement",
    },
    {
      src: "/showcases/software/cal-star/job-before-unfinished-skirting.png",
      alt: "Mobile home with unfinished wooden skirting before completion",
    },
  ] as const;

  const afterPhotos = [
    {
      src: "/showcases/software/cal-star/job-after-skirting-corner.png",
      alt: "Completed white vinyl skirting corner detail after installation",
    },
    {
      src: "/showcases/software/cal-star/job-after-mobile-home.png",
      alt: "Mobile home exterior with new skirting after installation",
    },
  ] as const;

  return (
    <div className="p-4 md:p-5">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-slate-800">Gonzalez — Skirting Install</p>
          <p className="text-[10px] text-slate-400">Job #CS-2847 · In Progress</p>
        </div>
        <MockLabel className="bg-amber-50 text-amber-700">75% Complete</MockLabel>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-2">
        <div>
          <p className="mb-1 text-[10px] font-semibold text-slate-400">Before</p>
          <div className="grid grid-cols-2 gap-1">
            {beforePhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-md border border-slate-200 bg-slate-100"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-1 text-[10px] font-semibold text-slate-400">After</p>
          <div className="grid grid-cols-2 gap-1">
            {afterPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-md border border-emerald-200 bg-emerald-50"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
        <p className="text-[10px] font-semibold text-slate-400">Internal Notes</p>
        <p className="mt-1 text-[11px] text-slate-600">
          Ventilation panels installed. Customer approved trim color on-site.
        </p>
      </div>
      <div className="mt-2 space-y-1">
        {["Remove old skirting", "Install vinyl panels", "Final inspection"].map((item, i) => (
          <div key={item} className="flex items-center gap-2 text-[10px]">
            <span
              className={cn(
                "flex h-3.5 w-3.5 items-center justify-center rounded-full",
                i < 2 ? "bg-emerald-500 text-white" : "border border-slate-300",
              )}
            >
              {i < 2 && <CheckCircle2 className="h-2.5 w-2.5" />}
            </span>
            <span className={i < 2 ? "text-slate-500 line-through" : "text-slate-700"}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OwnerDashboardMock() {
  return (
    <div className="relative aspect-[16/10] w-full">
      <Image
        src="/showcases/software/cal-star-mobilehomecrm-dashboard.jpg"
        alt="Cal Star Mobile Home Construction sales dashboard"
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-x-3 top-3 flex gap-2 md:inset-x-4 md:top-4">
        {[
          { label: "Leads", value: "12" },
          { label: "Proposals", value: "8" },
          { label: "Closed", value: "5" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-white/20 bg-[#0B0F14]/75 px-2.5 py-1.5 backdrop-blur-sm md:px-3 md:py-2"
          >
            <p className="text-[9px] text-white/60 md:text-[10px]">{stat.label}</p>
            <p className="text-sm font-bold text-white md:text-base">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
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
