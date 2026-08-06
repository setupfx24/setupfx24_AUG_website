import { vars } from "./css-vars";

export type FaqItem = { q: string; a: string };

/**
 * Accordion built from the existing card border, radius and surface tokens —
 * no library. The toggle reuses the sprite's #i-x, rotated 45deg to read "+".
 * Open/close is wired in site-effects via [data-faq].
 */
export function Faq({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: FaqItem[];
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
        </div>

        <div className="faq">
          {items.map((item, i) => (
            <div
              className="faq__item reveal"
              data-faq
              data-open="false"
              key={item.q}
              style={vars({ "--ty": "16px", "--d": `${i * 60}ms` })}
            >
              <button
                suppressHydrationWarning
                className="faq__q"
                type="button"
                data-faq-toggle
                aria-expanded="false"
              >
                <span>{item.q}</span>
                <span className="faq__icon">
                  <svg className="icon">
                    <use href="#i-x" />
                  </svg>
                </span>
              </button>
              <div className="faq__a">
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
