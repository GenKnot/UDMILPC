import Link from "next/link";
import Image from "next/image";
import { DocumentLanguage } from "@/components/document-language";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroInfoCard } from "@/components/ui/hero-info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyUdemContent } from "@/content/why-udem-content";
import type { Locale, SiteContent } from "@/content/site-content";

export function WhyUdemPage({ locale, chrome }: { locale: Locale; chrome: SiteContent }) {
  const page = whyUdemContent[locale];
  return (
    <div lang={chrome.htmlLang}>
      <DocumentLanguage lang={chrome.htmlLang} />
      <SiteHeader locale={locale} content={chrome.header} />
      <main>
        <section className="wuHero"><div className="wuHeroPattern" /><div className="shell wuHeroGrid"><Reveal><p className="eyebrow">{page.hero.eyebrow}</p><h1>{page.hero.title}</h1><p>{page.hero.description}</p><div className="wuHeroHighlights">{page.hero.highlights.map((item) => <span key={item}>{item}</span>)}</div></Reveal><div className="wuHeroSeal heroInfoCard"><HeroInfoCard eyebrow="Université" title="UdeM" focus="Academic context" items={page.hero.highlights} footer="Montréal · Québec" /></div></div></section>

        <section className="wuRecognition contentSection"><div className="shell"><Reveal><SectionHeading label={page.recognition.label} title={page.recognition.title} description={page.recognition.description} /></Reveal><figure className="wuWidePhoto"><Image src="/M/building 17.jpg" alt="Université de Montréal campus buildings in a wider academic context" fill sizes="(max-width: 760px) 100vw, 1180px" /><figcaption>Université de Montréal context for future study</figcaption></figure><StaggerGrid className="wuFourGrid">{page.recognition.pillars.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid></div></section>

        <section className="wuEcosystem contentSection"><div className="shell wuEcosystemIntro"><Reveal><p className="sectionLabel">{page.ecosystem.label}</p><h2>{page.ecosystem.title}</h2></Reveal><p>{page.ecosystem.description}</p></div><div className="shell wuEcosystemPhotos"><figure><Image src="/M/inside 1.jpg" alt="Modern university interior learning space" fill sizes="(max-width: 760px) 100vw, 58vw" /><figcaption>Learning spaces</figcaption></figure><figure><Image src="/M/building 18.jpg" alt="Campus architecture connected to academic life" fill sizes="(max-width: 760px) 100vw, 34vw" /><figcaption>Campus scale</figcaption></figure></div><div className="shell wuDisciplineGrid">{page.ecosystem.disciplines.map((item, index) => <article key={item.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.detail}</p></article>)}</div></section>

        <section className="wuCity contentSection"><div className="shell wuCityGrid"><div className="wuCityVisual"><span>MONTRÉAL</span><strong>MTL</strong><small>45.5019° N · 73.5674° W</small></div><div><Reveal><SectionHeading label={page.city.label} title={page.city.title} description={page.city.description} /></Reveal><div className="wuCityFeatures">{page.city.features.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></div></section>

        <section className="wuBilingual contentSection"><div className="shell"><Reveal><SectionHeading light label={page.bilingual.label} title={page.bilingual.title} description={page.bilingual.description} /></Reveal><div className="wuLanguageGrid"><article><span>FR</span><h3>Français</h3><p>{page.bilingual.french}</p></article><article><span>EN</span><h3>English</h3><p>{page.bilingual.english}</p></article><article><span>FR · EN</span><h3>Bilingual for life</h3><p>{page.bilingual.lifelong}</p></article></div></div></section>

        <section className="wuResearch contentSection"><div className="shell"><Reveal><SectionHeading label={page.research.label} title={page.research.title} description={page.research.description} /></Reveal><div className="wuResearchGrid">{page.research.words.map((item, index) => <article key={item.word}><span>0{index + 1}</span><h3>{item.word}</h3><p>{item.detail}</p></article>)}</div></div></section>

        <section className="wuCommunity contentSection"><div className="shell"><Reveal><SectionHeading label={page.community.label} title={page.community.title} description={page.community.description} /></Reveal><StaggerGrid className="wuFourGrid">{page.community.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid></div></section>

        <section className="wuBeyond contentSection"><div className="shell wuBeyondGrid"><Reveal><SectionHeading light label={page.beyond.label} title={page.beyond.title} description={page.beyond.description} /></Reveal><div className="wuSkillMatrix">{page.beyond.skills.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>

        <section className="wuJourney contentSection"><div className="shell wuJourneyEditorial"><Reveal><SectionHeading label={page.journey.label} title={page.journey.title} description={page.journey.description} /></Reveal><div className="wuJourneyRail">{page.journey.paths.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></section>

        <section className="wuCta"><div className="shell"><Reveal><p className="sectionLabel">{page.cta.label}</p><h2>{page.cta.title}</h2><p>{page.cta.description}</p><div className="wuMotto">{page.cta.motto.map((item) => <span key={item}>{item}</span>)}</div><div className="wuCtaActions"><Link className="button lightButton" href={`/${locale}/apply`}>{page.cta.actions[0]}<span>↗</span></Link><Link className="textLink" href={`/${locale}/contact`}>{page.cta.actions[1]}<span>→</span></Link><a className="textLink" href="mailto:admissions@UDEMIC.ca">{page.cta.actions[2]}<span>→</span></a></div></Reveal></div></section>
      </main>
      <SiteFooter content={chrome.footer} locale={locale} />
    </div>
  );
}
