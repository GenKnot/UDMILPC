type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faqList">
      {items.map((item, index) => (
        <details className="faqItem" key={item.question}>
          <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}<i aria-hidden="true">+</i></summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
