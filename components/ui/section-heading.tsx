type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
};

export function SectionHeading({ label, title, description, light = false }: SectionHeadingProps) {
  return (
    <header className={`sectionHeadingBlock${light ? " sectionHeadingLight" : ""}`}>
      <p className="sectionLabel">{label}</p>
      <h2>{title}</h2>
      {description ? <p className="sectionDescription">{description}</p> : null}
    </header>
  );
}
