import Link from "next/link";
import { DocumentLanguage } from "@/components/document-language";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroInfoCard } from "@/components/ui/hero-info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { universityPathwayContent } from "@/content/university-pathway-content";
import type { Locale, SiteContent } from "@/content/site-content";

export function UniversityPathwayPage({ locale, chrome }: { locale: Locale; chrome: SiteContent }) {
  const page = universityPathwayContent[locale];
  return (
    <div lang={chrome.htmlLang}>
      <DocumentLanguage lang={chrome.htmlLang} />
      <SiteHeader locale={locale} content={chrome.header} />
      <main>
        <section className="upHero">
          <div className="upHeroPattern" aria-hidden="true" />
          <div className="shell upHeroInner">
            <Reveal>
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
              <p className="upHeroLead">{page.hero.description}</p>
              <div className="upSlogans">{page.hero.slogans.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="heroActions"><Link className="button" href={`/${locale}/apply`}>{page.hero.actions[0]}<span>↗</span></Link><Link className="textLink" href={`/${locale}/contact`}>{page.hero.actions[1]}<span>→</span></Link></div>
            </Reveal>
            <div className="upHeroMark heroInfoCard"><HeroInfoCard eyebrow="University" title="Pathway" focus="Structured preparation" items={page.hero.slogans} footer="UdeM · Brossard" /></div>
          </div>
        </section>

        <section className="upDefinition contentSection" id="overview">
          <div className="shell upDefinitionGrid">
            <Reveal><p className="sectionLabel">{page.definition.label}</p><h2>{page.definition.title}</h2><blockquote>{page.definition.lead}</blockquote><p>{page.definition.description}</p></Reveal>
            <StaggerGrid className="upSkillGrid">{page.definition.skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span><strong>{skill}</strong></div>)}</StaggerGrid>
          </div>
        </section>

        <section className="upReasons contentSection">
          <div className="shell"><Reveal><SectionHeading label={page.reasons.label} title={page.reasons.title} description={page.reasons.description} /></Reveal><StaggerGrid className="upFourGrid">{page.reasons.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid></div>
        </section>

        <section className="upOutcomes contentSection" id="outcomes">
          <div className="shell"><Reveal><SectionHeading light label={page.outcomes.label} title={page.outcomes.title} description={page.outcomes.description} /></Reveal><StaggerGrid className="upSixGrid">{page.outcomes.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid></div>
        </section>

        <section className="upStructure contentSection" id="curriculum">
          <div className="shell upStructureGrid"><Reveal><SectionHeading label={page.structure.label} title={page.structure.title} description={page.structure.description} /></Reveal><div className="upStructureList">{page.structure.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div>
        </section>

        <section className="upEnvironment contentSection">
          <div className="shell upEnvironmentGrid">
            <div className="upCampusVisual"><span>Université de Montréal</span><strong>Brossard<br />Campus</strong><small>2000 Rue de l&apos;Éclipse</small></div>
            <Reveal><p className="sectionLabel">{page.environment.label}</p><h2>{page.environment.title}</h2><p className="sectionDescription">{page.environment.description}</p><div className="upBenefitList">{page.environment.benefits.map((item) => <span key={item}>{item}</span>)}</div></Reveal>
          </div>
          <div className="shell upEnvironmentSlogans">{page.environment.slogans.map((item) => <strong key={item}>{item}</strong>)}</div>
        </section>

        <section className="upAudience contentSection">
          <div className="shell"><Reveal><SectionHeading label={page.audience.label} title={page.audience.title} description={page.audience.description} /></Reveal><div className="upAudienceGrid">{page.audience.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div>
        </section>

        <section className="upModel contentSection">
          <div className="shell"><Reveal><SectionHeading label={page.model.label} title={page.model.title} description={page.model.description} /></Reveal><div className="upModelFlow">{page.model.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div></div>
        </section>

        <section className="upMontreal contentSection">
          <div className="shell"><Reveal><SectionHeading light label={page.montreal.label} title={page.montreal.title} description={page.montreal.description} /></Reveal><StaggerGrid className="upMontrealGrid">{page.montreal.advantages.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid></div>
        </section>

        <section className="upFinalCta">
          <div className="shell"><Reveal><p className="sectionLabel">{page.cta.label}</p><h2>{page.cta.title}</h2><p>{page.cta.description}</p><div className="upCtaActions"><Link className="button lightButton" href={`/${locale}/apply`}>{page.cta.actions[0]}<span>↗</span></Link><a className="textLink" href="mailto:info@Montrealic.ca">{page.cta.actions[1]}<span>→</span></a><Link className="textLink" href={`/${locale}/contact`}>{page.cta.actions[2]}<span>→</span></Link></div></Reveal></div>
        </section>
      </main>
      <SiteFooter content={chrome.footer} locale={locale} />
    </div>
  );
}
