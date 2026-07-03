"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AccentText } from "@/components/ui/AccentText";
import { Container, Section } from "@/components/layout/Section";
import type { AboutProject } from "@/content/about";

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectCard({ project, index }: { project: AboutProject; index: number }) {
  const reduceMotion = useReducedMotion();

  const content = (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(0,212,255,0.08),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between gap-4">
        <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
          {project.tag}
        </span>
        {project.href && (
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            strokeWidth={2}
          />
        )}
      </div>
      <h3 className="relative mt-6 font-display text-2xl font-semibold text-heading transition-colors group-hover:text-accent md:text-[1.65rem]">
        {project.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-body md:text-base">
        {project.description}
      </p>
    </>
  );

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
    >
      {project.href ? (
        <Link
          href={project.href}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(0,212,255,0.08)]"
        >
          {content}
        </Link>
      ) : (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface p-8">
          {content}
        </div>
      )}
    </motion.div>
  );
}

export function AboutBuilding({
  eyebrow,
  title,
  lede,
  projects,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  projects: AboutProject[];
}) {
  return (
    <Section>
      <Container>
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-3xl font-semibold md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            <AccentText text={title} />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">{lede}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
