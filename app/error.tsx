"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="page-content shell">
      <div className="error-panel">
        <p className="eyebrow">Something went wrong</p>
        <h1>We couldn&apos;t load this page.</h1>
        <p className="body-copy">Please try again. If the problem continues, come back a little later.</p>
        <button className="button-link" type="button" onClick={() => reset()}>Try again <span aria-hidden="true">↻</span></button>
      </div>
    </section>
  );
}