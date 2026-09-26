import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  images?: string[];
};

export function pageMetadata({ title, description, path, images = ["/opengraph-image"] }: PageMetadataInput): Metadata {
  const socialImages = images.map((image) => ({ url: image.startsWith("http") ? image : absoluteUrl(image) }));

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", title, description, url: path, images: socialImages },
    twitter: { card: "summary_large_image", title, description, images: socialImages.map(({ url }) => url) },
  };
}