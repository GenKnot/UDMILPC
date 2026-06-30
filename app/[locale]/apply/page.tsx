import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplicationForm } from "@/components/application-form";
import { DocumentLanguage } from "@/components/document-language";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { applicationContent } from "@/content/application-content";
import { applyOverviewContent } from "@/content/final-pages-content";
import { isLocale, locales, siteContent } from "@/content/site-content";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = applicationContent[locale];
  return {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    alternates: { canonical: `/${locale}/apply`, languages: { en: "/en/apply", fr: "/fr/apply" } },
  };
}

export default async function ApplyPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const chrome = siteContent[locale];
  const copy = applicationContent[locale];
  const overview = applyOverviewContent[locale];

  return (
    <div lang={chrome.htmlLang}>
      <DocumentLanguage lang={chrome.htmlLang} />
      <SiteHeader locale={locale} content={chrome.header} />
      <main className="applyPage">
        <section className="apHero"><div className="shell"><Reveal><p className="eyebrow">Apply Now</p><h1>{overview.hero.title}</h1><p>{overview.hero.description}</p><div className="apSlogans">{overview.hero.slogans.map((item) => <span key={item}>{item}</span>)}</div></Reveal></div></section>
        <section className="apProcess contentSection"><div className="shell"><Reveal><SectionHeading label={overview.process.label} title={overview.process.title} description={overview.process.description} /></Reveal><div className="apFlow">{overview.process.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div></div></section>
        <section className="apDocuments contentSection"><div className="shell"><Reveal><SectionHeading light label={overview.documents.label} title={overview.documents.title} description={overview.documents.description} /></Reveal><div className="apDocumentGrid">{overview.documents.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
        <section className="apApplication" id="application"><div className="shell apApplicationIntro"><Reveal><p className="sectionLabel">{overview.cta.label}</p><h2>{overview.cta.title}</h2><p>{overview.cta.description}</p><div><a className="button" href="#application-form">{overview.cta.actions[0]}<span>↓</span></a><a className="textLink darkLink" href="mailto:info@Montrealic.ca">{overview.cta.actions[1]}<span>→</span></a><Link className="textLink darkLink" href={`/${locale}/contact`}>{overview.cta.actions[2]}<span>→</span></Link></div></Reveal></div><div className="applicationSection" id="application-form"><div className="shell"><ApplicationForm copy={copy} locale={locale} /></div></div>
        </section>
      </main>
      <SiteFooter content={chrome.footer} locale={locale} />
    </div>
  );
}
