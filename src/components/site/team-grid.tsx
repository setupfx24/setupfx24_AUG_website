import Image from "next/image";

import { vars } from "./css-vars";
import { TEAM_CATEGORIES } from "@/content/team";

/**
 * Team directory grouped by discipline.
 *
 * A category with no members renders blank photo frames rather than filler
 * names — the layout is ready, but nobody is invented to fill it.
 */
export function TeamGrid({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="services" id="team">
      <div className="shell services__inner">
        <div className="section__split">
          <div>
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
          </div>

          <div
            className="about__media reveal"
            style={vars({ "--ty": "16px", "--d": "120ms" })}
          >
            {/* Decorative: the heading beside it already carries the meaning. */}
            <Image
              src="/images/team_banner1.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        {TEAM_CATEGORIES.map((category) => (
          <div
            className={`team-cat team-cat--${category.id}`}
            key={category.id}
          >
            <div
              className="team-cat__head reveal"
              style={vars({ "--ty": "12px" })}
            >
              <h3 className="team-cat__title">{category.title}</h3>
              <p className="team-cat__blurb">{category.blurb}</p>
            </div>

            <ul className="team-grid">
              {category.members.length > 0
                ? category.members.map((member, i) => (
                    <li
                      className="team-card reveal"
                      key={member.name}
                      style={vars({ "--ty": "20px", "--d": `${i * 70}ms` })}
                    >
                      <div className="team-card__photo">
                        {member.image && (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 45vw"
                          />
                        )}
                      </div>
                      <h4 className="team-card__name">{member.name}</h4>
                      <h6 className="team-card__role">{member.role}</h6>
                    </li>
                  ))
                : Array.from({ length: category.placeholders }, (_, i) => (
                    <li
                      className="team-card reveal"
                      key={i}
                      style={vars({ "--ty": "20px", "--d": `${i * 70}ms` })}
                      aria-hidden="true"
                    >
                      <div className="team-card__photo"></div>
                      {/* Where the h4 name and h6 role will sit once real
                          people are added to content/team.ts. */}
                      <span className="team-card__skeleton team-card__skeleton--name" />
                      <span className="team-card__skeleton team-card__skeleton--role" />
                    </li>
                  ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
