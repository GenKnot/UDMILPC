import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocumentLanguage } from "@/components/document-language";
import { CampusMediaGallery } from "@/components/campus-media-gallery";
import { HomeHeroEffects } from "@/components/motion/home-hero-effects";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { homepageContent } from "@/content/homepage-content";
import { isLocale, locales, siteContent } from "@/content/site-content";

type LocalePageProps = { params: Promise<{ locale: string }> };

const homePhotoStory = {
  en: {
    label: "Campus in focus",
    title: "A learning environment you can actually picture.",
    images: [
      { src: "/M/inside 1.jpg", alt: "Students studying in a bright university learning space", caption: "Focused study spaces" },
      { src: "/M/people 3.jpg", alt: "Students collaborating around a table in a campus study area", caption: "Collaborative learning" },
      { src: "/M/building 18.jpg", alt: "Aerial view of the Université de Montréal campus landscape", caption: "A real university setting" },
    ],
    supportLabel: "Support in action",
    supportTitle: "Guidance, advising, and student care are part of the daily experience.",
  },
  fr: {
    label: "Le campus en images",
    title: "Un milieu d’apprentissage que l’on peut vraiment imaginer.",
    images: [
      { src: "/M/inside 1.jpg", alt: "Étudiants dans un espace universitaire lumineux", caption: "Espaces d’étude" },
      { src: "/M/people 3.jpg", alt: "Étudiants collaborant autour d’une table sur le campus", caption: "Apprentissage collaboratif" },
      { src: "/M/building 18.jpg", alt: "Vue aérienne du paysage du campus de l’Université de Montréal", caption: "Un vrai cadre universitaire" },
    ],
    supportLabel: "Le soutien en action",
    supportTitle: "L’orientation, les conseils et l’accompagnement font partie de l’expérience quotidienne.",
  },
  zh: {
    label: "校园画面",
    title: "让学生更容易想象自己在这里学习。",
    images: [
      { src: "/M/inside 1.jpg", alt: "学生在明亮的大学学习空间中学习", caption: "专注学习空间" },
      { src: "/M/people 3.jpg", alt: "学生在校园学习区围桌协作", caption: "协作式学习" },
      { src: "/M/building 18.jpg", alt: "蒙特利尔大学校园环境航拍", caption: "真实大学环境" },
    ],
    supportLabel: "支持服务现场",
    supportTitle: "选课指导、升学建议与学生关怀，是日常学习体验的一部分。",
  },
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { metadata } = siteContent[locale];
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: { canonical: `/${locale}`, languages: { en: "/en", fr: "/fr" } },
  };
}

