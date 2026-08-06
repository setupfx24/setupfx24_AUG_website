import { vars } from "./css-vars";

/** `desc` is optional so the same row can carry a plain single-line item. */
export type ListItem = { title: string; desc?: string };

/**
 * The "What we do best" row pattern — numbered rows with a hover fill. Used
 * for feature lists, process steps and module lists.
 *
 * No trailing arrow badge here, unlike <Services> on the home page: these rows
 * are static content with nothing to navigate to, so an arrow would promise a
 * link that does not exist. The row hover fill still runs — site-effects only
 * wires the arrow spring when a badge is present.
 */
export function NumberedList({
  eyebrow,
  title,
  intro,
  items,
  outro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: ListItem[];
  outro?: React.ReactNode;
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

        <ul className="services__list">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="reveal"
              style={vars({ "--ty": "24px", "--d": `${i * 80}ms` })}
            >
              <div className="srow" data-srow>
                <span className="srow__idx">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                {item.desc && <p className="srow__desc">{item.desc}</p>}
              </div>
            </li>
          ))}
        </ul>

        {outro && <div className="section__outro">{outro}</div>}
      </div>
    </section>
  );
}
