export default function Loading() {
  return (
    <section className="page-content shell" aria-label="Loading content" aria-busy="true">
      <div className="loading-grid">
        <div className="loading-card" />
        <div className="loading-card" />
        <div className="loading-card" />
      </div>
    </section>
  );
}