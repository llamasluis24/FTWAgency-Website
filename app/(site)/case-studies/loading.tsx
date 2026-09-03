/** Shown instantly when navigating into case study routes. */
export default function CaseStudiesLoading() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden bg-white/5"
      aria-hidden
    >
      <div className="h-full w-1/3 animate-[loading-bar_0.9s_ease-in-out_infinite] bg-accent shadow-[0_0_12px_rgba(0,212,255,0.6)]" />
    </div>
  );
}
