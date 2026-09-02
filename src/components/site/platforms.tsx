import Image from "next/image";
import Link from "next/link";

import { vars } from "./css-vars";
import { PLATFORMS } from "@/content/platforms";

export function Platforms() {
  return (
    <section className="works" id="works">
      <div className="shell works__inner">
        <div className="works__head">
          <div className="reveal" style={vars({ "--ty": "10px" })}>
            <span className="eyebrow eyebrow--ring">Our Platforms</span>
          </div>
          <h2 className="works__title lines" data-line-delay="120">
            <span className="line">
              <span>Four Platforms</span>
            </span>
          </h2>
        </div>

        <ul className="works__grid">
          {PLATFORMS.map((platform, i) => (
            <li
              key={platform.slug}
              className={platform.wide ? "reveal is-wide" : "reveal"}
              style={vars({ "--ty": "48px", "--d": `${i * 90}ms` })}
            >
              <Link href={`/platforms/${platform.slug}`}>
                <article className="work-card" data-work>
                  {/* Decorative: the card already carries its own title. */}
                  <Image
                    className="work-card__bg"
                    src={platform.cardImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="work-card__scrim" aria-hidden="true"></div>
                  <div className="work-card__meta">
                    <span>{platform.meta}</span>
                    <span className="work-card__badge" data-work-badge>
                      <svg className="icon">
                        <use href="#i-arrow-ur" />
                      </svg>
                    </span>
                  </div>
                  <div className="work-card__body">
                    <h3>{platform.cardTitle}</h3>
                    <p>{platform.cardBody}</p>
                    <div className="work-card__tags">
                      {platform.tags.map((tag) => (
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
