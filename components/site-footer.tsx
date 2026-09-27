import Link from "next/link";
import Image from "next/image";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { site } from "@/lib/site";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ & delivery" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true">
                <Image src="/images/t-nutrist-logo.webp" alt="" fill sizes="38px" />
              </span>
              <span className="brand-name">{site.name}</span>
            </Link>
            <p className="footer-description">{site.description}</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {links.map((link) => <Link key={link.href} href={link.href} prefetch={false}>{link.label}</Link>)}
            {site.contact.instagram && <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
            {site.contact.facebook && <a href={site.contact.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
            <WhatsappCta label="Message on WhatsApp" className="footer-whatsapp" />
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>CEO: {site.ceo}</span>
          <span>Website by <a href={`tel:${site.websiteCreator.phone}`}>{site.websiteCreator.name} · {site.websiteCreator.phone}</a></span>
        </div>
      </div>
    </footer>
  );
}