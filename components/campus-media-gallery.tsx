import Image from "next/image";
import type { Locale } from "@/content/site-content";

const media = [
  ["/M/ChatGPT Image Jun 21, 2026, 11_16_08 PM.png", "Library study commons"],
  ["/M/ChatGPT Image Jun 21, 2026, 11_17_04 PM.png", "University seminar"],
  ["/M/ChatGPT Image Jun 21, 2026, 11_19_16 PM.png", "Contemporary campus"],
  ["/M/ChatGPT Image Jun 21, 2026, 11_20_18 PM.png", "Academic advising"],
] as const;

const copy: Record<Locale, { label: string; title: string; description: string }> = {
  en: { label: "Campus & Learning", title: "See yourself learning here.", description: "Explore the spaces, people, and Montréal setting that shape a connected university experience." },
  fr: { label: "Campus et apprentissage", title: "Imaginez-vous étudier ici.", description: "Découvrez les espaces, les personnes et le milieu montréalais qui façonnent une expérience universitaire connectée." },
  zh: { label: "校园与学习", title: "想象你在这里学习。", description: "从学习空间、校园社群到蒙特利尔城市环境，提前感受紧密相连的大学体验。" },
};

export function CampusMediaGallery({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <section className="campusMediaSection" id="campus-gallery" aria-labelledby="campus-media-title">
      <div className="shell campusMediaIntro">
        <p className="sectionLabel">{text.label}</p>
        <h2 id="campus-media-title">{text.title}</h2>
        <p>{text.description}</p>
      </div>
      <div className="campusMediaRail">
        {media.map(([src, alt], index) => (
          <figure className={`campusMediaItem campusMediaItem${(index % 5) + 1}`} key={src}>
            <Image src={src} alt={alt} fill sizes="(max-width: 700px) 78vw, 32vw" quality={75} />
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
