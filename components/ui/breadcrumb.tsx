import Link from "next/link";

type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {index < items.length - 1 ? <i aria-hidden="true">/</i> : null}
        </span>
      ))}
    </nav>
  );
}
