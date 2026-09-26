import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <div>
        <p className="eyebrow">404 · Page not found</p>
        <h1>That page isn&apos;t here.</h1>
        <p>The link may have changed, or the page may no longer be available.</p>
        <Link className="button-link" href="/">Back to the home page <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}