"use client";

import { useState } from "react";
import { faqItems } from "@/content/faq";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding border-y border-border/60 bg-light text-ink">
      <div className="shell max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
          Questions fréquentes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-stone">
          Réponses utiles avant de demander un devis pour vos travaux à Coutras, Bordeaux,
          Bergerac et dans un rayon d’environ 100 km.
        </p>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="flex gap-3">
                    <span className="text-sm font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium text-ink">{item.question}</span>
                  </span>
                  <span className="text-accent" aria-hidden>
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open ? (
                  <p className="pb-5 pl-10 text-sm leading-relaxed text-stone">{item.answer}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
