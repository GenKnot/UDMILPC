import { StaggerGrid } from "@/components/motion/stagger-grid";

type Stat = { value: string; label: string };

export function StatStrip({ items }: { items: Stat[] }) {
  return (
    <section className="statStrip" aria-label="Key information">
      <StaggerGrid className="shell statGrid">
        {items.map((item) => (
          <div className="statItem" key={`${item.value}-${item.label}`}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </StaggerGrid>
    </section>
  );
}
