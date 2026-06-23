import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="pageHero">
      <div className="shell pageHeroInner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
