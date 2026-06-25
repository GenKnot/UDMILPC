type HeroInfoCardProps = {
  eyebrow: string;
  title: string;
  focus: string;
  items: string[];
  footer: string;
};

export function HeroInfoCard({ eyebrow, title, focus, items, footer }: HeroInfoCardProps) {
  return (
    <>
      <div className="heroInfoTop">
        <span>{eyebrow}</span>
        <strong>{title}</strong>
      </div>
      <div className="heroInfoBody">
        <p>{focus}</p>
        {items.slice(0, 3).map((item, index) => (
          <article key={item}>
            <span>0{index + 1}</span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
      <small>{footer}</small>
    </>
  );
}