export default async function LocaleHome({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = siteContent[locale];
  const home = homepageContent[locale];
  const photoStory = homePhotoStory[locale];

  return (
    <div lang={content.htmlLang}>
      <DocumentLanguage lang={content.htmlLang} />
      <SiteHeader locale={locale} content={content.header} />
      <main>
        <section className="hero">
          <HomeHeroEffects />
          <div className="heroBackdrop" aria-hidden="true">
            <video className="heroVideo" autoPlay muted loop playsInline preload="metadata" poster="/M/building 3.jpg">
              <source src="/videos/udem-campus-hero.mp4" type="video/mp4" />
            </video>
            <div className="heroOrb" />
          </div>
          <div className="shell heroInner">
            <Reveal distance={18}>
              <p className="eyebrow">{home.hero.eyebrow}</p>
              <h1>{home.hero.title}</h1>
              <p className="heroCopy">{home.hero.description}</p>
              <div className="heroHighlights">{home.hero.highlights.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="heroActions">
                <Link className="button" href={`/${locale}/apply`}>{home.hero.actions[0]}<span>↗</span></Link>
                <Link className="textLink" href={`/${locale}/contact`}>{home.hero.actions[1]}<span>→</span></Link>
                <a className="textLink" href="mailto:info@Montrealic.ca">{home.hero.actions[2]}<span>→</span></a>
              </div>
            </Reveal>
          </div>
          <div className="heroNote">Université de Montréal<br /><strong>Brossard Campus</strong></div>
          <div className="heroIndex" aria-hidden="true">01</div>
        </section>

        <section className="authorityBanner">
          <div className="shell authorityIntro">
            <Reveal><p className="authoritySince">{home.authority.since}</p><h2>{home.authority.title}</h2><p>{home.authority.description}</p></Reveal>
          </div>
          <div className="shell authorityFacts">
            {home.authority.facts.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
          </div>
        </section>

        <section className="homePhotoStory" aria-labelledby="home-photo-story-title">
          <div className="shell homePhotoStoryGrid">
            <Reveal>
              <p className="sectionLabel">{photoStory.label}</p>
              <h2 id="home-photo-story-title">{photoStory.title}</h2>
            </Reveal>
            <div className="homePhotoMosaic">
              {photoStory.images.map((image, index) => (
                <figure key={image.src} className={`homePhotoTile homePhotoTile${index + 1}`}>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 34vw" />
                  <figcaption><span>0{index + 1}</span>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="homeAbout contentSection" id="about">
          <div className="shell homeAboutGrid">
            <Reveal><p className="sectionLabel">{home.about.label}</p><h2>{home.about.title}</h2><p className="sectionLead">{home.about.description}</p></Reveal>
            <div className="aboutDetails">
              <article><span>01</span><h3>Mission</h3><p>{home.about.mission}</p></article>
              <article><span>02</span><h3>Vision</h3><p>{home.about.vision}</p></article>
            </div>
          </div>
          <div className="shell valueRail">{home.about.values.map((value) => <span key={value}>{value}</span>)}</div>
        </section>

        <section className="traditionSection contentSection">
          <div className="shell traditionGrid">
            <Reveal><SectionHeading light label={home.tradition.label} title={home.tradition.title} description={home.tradition.description} /></Reveal>
            <StaggerGrid className="traditionPoints">
              {home.tradition.points.map((point, index) => <article key={point.title}><span>0{index + 1}</span><h3>{point.title}</h3><p>{point.description}</p></article>)}
            </StaggerGrid>
          </div>
          <div className="shell traditionStatement">{home.tradition.statement}</div>
        </section>

        <section className="whyChooseSection contentSection">
          <div className="shell">
            <Reveal><SectionHeading label={home.whyChoose.label} title={home.whyChoose.title} description={home.whyChoose.description} /></Reveal>
            <StaggerGrid className="homeFeatureGrid">{home.whyChoose.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid>
          </div>
        </section>

        <section className="preparationSection contentSection">
          <div className="shell">
            <Reveal><SectionHeading label={home.preparation.label} title={home.preparation.title} description={home.preparation.description} /></Reveal>
            <StaggerGrid className="preparationGrid">{home.preparation.items.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</StaggerGrid>
          </div>
        </section>

        <section className="pathwaySection contentSection" id="pathway">
          <div className="shell">
            <Reveal><SectionHeading light label={home.pathway.label} title={home.pathway.title} description={home.pathway.description} /></Reveal>
            <div className="sixStepPathway">{home.pathway.steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
          </div>
        </section>

        <section className="homePrograms contentSection" id="programs">
          <div className="shell">
            <Reveal><SectionHeading label={home.programs.label} title={home.programs.title} description={home.programs.description} /></Reveal>
            <div className="homeProgramGrid">{home.programs.items.map((program) => <article key={program.number}><span>{program.number}</span><p className="programMeta">{program.meta}</p><h3>{program.title}</h3><p>{program.description}</p><Link href={`/${locale}${program.href}`}>{home.programs.learnMore}<b>↗</b></Link></article>)}</div>
          </div>
        </section>

        <section className="homeCampus contentSection" id="campus">
          <div className="shell homeCampusGrid">
            <div className="campusVisual"><span>UdeM · Brossard</span><strong>45.45° N<br />73.44° W</strong><p>{home.campus.location}</p></div>
            <div className="homeCampusCopy">
              <Reveal><SectionHeading label={home.campus.label} title={home.campus.title} description={home.campus.description} /></Reveal>
              <div className="campusFeatureList">{home.campus.features.map((feature, index) => <article key={feature.title}><span>0{index + 1}</span><div><h3>{feature.title}</h3><p>{feature.description}</p></div></article>)}</div>
            </div>
          </div>
        </section>

        <CampusMediaGallery locale={locale} />

        <section className="homeSupport contentSection" id="support">
          <div className="shell">
            <Reveal><SectionHeading label={home.support.label} title={home.support.title} description={home.support.description} /></Reveal>
            <div className="homeSupportEditorial">
              <figure>
                <Image src="/M/people.jpg" alt={photoStory.supportTitle} fill sizes="(max-width: 760px) 100vw, 48vw" />
              </figure>
              <div>
                <p className="sectionLabel">{photoStory.supportLabel}</p>
                <h3>{photoStory.supportTitle}</h3>
              </div>
            </div>
            <div className="supportGroupGrid">{home.support.groups.map((group, index) => <article key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p><ul>{group.services.map((service) => <li key={service}>{service}</li>)}</ul></article>)}</div>
          </div>
        </section>

        <section className="impactSection contentSection">
          <div className="shell impactGrid">
            <Reveal><p className="sectionLabel">{home.impact.label}</p><h2>{home.impact.title}</h2><p className="sectionLead">{home.impact.description}</p><div className="outcomeList">{home.impact.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}</div></Reveal>
            <div className="impactStats">{home.impact.stats.map((stat) => <article key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div>
          </div>
        </section>

        <section className="homeFinalCta" id="admissions">
          <div className="shell homeFinalCtaInner">
            <Reveal><p className="sectionLabel">{home.cta.label}</p><h2>{home.cta.title}</h2><p>{home.cta.description}</p><div className="ctaActions"><Link className="button lightButton" href={`/${locale}/apply`}>{home.cta.primary}<span>↗</span></Link><Link className="textLink" href={`/${locale}/contact`}>{home.cta.secondary}<span>→</span></Link></div></Reveal>
          </div>
        </section>
      </main>
      <SiteFooter content={content.footer} locale={locale} />
    </div>
  );
}
