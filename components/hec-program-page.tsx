import Link from "next/link";
import { DocumentLanguage } from "@/components/document-language";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Faq } from "@/components/ui/faq";
import { InPageNav } from "@/components/ui/in-page-nav";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatStrip } from "@/components/ui/stat-strip";
import { programContent } from "@/content/program-content";
import type { Locale, SiteContent } from "@/content/site-content";

type HecProgramPageProps = {
  locale: Locale;
  chrome: SiteContent;
  slug: "business-french-hec" | "hec-bachelors";
};

export function HecProgramPage({ locale, chrome, slug }: HecProgramPageProps) {
  const content = programContent[locale];
  const program = content.programs[slug];
  const heroClass = program.visualClass ?? "";
  const photoLabels = {
    en: { overview: slug === "business-french-hec" ? "Learning in action" : "Student experience", editorial: "HEC Montréal" },
    fr: { overview: slug === "business-french-hec" ? "Apprentissage en action" : "Expérience étudiante", editorial: "HEC Montréal" },
    zh: { overview: slug === "business-french-hec" ? "学习现场" : "学生体验", editorial: "HEC Montréal" },
  }[locale];
  const inPageItems = [
    { label: content.labels.overview, href: "#overview" },
    { label: content.labels.outcomes, href: "#outcomes" },
    { label: content.labels.curriculum, href: "#curriculum" },
    { label: content.labels.requirements, href: "#requirements" },
  ];

  return (
    <div lang={chrome.htmlLang}>
      <DocumentLanguage lang={chrome.htmlLang} />
      <SiteHeader locale={locale} content={chrome.header} />
      <main>
        <section className={`pageHero hecProgramHero ${heroClass}`}>
          <div className="shell hecHeroGrid">
            <Reveal className="hecHeroCopy">
              <p className="eyebrow">{program.eyebrow}</p>
              <h1>{program.title}</h1>
              <p>{program.description}</p>
              <Breadcrumb items={[
                { label: content.labels.home, href: `/${locale}` },
                { label: content.labels.programs, href: `/${locale}/programs` },
                { label: program.shortTitle },
              ]} />
            </Reveal>
          </div>
        </section>

        <StatStrip items={program.facts} />
        <InPageNav title={content.labels.overview} items={inPageItems} />

        <section className="hecOverview contentSection" id="overview">
          <div className="shell hecOverviewGrid">
            <Reveal>
              <p className="sectionLabel">{content.labels.overview}</p>
              <h2>{content.labels.overviewTitle}</h2>
              <p className="programLead">{program.summary}</p>
            </Reveal>
            <Reveal className={`hecOverviewPhoto ${heroClass}`} delay={0.08}>
              <span>{photoLabels.overview}</span>
            </Reveal>
          </div>
        </section>

        <section className="outcomeSection contentSection" id="outcomes">
          <div className="shell">
            <Reveal><SectionHeading light label={content.labels.outcomes} title={content.labels.outcomesTitle} description={content.labels.outcomesDescription} /></Reveal>
            <StaggerGrid className="outcomeGrid">
              {program.outcomes.map((item, index) => (
                <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>
              ))}
            </StaggerGrid>
          </div>
        </section>

        <section className="hecEditorial contentSection" id="curriculum">
          <div className="shell hecEditorialGrid">
            <Reveal className={`hecEditorialPhoto ${heroClass}`}>
              <span>{photoLabels.editorial}</span>
            </Reveal>
            <div>
              <Reveal><SectionHeading label={content.labels.curriculum} title={content.labels.curriculumTitle} description={content.labels.curriculumDescription} /></Reveal>
              <div className="hecCurriculumList">
                {program.curriculum.map((item, index) => (
                  <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>
                ))}
              </div>
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

        <section className="hecCta">
          <div className="shell">
            <Reveal>
              <p className="sectionLabel">{content.labels.applyLabel}</p>
              <h2>{content.labels.applyTitle}</h2>
              <p>{content.labels.applyDescription}</p>
              <div className="hecCtaActions">
                <a className="button lightButton" href={program.externalUrl} target="_blank" rel="noopener noreferrer">
                  {program.externalAction}<span>↗</span>
                </a>
                <Link className="textLink" href={`/${locale}/contact`}>{chrome.header.contact}<span>→</span></Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter content={chrome.footer} locale={locale} />
    </div>
  );
}
