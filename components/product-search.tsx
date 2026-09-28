"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type ProductSearchProps = {
  id?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export function ProductSearch({
  id = "product-search",
  value,
  defaultValue = "",
  onChange,
}: ProductSearchProps) {
  const router = useRouter();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const query = value ?? internalValue;

  function updateValue(nextValue: string) {
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchTerm = query.trim();
    router.push(searchTerm ? `/products?q=${encodeURIComponent(searchTerm)}` : "/products");
  }

  return (
    <form className="product-search" onSubmit={handleSubmit} role="search">
      <label className="sr-only" htmlFor={id}>Search the T-NUTRIST catalogue</label>
      <span className="product-search-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>
      </span>
      <input
        id={id}
        type="search"
        value={query}
        onChange={(event) => updateValue(event.target.value)}
        placeholder="Search our laddus..."
        autoComplete="off"
      />
      <button type="submit" aria-label="Search catalogue">
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
