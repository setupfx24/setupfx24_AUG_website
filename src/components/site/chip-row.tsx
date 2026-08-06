/** The hero "Built for" tag treatment, laid out at full section width. */
export function ChipRow({ items }: { items: string[] }) {
  return (
    <ul className="chiprow">
      {items.map((item) => (
        <li key={item}>
          <span className="partners__item" data-hover="partner">
            <svg className="icon">
              <use href="#i-dot" />
            </svg>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
