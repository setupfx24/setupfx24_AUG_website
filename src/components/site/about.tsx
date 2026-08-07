import Image from "next/image";
import Link from "next/link";

import { vars } from "./css-vars";
import { SOCIAL_LINKS } from "@/content/contact";

export function About() {
  return (
    <section className="about" id="about">
      <div className="shell about__grid">
        <div className="about__media reveal" style={vars({ "--ty": "16px" })}>
          <Image
            src="/images/banner1.png"
            alt="The SetupFX24 trading terminal running on a laptop"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="about__right">
          <h2 className="about__statement" data-words>
            We build the technology behind trading businesses —{" "}
            <span className="muted">
              platforms, back offices and risk engines, branded as yours and
              supported long after launch.
            </span>
          </h2>

          <div
            className="about__footer reveal"
            style={vars({ "--ty": "12px", "--d": "200ms" })}
          >
            <div>
              <p className="about__social-label">Find us online</p>
              <div className="about__social">
                {SOCIAL_LINKS.map((social, i) => {
                  // Placeholder links stay in-tab; only real profiles open out.
                  const isLive = social.href !== "#";
                  return (
                    <a
                      key={social.label}
                      className={
                        i === 0 ? "social-chip social-chip--accent" : "social-chip"
                      }
                      href={social.href}
                      aria-label={social.label}
                      {...(isLive
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <svg className="icon" data-hover="social">
                        <use href={`#${social.icon}`} />
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
            <Link className="pill pill--outline pill--arrow" href="/about">
              <span className="pill__scale" data-hover="pillScale">
                <span className="pill__inner">
                  About Us
                  <span className="pill__badge">
                    <svg className="icon" data-hover-arrow="right">
                      <use href="#i-arrow-right" />
                    </svg>
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
