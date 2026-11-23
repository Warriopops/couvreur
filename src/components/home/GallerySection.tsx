"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryItems } from "@/content/gallery";

export function GallerySection() {
  const [active, setActive] = useState(0);
  const current = galleryItems[active];

  return (
    <section className="section-padding border-y border-border/60 bg-surface text-ink">
      <div className="shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Nos chantiers en images
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone">
              Un aperçu de nos interventions toiture, entretien et extérieur.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 72rem"
              priority={active === 0}
            />
          </div>
          <div className="grid gap-4 border-t border-border p-5 sm:grid-cols-[1fr_auto] sm:items-end sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {current.category}
              </p>
              <h3 className="mt-2 text-2xl font-medium text-ink">{current.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">
                {current.description}
              </p>
              <p className="mt-2 text-sm text-stone">{current.place}</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-xl border border-border px-3 py-2 text-sm font-medium text-ink hover:bg-light"
                onClick={() =>
                  setActive((value) => (value - 1 + galleryItems.length) % galleryItems.length)
                }
                aria-label="Photo précédente"
              >
                ←
              </button>
              <button
                type="button"
                className="rounded-xl border border-border px-3 py-2 text-sm font-medium text-ink hover:bg-light"
                onClick={() => setActive((value) => (value + 1) % galleryItems.length)}
                aria-label="Photo suivante"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <nav aria-label="Sélectionner un chantier" className="mt-4 flex flex-wrap gap-2">
          {galleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                index === active
                  ? "bg-dark text-white"
                  : "bg-white text-stone hover:bg-light"
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
