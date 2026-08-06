import Image from "next/image";
import Link from "next/link";

import { ChipRow } from "./chip-row";
import { vars } from "./css-vars";

type Cta = { label: string; href?: string; modal?: boolean };

/**
 * Inner-page hero. Same eyebrow / title / pill vocabulary as the home hero,
 * without the full-viewport liquid canvas that only the landing page carries.
 *
 * `bgImage` fills the band with a photograph behind a light scrim. The scrim is
 * deliberately white rather than dark so every text colour — and the header
 * sitting over it — stays exactly as it is on the plain white heroes.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  ctas = [],
  chips,
  bgImage,
}: {
  eyebrow: string;
  title: string[];
  sub: string;
  ctas?: Cta[];
  chips?: string[];
  bgImage?: string;
}) {
  return (
    <section className={`page-hero${bgImage ? " page-hero--media" : ""}`}>
      {bgImage && (
        <>
          {/* Decorative: the heading already carries the meaning. */}
          <Image
            className="page-hero__bg"
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="page-hero__scrim" aria-hidden="true" />
        </>
      )}

      <div className="shell page-hero__inner">
        <div className="reveal" style={vars({ "--ty": "10px" })}>
          <span className="eyebrow">{eyebrow}</span>
        </div>

        <h1
          className="page-hero__title lines"
          data-line-delay="100"
          data-line-stagger="120"
        >
          {title.map((line) => (
            <span className="line" key={line}>
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <p
          className="page-hero__sub reveal"
          style={vars({ "--ty": "10px", "--d": "150ms" })}
        >
          {sub}
        </p>

        {ctas.length > 0 && (
          <div
            className="hero__ctas reveal"
            style={vars({ "--ty": "10px", "--d": "250ms" })}
          >
            {ctas.map((cta, i) =>
              cta.modal ? (
                <button
                  suppressHydrationWarning
                  key={cta.label}
                  className={
                    i === 0
                      ? "pill pill--dark pill--arrow"
                      : "pill pill--outline"
                  }
                  type="button"
                  data-modal
                >
                  <span className="pill__scale" data-hover="pillScale">
                    <span className="pill__inner">
                      {cta.label}
                      {i === 0 && (
                        <span className="pill__badge">
                          <svg className="icon" data-hover-arrow="right">
                            <use href="#i-arrow-right" />
                          </svg>
                        </span>
                      )}
                    </span>
                  </span>
                </button>
              ) : (
                <Link
                  key={cta.label}
                  className={
                    i === 0
                      ? "pill pill--dark pill--arrow"
                      : "pill pill--outline"
                  }
                  href={cta.href ?? "#"}
                >
                  <span className="pill__scale" data-hover="pillScale">
                    <span className="pill__inner">
                      {cta.label}
                      {i === 0 && (
                        <span className="pill__badge">
                          <svg className="icon" data-hover-arrow="right">
                            <use href="#i-arrow-right" />
                          </svg>
                        </span>
                      )}
                    </span>
                  </span>
                </Link>
              ),
            )}
          </div>
        )}

        {chips && (
          <div
            className="reveal"
            style={vars({ "--ty": "10px", "--d": "350ms" })}
          >
            <ChipRow items={chips} />
          </div>
        )}
      </div>
    </section>
  );
}
