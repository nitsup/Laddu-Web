"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="not-found">
          <div className="error-panel">
            <p className="eyebrow">Something went wrong</p>
            <h1>This page didn&apos;t load.</h1>
            <p>Please try again. If the problem continues, come back a little later.</p>
            <button className="button-link" type="button" onClick={() => reset()}>Try again</button>
          </div>
        </main>
      </body>
    </html>
  );
}