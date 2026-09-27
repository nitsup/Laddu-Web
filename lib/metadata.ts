import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  images?: string[];
};

export function pageMetadata({ title, description, path, images = ["/opengraph-image"] }: PageMetadataInput): Metadata {
  const socialImages = site.url ? images.map((image) => ({
    url: image.startsWith("http") ? image : absoluteUrl(image),
    alt: title,
  })) : undefined;

  return {
    title,
    description,
    ...(site.url ? { alternates: { canonical: path } } : {}),
    openGraph: {
      type: "website",
      title,
      description,
      ...(site.url ? { url: path, images: socialImages } : {}),
    },
    twitter: {
      card: site.url ? "summary_large_image" : "summary",
      title,
      description,
      ...(socialImages ? { images: socialImages } : {}),
    },
  };
}