import Link from "next/link";
import { LogoMark } from "@/components/brand/LogoMark";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "light", compact = false }: LogoProps) {
  const title = variant === "light" ? "text-white" : "text-ink";
  const subtitle = variant === "light" ? "text-white/65" : "text-stone";

  return (
    <Link href="/" className="group flex min-w-0 items-center gap-2.5" aria-label={site.name}>
      <LogoMark className="h-10 w-10 shrink-0 transition duration-200 group-hover:scale-[1.04] sm:h-11 sm:w-11" />

      <span className="flex min-w-0 flex-col leading-none">
        <span className={`flex items-baseline gap-1.5 ${title}`}>
          <span className="truncate text-[15px] font-semibold tracking-tight sm:text-base">
            Couvreur
          </span>
          <span className="shrink-0 text-[15px] font-bold tracking-tight text-accent sm:text-base">
            BDX
          </span>
        </span>
        {!compact ? (
          <span
            className={`mt-1.5 truncate text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px] ${subtitle}`}
          >
            {site.tradeLine}
          </span>
        ) : (
          <span
            className={`mt-1 hidden truncate text-[10px] font-medium uppercase tracking-[0.14em] sm:block ${subtitle}`}
          >
            Toiture & extérieur
          </span>
        )}
      </span>
    </Link>
  );
}
