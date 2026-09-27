type ProductSize = { label: string; grams: number; price: number };

export function ProductPricing({ sizes, compact = false }: { sizes: ProductSize[]; compact?: boolean }) {
  return (
    <dl className={`product-pricing${compact ? " product-pricing--compact" : ""}`}>
      {sizes.map(({ label, price }) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>₹{price}</dd>
        </div>
      ))}
    </dl>
  );
}
