"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";

const links = [
  { href: "/services/pose-toiture", label: "Pose" },
  { href: "/services/entretien-toiture", label: "Entretien" },
  { href: "/services/nettoyage-toiture", label: "Nettoyage" },
  { href: "/services/taille-haies", label: "Haies" },
  { href: "/services/terrassement", label: "Terrassement" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/95 text-white backdrop-blur-md">
      <div className="shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-6">
        <div className="min-w-0">
          <Logo variant="light" compact />
        </div>

        <nav
          className="hidden items-center justify-center gap-4 xl:gap-5 lg:flex"
          aria-label="Navigation principale"
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-sm transition ${
                  active ? "font-semibold text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover sm:px-4"
            aria-label={`Appeler le ${site.phone}`}
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{site.phone}</span>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Navigation mobile"
          className="border-t border-white/10 bg-dark lg:hidden"
        >
          <ul className="shell flex flex-col gap-1 py-3">
            <li>
              <Link
                href="/"
                className="block rounded-lg px-3 py-3 text-sm font-medium text-on-dark transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                Accueil
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-on-dark transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label === "Pose"
                    ? "Pose de toiture"
                    : link.label === "Haies"
                      ? "Taille de haies"
                      : link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Demander un devis gratuit
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M7.5 3.5h2.2l1.2 4.2-1.7 1.1a12.5 12.5 0 0 0 5.5 5.5l1.1-1.7 4.2 1.2v2.2A2 2 0 0 1 18 18.2 14.7 14.7 0 0 1 5.8 6a2 2 0 0 1 1.7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
