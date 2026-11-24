import { reviews, reviewsSummary } from "@/content/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5 text-accent" aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export function ReviewsSection() {
  return (
    <section className="section-padding border-y border-border/60 bg-light text-ink">
      <div className="shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Avis clients</h2>
            <p className="mt-4 text-base leading-relaxed text-stone">
              Retours de clients sur {reviewsSummary.sourceName}, autour de Libourne, Coutras
              et le Libournais.
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-3xl font-medium text-ink">
              {reviewsSummary.rating}
              <span className="text-lg text-stone">/5</span>
            </p>
            <a
              href={reviewsSummary.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              {reviewsSummary.countLabel}
            </a>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <li
              key={`${review.name}-${review.date}`}
              className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                  {review.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-medium text-ink">{review.name}</p>
                    <Stars rating={review.rating} />
                  </div>
                  <p className="text-xs text-stone">
                    {review.place}, {review.date}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone">“{review.text}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {review.tag}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-stone">
          Vous avez fait appel à nous ?{" "}
          <a
            href={reviewsSummary.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:underline"
          >
            Voir tous les avis sur {reviewsSummary.sourceName}
          </a>
        </p>
      </div>
    </section>
  );
}
