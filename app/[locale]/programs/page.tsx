import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocumentLanguage } from "@/components/document-language";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaBand } from "@/components/ui/cta-band";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { programContent, programSlugs } from "@/content/program-content";
import { isLocale, locales, siteContent } from "@/content/site-content";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = programContent[locale];
  return { title: content.overview.metadataTitle, description: content.overview.description };
}

export default async function ProgramsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const chrome = siteContent[locale];
  const content = programContent[locale];

  return (
    <div lang={chrome.htmlLang}>
      <DocumentLanguage lang={chrome.htmlLang} />
      <SiteHeader locale={locale} content={chrome.header} />
      <main>
        <PageHero eyebrow={content.overview.eyebrow} title={content.overview.title} description={content.overview.description}>
          <Breadcrumb items={[{ label: content.labels.home, href: `/${locale}` }, { label: content.labels.programs }]} />
        </PageHero>

        <section className="programOverviewIntro contentSection">
          <div className="shell introGrid">
            <Reveal><p className="sectionLabel">{content.overview.introLabel}</p></Reveal>
            <Reveal delay={0.08}>
              <h2>{content.overview.introTitle}</h2>
              <p>{content.overview.introDescription}</p>
            </Reveal>
          </div>
        </section>

        <section className="programDirectory contentSection">
          <div className="shell">
            <StaggerGrid className="programDirectoryGrid">
              {programSlugs.map((slug, index) => {
                const program = content.programs[slug];
                return (
                  <article className="programDirectoryCard" key={slug}>
                    <div className="directoryVisual"><span>0{index + 1}</span><b>{program.shortTitle}</b></div>
                    <div className="directoryContent">
                      <p>{program.eyebrow}</p>
                      <h2>{program.title}</h2>
                      <p>{program.description}</p>
                      <div className="directoryFacts">{program.facts.slice(0, 3).map((fact) => <span key={fact.label}><strong>{fact.value}</strong>{fact.label}</span>)}</div>
                      <Link className="button" href={`/${locale}/programs/${slug}`}>{content.overview.cardAction}<span>↗</span></Link>
                    </div>
                  </article>
                );
              })}
            </StaggerGrid>
          </div>
        </section>

        <section className="programCompare contentSection">
          <div className="shell">
            <Reveal><SectionHeading light label={content.overview.compareLabel} title={content.overview.compareTitle} /></Reveal>
            <StaggerGrid className="compareGrid">
              {content.overview.compareItems.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
            </StaggerGrid>
          </div>
        </section>

        <CtaBand label={content.labels.applyLabel} title={content.labels.applyTitle} description={content.labels.applyDescription} action={content.labels.applyAction} href={`/${locale}/apply`} />
      </main>
      <SiteFooter content={chrome.footer} locale={locale} />
    </div>
  );
}
