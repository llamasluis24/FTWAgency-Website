import { cn } from "@/lib/utils";
import type { AioLlmSlide } from "@/content/aio-demo";

export function PlatformLogo({
  theme,
  className,
}: {
  theme: AioLlmSlide["theme"];
  className?: string;
}) {
  const base = cn("flex shrink-0 items-center justify-center rounded-lg font-bold", className);

  switch (theme) {
    case "chatgpt":
      return (
        <span className={cn(base, "bg-[#10a37f]/15 text-[#10a37f]")}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .742 7.097 5.98 5.98 0 0 0 .511 4.911 6.051 6.051 0 0 0 6.515 2.899A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.045l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.582a4.504 4.504 0 0 1-4.494 4.502zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.168a.077.077 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.782 2.759a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.499 2.607 1.5v2.998l-2.597 1.5-2.607-1.5z" />
          </svg>
        </span>
      );
    case "gemini":
      return (
        <span className={cn(base, "bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400")}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </span>
      );
    case "claude":
      return (
        <span className={cn(base, "bg-[#d97757]/15 font-display text-sm text-[#d97757]")}>A</span>
      );
    case "perplexity":
      return (
        <span className={cn(base, "bg-[#20b8cd]/15 font-display text-sm text-[#20b8cd]")}>P</span>
      );
    case "copilot":
      return (
        <span className={cn(base, "bg-[#0078d4]/15 font-display text-sm text-[#0078d4]")}>C</span>
      );
    case "grok":
      return (
        <span className={cn(base, "bg-white/10 font-display text-sm text-[#e7e9ea]")}>G</span>
      );
  }
}
