import Link from "next/link";
import { DocumentLanguage } from "@/components/document-language";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroInfoCard } from "@/components/ui/hero-info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { studentLifeContent } from "@/content/student-life-content";
import type { Locale, SiteContent } from "@/content/site-content";

export function StudentLifePage({ locale, chrome }: { locale: Locale; chrome: SiteContent }) {
  const page = studentLifeContent[locale];
  return <div lang={chrome.htmlLang}>
    <DocumentLanguage lang={chrome.htmlLang} />
    <SiteHeader locale={locale} content={chrome.header} />
    <main>
      <section className="slHero"><div className="slHeroPattern" /><div className="shell slHeroGrid"><Reveal><p className="eyebrow">{page.hero.eyebrow}</p><h1>{page.hero.title}</h1><h2>{page.hero.subtitle}</h2><p>{page.hero.description}</p><div className="slHeroSlogans">{page.hero.slogans.map((x) => <span key={x}>{x}</span>)}</div></Reveal><div className="slHeroVisual heroInfoCard"><HeroInfoCard eyebrow="UdeM · Brossard" title="Life" focus="Study, connect, belong" items={page.hero.slogans} footer="Student community" /></div></div></section>

      <section className="slCampus contentSection"><div className="shell"><Reveal><SectionHeading label={page.campus.label} title={page.campus.title} description={page.campus.description} /></Reveal><div className="slCampusPhotoPair" aria-hidden="true"><div className="slCampusPhotoPrimary" /><div className="slCampusPhotoSecondary" /></div><StaggerGrid className="slFourGrid">{page.campus.items.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid><strong className="slCampusMotto">{page.campus.motto}</strong></div></section>

      <section className="slLocation contentSection"><div className="shell slLocationGrid"><div className="slRemVisual"><span>RÉSEAU EXPRESS MÉTROPOLITAIN</span><strong>REM</strong><small>Brossard → Downtown Montréal</small></div><div><Reveal><SectionHeading label={page.location.label} title={page.location.title} description={page.location.description} /></Reveal><div className="slLocationList">{page.location.items.map((item, i) => <article key={item.title}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></div></section>

      <section className="slMontreal contentSection"><div className="shell"><Reveal><SectionHeading light label={page.montreal.label} title={page.montreal.title} description={page.montreal.description} /></Reveal><div className="slFourGrid slFourGridLight">{page.montreal.qualities.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="slTags">{page.montreal.tags.map((x) => <span key={x}>{x}</span>)}</div></div></section>

      <section className="slCommunity contentSection"><div className="shell"><div className="slCommunityGrid"><Reveal><p className="sectionLabel">{page.community.label}</p><h2>{page.community.title}</h2><p>{page.community.description}</p></Reveal><div className="slPromiseGrid">{page.community.promises.map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong></div>)}</div></div><div className="slCommunityPhotoWide" aria-hidden="true" /></div></section>

      <section className="slWellbeing contentSection"><div className="shell"><Reveal><SectionHeading label={page.wellbeing.label} title={page.wellbeing.title} description={page.wellbeing.description} /></Reveal><div className="slSupportPanel"><div className="slWellbeingVisual"><span>STUDENT SERVICES</span><strong>Support<br />made visible.</strong><small>Brossard Campus</small></div><div className="slSupportCards">{page.wellbeing.items.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></div></section>

      <section className="slBeyond contentSection"><div className="shell"><Reveal><SectionHeading light label={page.beyond.label} title={page.beyond.title} description={page.beyond.description} /></Reveal><StaggerGrid className="slFiveGrid slFiveGridLight">{page.beyond.items.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid></div></section>

      <section className="slStories contentSection"><div className="shell slStoriesGrid"><Reveal><p className="sectionLabel">{page.stories.label}</p><h2>{page.stories.title}</h2><p>{page.stories.description}</p></Reveal><div className="slTransformations">{page.stories.transformations.map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong></div>)}</div></div></section>

      <section className="slVisit contentSection"><div className="shell"><Reveal><SectionHeading label={page.visit.label} title={page.visit.title} description={page.visit.description} /></Reveal><div className="slVisitGrid">{page.visit.options.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>

      <section className="slCta"><div className="shell"><Reveal><p className="sectionLabel">{page.cta.label}</p><h2>{page.cta.title}</h2><p>{page.cta.description}</p><div className="slMotto">{page.cta.motto.map((x) => <span key={x}>{x}</span>)}</div><div className="slCtaActions"><Link className="button lightButton" href={`/${locale}/contact`}>{page.cta.actions[0]}<span>↗</span></Link><a className="textLink" href="mailto:info@Montrealic.ca">{page.cta.actions[1]}<span>→</span></a><Link className="textLink" href={`/${locale}/apply`}>{page.cta.actions[2]}<span>→</span></Link></div></Reveal></div></section>
    </main>
    <SiteFooter content={chrome.footer} locale={locale} />
  </div>;
}
