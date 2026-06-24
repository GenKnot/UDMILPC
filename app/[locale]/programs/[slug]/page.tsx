import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentLanguage } from "@/components/document-language";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CtaBand } from "@/components/ui/cta-band";
import { Faq } from "@/components/ui/faq";
import { InPageNav } from "@/components/ui/in-page-nav";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatStrip } from "@/components/ui/stat-strip";
import { UniversityPathwayPage } from "@/components/university-pathway-page";
import { LanguagePreparationPage } from "@/components/language-preparation-page";
import { AcademicFoundationPage } from "@/components/academic-foundation-page";
import { HecProgramPage } from "@/components/hec-program-page";
import { isProgramSlug, programContent, programSlugs } from "@/content/program-content";
import { isLocale, locales, siteContent } from "@/content/site-content";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => programSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isProgramSlug(slug)) return {};
  const program = programContent[locale].programs[slug];
  return { title: `${program.title} | ${siteContent[locale].metadata.title}`, description: program.description };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isProgramSlug(slug)) notFound();

  const chrome = siteContent[locale];
  const content = programContent[locale];
  const program = content.programs[slug];
  if (slug === "university-pathway") return <UniversityPathwayPage locale={locale} chrome={chrome} />;
  if (slug === "language-preparation") return <LanguagePreparationPage locale={locale} chrome={chrome} />;
  if (slug === "academic-foundation") return <AcademicFoundationPage locale={locale} chrome={chrome} />;
  if (slug === "business-french-hec" || slug === "hec-bachelors") return <HecProgramPage locale={locale} chrome={chrome} slug={slug} />;
  const inPageItems = [
    { label: content.labels.overview, href: "#overview" },
    { label: content.labels.outcomes, href: "#outcomes" },
    { label: content.labels.curriculum, href: "#curriculum" },
    { label: content.labels.requirements, href: "#requirements" },
  ];
  const ctaHref = program.externalUrl ?? `/${locale}/apply`;
  const ctaAction = program.externalAction ?? content.labels.applyAction;
  const visualClass = program.visualClass ? ` ${program.visualClass}` : "";

  return (
    <div lang={chrome.htmlLang}>
      <DocumentLanguage lang={chrome.htmlLang} />
      <SiteHeader locale={locale} content={chrome.header} />
      <main>
        <PageHero className={program.visualClass} eyebrow={program.eyebrow} title={program.title} description={program.description}>
          <Breadcrumb items={[
            { label: content.labels.home, href: `/${locale}` },
            { label: content.labels.programs, href: `/${locale}/programs` },
            { label: program.shortTitle },
          ]} />
        </PageHero>
        <StatStrip items={program.facts} />
        <InPageNav title={content.labels.overview} items={inPageItems} />

        <section className="programSummary contentSection" id="overview">
          <div className="shell programSummaryGrid">
            <Reveal>
              <p className="sectionLabel">{content.labels.overview}</p>
              <h2>{content.labels.overviewTitle}</h2>
              <p className="programLead">{program.summary}</p>
            </Reveal>
            <div className={`programHeroPlaceholder${visualClass}`}><span>{content.labels.imagePlaceholder}</span><b>{program.shortTitle}</b></div>
          </div>
        </section>

        <section className="audienceSection contentSection">
          <div className="shell twoColumnSection">
            <Reveal><SectionHeading label={content.labels.audience} title={content.labels.audienceTitle} description={content.labels.audienceDescription} /></Reveal>
            <StaggerGrid className="checkList">
              {program.audience.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
            </StaggerGrid>
          </div>
        </section>

        <section className="outcomeSection contentSection" id="outcomes">
          <div className="shell">
            <Reveal><SectionHeading light label={content.labels.outcomes} title={content.labels.outcomesTitle} description={content.labels.outcomesDescription} /></Reveal>
            <StaggerGrid className="outcomeGrid">
              {program.outcomes.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
            </StaggerGrid>
          </div>
        </section>

        <section className="curriculumSection contentSection" id="curriculum">
          <div className="shell twoColumnSection curriculumLayout">
            <Reveal><SectionHeading label={content.labels.curriculum} title={content.labels.curriculumTitle} description={content.labels.curriculumDescription} /></Reveal>
            <div className="curriculumList">
              {program.curriculum.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="progressionSection contentSection">
          <div className="shell">
            <Reveal><SectionHeading label={content.labels.pathway} title={content.labels.pathwayTitle} description={content.labels.pathwayDescription} /></Reveal>
            <StaggerGrid className="progressionGrid">
              {program.pathway.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
            </StaggerGrid>
          </div>
        </section>

        <section className="requirementSection contentSection" id="requirements">
          <div className="shell requirementGrid">
            <Reveal><SectionHeading light label={content.labels.requirements} title={content.labels.requirementsTitle} description={content.labels.requirementsDescription} /></Reveal>
            <div className="requirementList">{program.requirements.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div>
          </div>
        </section>

        <section className="faqSection contentSection">
          <div className="shell faqGrid">
            <Reveal><SectionHeading label={content.labels.faq} title={content.labels.faqTitle} /></Reveal>
            <Faq items={program.faq} />
          </div>
        </section>

        <CtaBand label={content.labels.applyLabel} title={content.labels.applyTitle} description={content.labels.applyDescription} action={ctaAction} href={ctaHref} />
      </main>
      <SiteFooter content={chrome.footer} locale={locale} />
    </div>
  );
}
