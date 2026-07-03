/** Atmospheric backdrop for the About hero — centered emblem treatment. */
export function AboutHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-[#0B0F14]" />

      <div className="bg-grid absolute inset-0 opacity-35 [mask-image:radial-gradient(ellipse_90%_80%_at_50%_50%,black,transparent)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(0,212,255,0.12),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_55%,rgba(96,216,184,0.08),transparent_70%)]" />

      <div className="about-hero-glow absolute left-1/2 top-[48%] h-[min(72vw,42rem)] w-[min(72vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.1] blur-3xl" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/30 via-transparent to-[#0B0F14]/90" />

      <div className="absolute left-1/2 top-[58%] hidden h-px w-[min(60%,36rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/25 to-transparent md:block" />
    </div>
  );
}
