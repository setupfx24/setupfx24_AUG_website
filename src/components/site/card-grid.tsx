import Image from "next/image";
import Link from "next/link";

import { vars } from "./css-vars";

export type GridCard = {
  meta: string;
  title: string;
  body: string;
  tags: string[];
  href: string;
  cta?: string;
  /** Optional background art. Decorative — the card carries its own title. */
  image?: string;
  /** Renders across both columns. */
  wide?: boolean;
};

/** The home-page platform card grid, reused verbatim for other card sections. */
export function CardGrid({
  eyebrow,
  title,
  intro,
  cards,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  cards: GridCard[];
}) {
  return (
    <section className="works">
      <div className="shell works__inner">
        <div className="works__head">
          <div className="reveal" style={vars({ "--ty": "10px" })}>
            <span className="eyebrow eyebrow--ring">{eyebrow}</span>
          </div>
          <h2 className="works__title lines" data-line-delay="120">
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

        <ul className="works__grid">
          {cards.map((card, i) => (
            <li
              key={card.title}
              className={card.wide ? "reveal is-wide" : "reveal"}
              style={vars({ "--ty": "48px", "--d": `${i * 90}ms` })}
            >
              <Link href={card.href}>
                <article className="work-card" data-work>
                  {card.image && (
                    <>
                      <Image
                        className="work-card__bg"
                        src={card.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                      <div
                        className="work-card__scrim"
                        aria-hidden="true"
                      ></div>
                    </>
                  )}
                  <div className="work-card__meta">
                    <span>{card.meta}</span>
                    <span className="work-card__badge" data-work-badge>
                      <svg className="icon">
                        <use href="#i-arrow-ur" />
                      </svg>
                    </span>
                  </div>
                  <div className="work-card__body">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                    <div className="work-card__tags">
                      {card.tags.map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
