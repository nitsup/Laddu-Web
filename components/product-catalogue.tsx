"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductSearch } from "@/components/product-search";
import type { Product } from "@/lib/products";

export function ProductCatalogue({ products, initialQuery = "" }: { products: Product[]; initialQuery?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matchingProducts = products.filter((product) =>
    [product.name, product.summary, ...product.description]
      .join(" ")
      .toLocaleLowerCase()
      .includes(normalizedQuery),
  );

  return (
    <>
      <ProductSearch id="catalogue-search" value={query} onChange={setQuery} />
      <p className="catalogue-result-count" role="status">
        {query.trim() ? `Search results for "${query.trim()}" · ` : ""}
        {matchingProducts.length === 1 ? "1 product" : `${matchingProducts.length} products`}
      </p>
      {matchingProducts.length ? (
        <div className="product-grid">
          {matchingProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      ) : (
        <div className="empty-state">
          <div>
            <h2>No products found.</h2>
            <p>Try another product name or search term.</p>
            <button className="text-link search-clear" type="button" onClick={() => { setQuery(""); router.push("/products"); }}>Clear search</button>
          </div>
        </div>
      )}
    </>
  );
}
