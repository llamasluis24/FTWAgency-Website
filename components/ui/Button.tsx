import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "link";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-all duration-300 font-display";
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };
  const variants = {
    primary:
      "bg-accent text-[#04222b] hover:shadow-[0_0_32px_rgba(0,212,255,0.45)] hover:brightness-110",
    ghost:
      "border border-white/15 text-heading hover:border-accent/50 hover:bg-accent/5 hover:text-accent",
    link: "text-accent hover:gap-3 px-0 py-0",
  };

  return (
    <Link
      href={href}
      className={cn(base, variant !== "link" && sizes[size], variants[variant], className)}
    >
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}
