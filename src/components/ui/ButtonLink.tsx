import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "accent" | "dark" | "ghost" | "light";
  className?: string;
};

const variants = {
  accent: "bg-accent text-white hover:bg-accent-hover",
  dark: "bg-dark text-on-dark hover:bg-dark-elevated",
  ghost: "border border-border bg-surface text-ink hover:bg-white",
  light: "border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/18",
};

export function ButtonLink({
  href,
  children,
  variant = "accent",
  className = "",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
