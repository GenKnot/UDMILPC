"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale, SiteContent } from "@/content/site-content";

const languageLinks: Array<{ locale: Locale; label: string }> = [
  { locale: "en", label: "EN" },
  { locale: "fr", label: "FR" },
];

export function SiteHeader({ locale, content }: { locale: Locale; content: SiteContent["header"] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const localize = (href: string) => href.startsWith("#") ? `/${locale}${href}` : href.startsWith("/") ? `/${locale}${href}` : href;
  const switchLocale = (nextLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  };
  return (
    <header className="siteHeader">
      <div className="utilityBar">
        <div className="shell utilityInner">
          <span>{content.location}</span>
          <div className="utilityActions">
          <Link href={`/${locale}/contact`}>{content.contact}</Link>
            <div className="languageSwitch" aria-label="Language selection">
              {languageLinks.map((language) => (
                <Link
                  aria-current={language.locale === locale ? "page" : undefined}
                  className={language.locale === locale ? "active" : undefined}
                  href={switchLocale(language.locale)}
                  hrefLang={language.locale}
                  key={language.locale}
                >{language.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="shell navBar">
        <Link className="brand" href={`/${locale}`} aria-label={content.homeLabel}>
          <span className="brandMark brandLogoMark" aria-hidden="true"><Image alt="" height={56} priority src="/brand/logo-web.webp" width={56} /></span>
          <span><strong>{content.brandName}</strong><small>{content.brandMeta}</small></span>
        </Link>

        <nav className="desktopNav" aria-label={content.navigationLabel}>
          {content.navigation.map((item) => item.children ? (
            <details className="navDropdown" key={item.label}>
              <summary>{item.label}<span aria-hidden="true">⌄</span></summary>
              <div className="navDropdownPanel">
                <p>{item.label}</p>
                {item.children.map((child, index) => (
                  <a
                    className={child.kind === "overview" ? "navDropdownOverview" : item.children?.some((entry) => entry.kind === "overview") ? "navDropdownSubLink" : undefined}
                    href={localize(child.href)}
                    key={child.label}
                  >
                    {!item.children?.some((entry) => entry.kind === "overview") && <span>0{index + 1}</span>}
                    {child.label}
                  </a>
                ))}
              </div>
            </details>
          ) : <a href={localize(item.href)} key={item.label}>{item.label}</a>)}
        </nav>

        <div className="navActions">
        <Link className="button buttonSmall" href={`/${locale}/apply`}>{content.apply}</Link>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? content.closeLabel : content.menuLabel}
            className="menuToggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          ><span /><span /></button>
        </div>
      </div>

      <div aria-hidden={!menuOpen} className={`mobileMenu${menuOpen ? " mobileMenuOpen" : ""}`}>
        <nav aria-label={content.navigationLabel}>
          {content.navigation.map((item, index) => (
            <div className="mobileMenuGroup" key={item.label}>
              <a href={localize(item.href)} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}</a>
              {item.children?.map((child) => (
                <a
                  className={`mobileSubLink${child.kind === "overview" ? " mobileSubLinkOverview" : item.children?.some((entry) => entry.kind === "overview") ? " mobileSubLinkNested" : ""}`}
                  href={localize(child.href)}
                  key={child.label}
                  onClick={() => setMenuOpen(false)}
                >
                  {child.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
