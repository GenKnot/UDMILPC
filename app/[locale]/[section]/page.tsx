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
import { Faq } from "@/components/ui/faq";
import { InPageNav } from "@/components/ui/in-page-nav";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatStrip } from "@/components/ui/stat-strip";
import { WhyUdemPage } from "@/components/why-udem-page";
import { AdmissionsPage } from "@/components/admissions-page";
import { StudentLifePage } from "@/components/student-life-page";
import { WhyMontrealPage } from "@/components/why-montreal-page";
import { AboutPage } from "@/components/about-page";
import { LeadershipPage } from "@/components/leadership-page";
import { ContactPage } from "@/components/contact-page";
import { TuitionPage } from "@/components/tuition-page";
import { LearningApproachPage } from "@/components/learning-approach-page";
import { experienceContent, experienceSlugs, isExperienceSlug } from "@/content/experience-content";
import { isLocale, locales, siteContent } from "@/content/site-content";

type Props = { params: Promise<{ locale: string; section: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => experienceSlugs.map((section) => ({ locale, section })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isExperienceSlug(section)) return {};
  const page = experienceContent[locale].pages[section];
  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: {
      canonical: `/${locale}/${section}`,
      languages: { en: `/en/${section}`, fr: `/fr/${section}` },
    },
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isExperienceSlug(section)) notFound();

  const chrome = siteContent[locale];
  const localeContent = experienceContent[locale];
  const page = localeContent.pages[section];
  const ctaHref = page.cta.href.startsWith("/") ? `/${locale}${page.cta.href}` : page.cta.href;
  if (section === "why-udem") return <WhyUdemPage locale={locale} chrome={chrome} />;
  if (section === "admissions") return <AdmissionsPage locale={locale} chrome={chrome} />;
  if (section === "student-life") return <StudentLifePage locale={locale} chrome={chrome} />;
  if (section === "why-montreal") return <WhyMontrealPage locale={locale} chrome={chrome} />;
  if (section === "about") return <AboutPage locale={locale} chrome={chrome} />;
  if (section === "leadership") return <LeadershipPage locale={locale} chrome={chrome} />;
  if (section === "contact") return <ContactPage locale={locale} chrome={chrome} />;
  if (section === "tuition") return <TuitionPage locale={locale} chrome={chrome} />;
  if (section === "learning-approach") return <LearningApproachPage locale={locale} chrome={chrome} />;

  return (
    <div lang={chrome.htmlLang}>
      <DocumentLanguage lang={chrome.htmlLang} />
      <SiteHeader locale={locale} content={chrome.header} />
      <main className={`experiencePage experience-${page.theme}`}>
        <section className="experienceHero">
          <div className="experienceHeroPattern" aria-hidden="true" />
          <div className="shell experienceHeroGrid">
            <Reveal className="experienceHeroCopy" distance={18}>
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
              <p>{page.hero.description}</p>
              <Breadcrumb items={[{ label: localeContent.labels.home, href: `/${locale}` }, { label: page.hero.eyebrow }]} />
            </Reveal>
            <Reveal className="experienceHeroVisual" delay={0.12} distance={12}>
              <span>{page.hero.visualLabel}</span>
              <strong>{page.hero.visualCode}</strong>
              <i aria-hidden="true" />
            </Reveal>
          </div>
        </section>

        <StatStrip items={page.stats} />
        <InPageNav title={page.nav.title} items={page.nav.items} />

        <section className="experienceIntro contentSection" id="overview">
          <div className="shell experienceIntroGrid">
            <Reveal><p className="sectionLabel">{page.intro.label}</p></Reveal>
            <Reveal delay={0.08}><h2>{page.intro.title}</h2><p>{page.intro.description}</p></Reveal>
          </div>
        </section>

        <section className="experiencePillars contentSection" id="highlights">
          <div className="shell">
            <Reveal><SectionHeading label={page.pillars.label} title={page.pillars.title} description={page.pillars.description} /></Reveal>
            <StaggerGrid className="experiencePillarGrid">
              {page.pillars.items.map((item, index) => (
                <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>
              ))}
            </StaggerGrid>
          </div>
        </section>

        <section className="experienceFeature contentSection">
          <div className="shell experienceFeatureGrid">
            <div className="experienceFeatureVisual">
              <span>{page.feature.visualLabel}</span>
              <b aria-hidden="true">{page.hero.visualCode}</b>
            </div>
            <div className="experienceFeatureCopy">
              <Reveal><SectionHeading label={page.feature.label} title={page.feature.title} description={page.feature.description} /></Reveal>
              <StaggerGrid className="experiencePointList">
                {page.feature.points.map((point, index) => <div key={point}><span>0{index + 1}</span><p>{point}</p></div>)}
              </StaggerGrid>
            </div>
          </div>
        </section>

        <section className="experienceJourney contentSection" id="experience">
          <div className="shell">
            <Reveal><SectionHeading light label={page.journey.label} title={page.journey.title} description={page.journey.description} /></Reveal>
            <StaggerGrid className="experienceJourneyGrid">
              {page.journey.items.map((item, index) => (
                <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>
              ))}
            </StaggerGrid>
          </div>
        </section>

        <section className="experienceFaq contentSection" id="questions">
          <div className="shell faqGrid">
            <Reveal><SectionHeading label={page.faq.label} title={page.faq.title} /></Reveal>
            <Faq items={page.faq.items} />
          </div>
        </section>

        <CtaBand label={page.cta.label} title={page.cta.title} description={page.cta.description} action={page.cta.action} href={ctaHref} />

        <nav className="experienceNext" aria-label={localeContent.labels.explore}>
          <div className="shell experienceNextInner">
            {experienceSlugs.filter((slug) => slug !== section).slice(0, 3).map((slug) => (
              <Link href={`/${locale}/${slug}`} key={slug}>{experienceContent[locale].pages[slug].hero.eyebrow}<span>↗</span></Link>
            ))}
          </div>
        </nav>
      </main>
      <SiteFooter content={chrome.footer} locale={locale} />
    </div>
  );
}
