import Link from "next/link";
import { DocumentLanguage } from "@/components/document-language";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Faq } from "@/components/ui/faq";
import { HeroInfoCard } from "@/components/ui/hero-info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { admissionsContent } from "@/content/admissions-content";
import type { Locale, SiteContent } from "@/content/site-content";

export function AdmissionsPage({ locale, chrome }: { locale: Locale; chrome: SiteContent }) {
  const page = admissionsContent[locale];
  return (
    <div lang={chrome.htmlLang}>
      <DocumentLanguage lang={chrome.htmlLang} />
      <SiteHeader locale={locale} content={chrome.header} />
      <main>
        <section className="adHero"><div className="adHeroPattern" /><div className="shell adHeroGrid"><Reveal><p className="eyebrow">{page.hero.eyebrow}</p><h1>{page.hero.title}</h1><p>{page.hero.description}</p><div className="adSlogans">{page.hero.slogans.map((item) => <span key={item}>{item}</span>)}</div><div className="heroActions"><Link className="button" href={`/${locale}/apply`}>{page.hero.actions[0]}<span>↗</span></Link><a className="textLink" href="mailto:info@Montrealic.ca">{page.hero.actions[1]}<span>→</span></a></div></Reveal><div className="adHeroPanel heroInfoCard"><HeroInfoCard eyebrow="Admissions" title="Apply 2026" focus="Application support" items={page.hero.slogans} footer="Fall · Winter · Summer" /></div></div></section>

        <section className="adApplicants contentSection"><div className="shell"><Reveal><SectionHeading label={page.applicants.label} title={page.applicants.title} description={page.applicants.description} /></Reveal><StaggerGrid className="adFourGrid">{page.applicants.items.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid></div></section>

        <section className="adRequirements contentSection"><div className="shell adRequirementsGrid"><div className="adRequirementsIntro"><Reveal><SectionHeading label={page.requirements.label} title={page.requirements.title} description={page.requirements.description} /></Reveal><div className="adRequirementsPhoto" aria-hidden="true" /></div><div><div className="adRequirementList">{page.requirements.items.map((item, i) => <article key={item.title}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div><p className="adNote">{page.requirements.note}</p></div></div></section>

        <section className="adProcess contentSection"><div className="shell"><Reveal><SectionHeading light label={page.process.label} title={page.process.title} description={page.process.description} /></Reveal><div className="adSixGrid">{page.process.steps.map((step, i) => <article key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>

        <section className="adIntakes contentSection"><div className="shell"><Reveal><SectionHeading label={page.intakes.label} title={page.intakes.title} description={page.intakes.description} /></Reveal><div className="adIntakeGrid">{page.intakes.terms.map((term, i) => <article key={term.season}><span>0{i + 1}</span><strong>{term.month}</strong><h3>{term.season}</h3><p>{term.detail}</p></article>)}</div></div></section>

        <section className="adSupport contentSection"><div className="shell"><Reveal><SectionHeading label={page.support.label} title={page.support.title} description={page.support.description} /></Reveal><div className="adSupportEditorial" aria-hidden="true"><div className="adSupportPhotoPrimary" /><div className="adSupportPhotoSecondary" /></div><div className="adFiveGrid">{page.support.items.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>

        <section className="adTuition contentSection"><div className="shell"><Reveal><SectionHeading light label={page.tuition.label} title={page.tuition.title} description={page.tuition.description} /></Reveal><div className="adPriceGrid">{page.tuition.prices.map((price) => <article key={price.label}><strong>{price.amount}</strong><h3>{price.label}</h3><p>{price.detail}</p></article>)}</div><div className="adFinanceFooter"><div>{page.tuition.slogans.map((item) => <span key={item}>{item}</span>)}</div><p>{page.tuition.note}</p></div></div></section>

        <section className="adWhy contentSection"><div className="shell"><Reveal><SectionHeading label={page.whyApply.label} title={page.whyApply.title} description={page.whyApply.description} /></Reveal><StaggerGrid className="adFiveGrid">{page.whyApply.items.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid></div></section>

        <section className="adFaq contentSection"><div className="shell faqGrid"><Reveal><SectionHeading label={page.faq.label} title={page.faq.title} /></Reveal><Faq items={page.faq.items} /></div></section>

        <section className="adCta"><div className="shell"><Reveal><p className="sectionLabel">{page.cta.label}</p><h2>{page.cta.title}</h2><p>{page.cta.description}</p><strong className="adMotto">{page.cta.motto}</strong><div className="adCtaActions"><Link className="button lightButton" href={`/${locale}/apply`}>{page.cta.actions[0]}<span>↗</span></Link><Link className="textLink" href={`/${locale}/contact`}>{page.cta.actions[1]}<span>→</span></Link><a className="textLink" href="mailto:info@Montrealic.ca">{page.cta.actions[2]}<span>→</span></a></div></Reveal></div></section>
      </main>
      <SiteFooter content={chrome.footer} locale={locale} />
    </div>
  );
}
