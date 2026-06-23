import Link from "next/link";

type CtaBandProps = {
  label: string;
  title: string;
  description: string;
  action: string;
  href: string;
};

export function CtaBand({ label, title, description, action, href }: CtaBandProps) {
  return (
    <section className="applyBand">
      <div className="shell applyInner">
        <p className="sectionLabel">{label}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="button buttonLight" href={href}>{action} <span>↗</span></Link>
      </div>
    </section>
  );
}
