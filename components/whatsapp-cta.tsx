import { getWhatsappUrl, site } from "@/lib/site";

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
  const href = getWhatsappUrl(message);
  if (!href) return <span className={`${className} whatsapp-unavailable`} aria-disabled="true">WhatsApp contact unavailable</span>;

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {label}<span aria-hidden="true">↗</span>
    </a>
  );
}