import { ChipRow } from "./chip-row";
import { vars } from "./css-vars";

/**
 * "Built For" block — the hero's ChipRow treatment given a section heading.
 * Reuses .section__head and .chiprow; no new styles.
 */
export function ChipSection({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: string[];
}) {
  return (
    <section className="services">
      <div className="shell services__inner">
        <div className="reveal" style={vars({ "--ty": "10px" })}>
          <span className="eyebrow">{eyebrow}</span>
        </div>

        <div className="section__head">
          <h2 className="services__title lines" data-line-delay="120">
            <span className="line">
              <span>{title}</span>
            </span>
          </h2>
          {intro && (
            <p
              className="section__intro reveal"
              style={vars({ "--ty": "10px" })}
            >
              {intro}
            </p>
          )}
        </div>

        <div className="reveal" style={vars({ "--ty": "16px" })}>
          <ChipRow items={items} />
        </div>
      </div>
    </section>
  );
}
