import Image from "next/image";
import Link from "next/link";
import type { Locale, SiteContent } from "@/content/site-content";

export function SiteFooter({ content, locale }: { content: SiteContent["footer"]; locale: Locale }) {
  const localize = (href: string) => href.startsWith("#") ? `/${locale}${href}` : href.startsWith("/") ? `/${locale}${href}` : href;
  return (
    <footer className="siteFooter">
      <div className="shell footerMain">
        <div className="footerBrand">
          <Link className="brand brandInverse" href={`/${locale}`}>
            <span className="brandMark brandLogoMark" aria-hidden="true"><Image alt="" height={56} src="/brand/logo-web.webp" width={56} /></span>
            <span><strong>UdeM International Center</strong><small>{content.descriptor}</small></span>
          </Link>
          <p>{content.note}</p>
        </div>
        <div className="footerColumn">
          <strong>{content.explore}</strong>
          {content.links.slice(0, 3).map((link) => <a href={localize(link.href)} key={link.label}>{link.label}</a>)}
        </div>
        <div className="footerColumn">
          <strong>{content.information}</strong>
          {content.links.slice(3).map((link) => <a href={localize(link.href)} key={link.label}>{link.label}</a>)}
          <a href="mailto:admissions@UDEMIC.ca">admissions@UDEMIC.ca</a>
          <a href="mailto:studentservices@UEDMIC.ca">studentservices@UEDMIC.ca</a>
          <a href="tel:+15146666666">+1 (514) 666-6666</a>
          <span>2000 Rue de l&apos;Éclipse<br />Brossard, Québec, Canada</span>
        </div>
      </div>
      <div className="shell footerBottom">
        <span>© 2026 Université de Montréal International Language &amp; Pathway Center</span>
        <span>{content.legal}</span>
      </div>
    </footer>
  );
}
