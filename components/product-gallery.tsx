"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ProductImage } from "@/lib/products";

export function ProductGallery({ images, productName }: { images: ProductImage[]; productName: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const touchStartX = useRef(0);
  const image = images[activeIndex];

  if (!image) {
    return <div className="gallery-stage"><div className="gallery-fallback">Product images will be added soon.</div></div>;
  }

  const move = (offset: number) => {
    setActiveIndex((index) => (index + offset + images.length) % images.length);
    setLoaded(false);
    setFailed(false);
  };

  return (
    <div className="gallery" aria-label={`${productName} image gallery`}>
      <div
        className="gallery-stage"
        onTouchStart={(event) => { touchStartX.current = event.changedTouches[0]?.screenX ?? 0; }}
        onTouchEnd={(event) => {
          const delta = (event.changedTouches[0]?.screenX ?? touchStartX.current) - touchStartX.current;
          if (Math.abs(delta) > 48 && images.length > 1) move(delta > 0 ? -1 : 1);
        }}
      >
        {failed ? (
          <div className="gallery-fallback" role="img" aria-label={`Image unavailable: ${image.alt}`}>Image unavailable</div>
        ) : (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={1200}
            height={900}
            sizes="(max-width: 680px) 100vw, 55vw"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            style={{ opacity: loaded ? 1 : 0, transition: "opacity .2s ease" }}
          />
        )}
        {!loaded && !failed && <span className="gallery-fallback" aria-hidden="true">Loading image…</span>}
      </div>
      {images.length > 1 && (
        <div className="gallery-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous image">←</button>
          <span className="gallery-count" aria-live="polite">Image {activeIndex + 1} of {images.length}</span>
          <button type="button" onClick={() => move(1)} aria-label="Next image">→</button>
        </div>
      )}
    </div>
  );
}