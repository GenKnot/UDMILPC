import Link from "next/link";
import Image from "next/image";
import { DocumentLanguage } from "@/components/document-language";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroInfoCard } from "@/components/ui/hero-info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyMontrealContent } from "@/content/why-montreal-content";
import type { Locale, SiteContent } from "@/content/site-content";

export function WhyMontrealPage({ locale, chrome }: { locale: Locale; chrome: SiteContent }) {
  const page = whyMontrealContent[locale];
  return <div lang={chrome.htmlLang}>
    <DocumentLanguage lang={chrome.htmlLang} /><SiteHeader locale={locale} content={chrome.header} />
    <main>
      <section className="wmHero"><div className="wmHeroPattern" /><div className="shell wmHeroGrid"><Reveal><p className="eyebrow">{page.hero.eyebrow}</p><h1>{page.hero.title}</h1><h2>{page.hero.subtitle}</h2><p>{page.hero.description}</p><div className="wmSlogans">{page.hero.slogans.map(x => <span key={x}>{x}</span>)}</div></Reveal><div className="wmHeroVisual heroInfoCard"><HeroInfoCard eyebrow="Montréal" title="MTL" focus="City advantages" items={page.hero.slogans} footer="Québec · Canada" /></div></div></section>

      <section className="wmDestination contentSection"><div className="shell"><Reveal><SectionHeading label={page.destination.label} title={page.destination.title} description={page.destination.description} /></Reveal><figure className="wmWidePhoto"><Image src="/montreal/skyline-panorama.jpg" alt="Montréal skyline seen from Mount Royal" fill sizes="(max-width: 700px) 100vw, 1180px" /><figcaption>Montréal · A university city shaped by knowledge, culture, and possibility</figcaption></figure><StaggerGrid className="wmFiveGrid">{page.destination.items.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid><div className="wmTags">{page.destination.tags.map(x=><span key={x}>{x}</span>)}</div></div></section>

      <section className="wmBilingual contentSection"><div className="shell"><Reveal><SectionHeading light label={page.bilingual.label} title={page.bilingual.title} description={page.bilingual.description} /></Reveal><div className="wmFourGrid wmLightGrid">{page.bilingual.benefits.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="wmStatements">{page.bilingual.statements.map(x=><strong key={x}>{x}</strong>)}</div></div></section>

      <section className="wmWelcome contentSection"><div className="shell wmWelcomeGrid"><Reveal><p className="sectionLabel">{page.welcome.label}</p><h2>{page.welcome.title}</h2><p>{page.welcome.description}</p><div className="wmWelcomeTags">{page.welcome.tags.map(x=><span key={x}>{x}</span>)}</div></Reveal><blockquote>{page.welcome.quote}</blockquote></div></section>

      <section className="wmInnovation contentSection"><div className="shell"><Reveal><SectionHeading label={page.innovation.label} title={page.innovation.title} description={page.innovation.description} /></Reveal><div className="wmPhotoPair"><figure><Image src="/montreal/downtown-blue-hour.jpg" alt="Montréal downtown at blue hour" fill sizes="(max-width: 700px) 100vw, 58vw" /><figcaption>Architecture for new ideas</figcaption></figure><figure><Image src="/montreal/city-view.jpg" alt="Montréal city view from Mount Royal" fill sizes="(max-width: 700px) 100vw, 38vw" /><figcaption>A city connected to opportunity</figcaption></figure></div><div className="wmSixGrid">{page.innovation.sectors.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="wmInnovationSlogans">{page.innovation.slogans.map(x=><strong key={x}>{x}</strong>)}</div></div></section>

      <section className="wmCulture contentSection"><div className="shell"><Reveal><SectionHeading label={page.culture.label} title={page.culture.title} description={page.culture.description} /></Reveal><div className="wmCultureGallery"><figure><Image src="/montreal/old-montreal-street.jpg" alt="Old Montréal street and historic architecture" fill sizes="(max-width: 700px) 100vw, 40vw" /></figure><figure><Image src="/montreal/biosphere.jpg" alt="The Montréal Biosphere in Parc Jean-Drapeau" fill sizes="(max-width: 700px) 100vw, 30vw" /></figure><figure><Image src="/montreal/waterfront-dusk.jpg" alt="Montréal waterfront and skyline at dusk" fill sizes="(max-width: 700px) 100vw, 30vw" /></figure></div><StaggerGrid className="wmSixGrid">{page.culture.experiences.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid></div></section>

      <section className="wmCareer contentSection"><div className="shell"><Reveal><SectionHeading light label={page.career.label} title={page.career.title} description={page.career.description} /></Reveal><div className="wmFiveGrid wmFiveGridLight">{page.career.ecosystem.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="wmCareerSlogans">{page.career.slogans.map(x=><strong key={x}>{x}</strong>)}</div></div></section>

      <section className="wmStudentLife contentSection"><div className="shell wmStudentLifeLayout"><figure className="wmStudentPhoto"><Image src="/montreal/neighborhood-street.jpg" alt="A Montréal neighbourhood street near campus life" fill sizes="(max-width: 900px) 100vw, 42vw" /></figure><div><Reveal><SectionHeading label={page.studentLife.label} title={page.studentLife.title} description={page.studentLife.description} /></Reveal><div className="wmFourGrid">{page.studentLife.items.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></div></section>

      <section className="wmCitizens contentSection"><div className="shell"><Reveal><SectionHeading label={page.citizens.label} title={page.citizens.title} description={page.citizens.description} /></Reveal><div className="wmFiveGrid">{page.citizens.qualities.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="wmCitizenSlogans">{page.citizens.slogans.map(x=><strong key={x}>{x}</strong>)}</div></div></section>

      <section className="wmCta"><div className="shell"><Reveal><p className="sectionLabel">{page.cta.label}</p><h2>{page.cta.title}</h2><p>{page.cta.description}</p><strong className="wmMotto">{page.cta.motto}</strong><div className="wmCtaActions"><Link className="button lightButton" href={`/${locale}/apply`}>{page.cta.actions[0]}<span>↗</span></Link><a className="textLink" href="mailto:admissions@UDEMIC.ca">{page.cta.actions[1]}<span>→</span></a><Link className="textLink" href={`/${locale}/contact`}>{page.cta.actions[2]}<span>→</span></Link></div></Reveal></div></section>
    </main><SiteFooter content={chrome.footer} locale={locale} />
  </div>;
}
