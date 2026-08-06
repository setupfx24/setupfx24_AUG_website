import Image from "next/image";
import Link from "next/link";

import { vars } from "./css-vars";

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
                <a
                  className="social-chip social-chip--accent"
                  href="#"
                  aria-label="X / Twitter"
                >
                  <svg className="icon" data-hover="social">
                    <use href="#i-x" />
                  </svg>
                </a>
                <a className="social-chip" href="#" aria-label="Behance">
                  <svg className="icon" data-hover="social">
                    <use href="#i-dot" />
                  </svg>
                </a>
                <a className="social-chip" href="#" aria-label="Dribbble">
                  <svg className="icon" data-hover="social">
                    <use href="#i-dot" />
                  </svg>
                </a>
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
