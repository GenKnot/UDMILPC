type NavItem = { label: string; href: string };

export function InPageNav({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <nav className="inPageNav" aria-label={title}>
      <div className="shell inPageNavInner">
        <span>{title}</span>
        <div>{items.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
      </div>
    </nav>
  );
}
