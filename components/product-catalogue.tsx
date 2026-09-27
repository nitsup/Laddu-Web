"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/products";

export function ProductCatalogue({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matchingProducts = products.filter((product) =>
    [product.name, product.summary, ...product.description]
      .join(" ")
      .toLocaleLowerCase()
      .includes(normalizedQuery),
  );

  return (
    <>
      <div className="catalogue-search">
        <label htmlFor="catalogue-search">Search the catalogue</label>
        <input
          id="catalogue-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “dry fruit”"
        />
      </div>
      <p className="catalogue-result-count" role="status">
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
          </div>
        </div>
      )}
    </>
  );
}
