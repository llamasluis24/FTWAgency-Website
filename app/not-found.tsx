import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-radial-accent flex min-h-svh flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="text-4xl font-semibold md:text-6xl">
        This page didn&apos;t <span className="accent-serif">convert</span>.
      </h1>
      <p className="mt-5 max-w-md text-lg text-body">
        The page you&apos;re looking for doesn&apos;t exist — but your growth
        system can start right here.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" size="lg" showArrow>
          Back to Home
        </Button>
        <Button href="/contact" variant="ghost" size="lg">
          Schedule Strategy Call
        </Button>
      </div>
      <Link
        href="/portfolio"
        className="mt-6 text-sm text-muted underline-offset-4 hover:text-accent hover:underline"
      >
        Or browse the portfolio
      </Link>
    </div>
  );
}
