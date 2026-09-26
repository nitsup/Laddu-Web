import Link from "next/link";
import { site } from "@/lib/site";

type WhatsappCtaProps = {
  productName?: string;
  label?: string;
  className?: string;
};

export function WhatsappCta({
  productName,
  label = "Talk to us",
  className = "button-link",
}: WhatsappCtaProps) {
  const message = productName
    ? `Hi, I'm interested in ${productName}.`
    : `Hi, I'd like to know more about ${site.name}.`;
  const number = site.contact.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    const inquiry = productName ? `?product=${encodeURIComponent(productName)}` : "";
    return <Link className={className} href={`/contact${inquiry}`}>{label}<span aria-hidden="true">→</span></Link>;
  }

  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {label}<span aria-hidden="true">↗</span>
    </a>
  );
}