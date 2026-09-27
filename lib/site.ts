const configuredHost =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : undefined);

function normalizeSiteUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    const isLocalDevelopment = process.env.NODE_ENV === "development" && url.hostname === "localhost";
    if (url.protocol !== "https:" && !isLocalDevelopment) return undefined;
    if (url.username || url.password || url.search || url.hash) return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

export const site = {
  name: "T-NUTRIST",
  ceo: "Ayush Verma",
  founder: "Mr. Ayush Verma",
  vision: "Bring the authentic taste of ladoo to Indian households and revive the traditional dadi/Nani-style ladoo experience.",
  websiteCreator: { name: "Akshat Sharma", phone: "9643861602" },
  description: "Explore the T-NUTRIST laddu catalogue and contact us with product enquiries.",
  businessDescription: "T-NUTRIST was established under the guidance of Mr. Ayush Verma, CEO and founder. The company aims to provide nutrient-rich ladoos to Gen Z while reconnecting people with the traditional Indian taste of ladoo.",
  url: normalizeSiteUrl(configuredHost),
  contact: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "918076519197",
    whatsappDisplay: "80765 19197",
    phone: process.env.NEXT_PUBLIC_PHONE ?? "",
    email: process.env.NEXT_PUBLIC_EMAIL ?? "",
    location: process.env.NEXT_PUBLIC_LOCATION ?? "",
    serviceArea: process.env.NEXT_PUBLIC_SERVICE_AREA ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
} as const;

export function getWhatsappUrl(message?: string): string | undefined {
  const number = site.contact.whatsappNumber.replace(/\D/g, "");
  if (!/^\d{8,15}$/.test(number)) return undefined;

  const url = new URL(`https://wa.me/${number}`);
  if (message) url.searchParams.set("text", message);
  return url.toString();
}

export function absoluteUrl(path: string): string {
  return site.url ? new URL(path, `${site.url}/`).toString() : path;
}