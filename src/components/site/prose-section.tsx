import { vars } from "./css-vars";

/**
 * Overview prose block.
 *
 * Same wrapper, eyebrow and animated title as NumberedList — only the body
 * differs, using the existing .section__intro type scale. No new CSS.
 */
export function ProseSection({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string[];
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
          {body.map((paragraph, i) => (
            <p
              key={paragraph.slice(0, 32)}
              className="section__intro reveal"
              style={vars({ "--ty": "10px", "--d": `${i * 90}ms` })}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
