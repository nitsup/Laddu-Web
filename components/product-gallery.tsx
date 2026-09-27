"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ProductImage } from "@/lib/products";

export function ProductGallery({ images, productName }: { images: ProductImage[]; productName: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const touchStartX = useRef(0);
  const image = images[activeIndex];

  if (!image) {
    return <div className="gallery-stage"><div className="gallery-fallback">Product photo unavailable</div></div>;
  }

  const move = (offset: number) => {
    setActiveIndex((index) => (index + offset + images.length) % images.length);
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
          <div className="gallery-fallback" role="img" aria-label={`Product photo unavailable: ${image.alt}`}>Product photo unavailable</div>
        ) : (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={768}
            height={1367}
            sizes="(max-width: 680px) 100vw, 50vw"
            preload={activeIndex === 0}
            onError={() => setFailed(true)}
          />
        )}
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