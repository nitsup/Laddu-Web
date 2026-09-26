import Link from "next/link";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { site } from "@/lib/site";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ & delivery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">TN</span>
          <span className="brand-name">{site.name}</span>
        </Link>
        <nav className="primary-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} prefetch={false}>{link.label}</Link>)}
        </nav>
        <WhatsappCta label="Make an enquiry" className="button-link header-cta" />
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
            Menu
          </summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => <Link key={link.href} href={link.href} prefetch={false}>{link.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}