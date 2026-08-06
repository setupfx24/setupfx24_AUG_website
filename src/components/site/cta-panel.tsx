import Link from "next/link";

import { vars } from "./css-vars";

type Cta = { label: string; href?: string; modal?: boolean };

/** Closing CTA, built on the dark stats panel already used on the home page. */
export function CtaPanel({
  eyebrow,
  title,
  body,
  ctas,
  micro,
}: {
  eyebrow: string;
  title: string;
  body: string;
  ctas: Cta[];
  micro?: string;
}) {
  return (
    <section className="stats">
      <div className="shell stats__inner">
        <div
          className="stats__panel reveal"
          style={vars({ "--ty": "40px", "--sc": "0.99" })}
        >
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h2 className="stats__title lines" data-line-delay="120">
            <span className="line">
              <span>{title}</span>
            </span>
          </h2>

          <p
            className="section__intro"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {body}
          </p>

          <div className="hero__ctas" style={{ marginTop: "2rem" }}>
            {ctas.map((cta, i) => {
              const cls =
                i === 0 ? "pill pill--light pill--arrow" : "pill pill--outline";
              const inner = (
                <span className="pill__scale" data-hover="pillScale">
                  <span className="pill__inner">
                    {cta.label}
                    {i === 0 && (
                      <span className="pill__badge">
                        <svg className="icon" data-hover-arrow="up-right">
                          <use href="#i-arrow-ur" />
                        </svg>
                      </span>
                    )}
                  </span>
                </span>
              );
              return cta.modal ? (
                <button
                  suppressHydrationWarning
                  className={cls}
                  type="button"
                  data-modal
                  key={cta.label}
                >
                  {inner}
                </button>
              ) : (
                <Link className={cls} href={cta.href ?? "#"} key={cta.label}>
                  {inner}
                </Link>
              );
            })}
          </div>

          {micro && (
            <p
              className="section__outro"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {micro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
