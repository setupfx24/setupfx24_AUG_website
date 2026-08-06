import Image from "next/image";

import { vars } from "./css-vars";

/** One per carousel slide — swapped in step with the copy by site-effects. */
const TILE_IMAGES = [
  "/images/icon1.png",
  "/images/icon2.png",
  "/images/icon3.png",
];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="liquid" id="liquid">
        {/* Plain <img>: the liquid-reveal canvas measures and paints over this
            exact element, so it must not be wrapped by next/image. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="liquidBase"
          src="/images/base_image.png"
          alt="SetupFX24 trading platform"
          fetchPriority="high"
          decoding="async"
        />
        <canvas id="liquidCanvas" aria-hidden="true"></canvas>
      </div>
      <div className="hero__vignette"></div>
      <div
        className="hero__watermark reveal"
        data-gated
        style={vars({ "--ty": "20px", "--o": "0.4", "--d": "300ms" })}
      >
        SETUPFX24
      </div>

      <div className="shell hero__grid">
        <div className="hero__left">
          <div
            className="reveal"
            data-gated
            style={vars({ "--ty": "10px", "--d": "200ms" })}
          >
            <span className="eyebrow">Software Development Company</span>
          </div>

          <h1
            className="hero__title lines"
            data-gated
            data-line-delay="250"
            data-line-stagger="120"
          >
            <span className="line">
              <span>Trading platforms</span>
            </span>
            <span className="line">
              <span>built for brokers</span>
            </span>
            <span className="line">
              <span>and prop firms</span>
            </span>
          </h1>

          <div
            className="hero__ctas reveal"
            data-gated
            style={vars({ "--ty": "10px", "--d": "750ms" })}
          >
            <button
              suppressHydrationWarning
              className="pill pill--dark pill--arrow"
              type="button"
              data-modal
            >
              <span className="pill__scale" data-hover="pillScale">
                <span className="pill__inner">
                  Book a Free Demo
                  <span className="pill__badge">
                    <svg className="icon" data-hover-arrow="right">
                      <use href="#i-arrow-right" />
                    </svg>
                  </span>
                </span>
              </span>
            </button>
            <button
              suppressHydrationWarning
              className="pill pill--outline"
              type="button"
              data-scroll="works"
            >
              <span className="pill__scale" data-hover="pillScale">
                <span className="pill__inner">View Platforms</span>
              </span>
            </button>
          </div>
        </div>

        <div className="hero__right">
          {/* Hero carousel card */}
          <div
            className="hcard reveal"
            data-gated
            style={vars({ "--ty": "16px", "--sc": "0.96", "--d": "400ms" })}
          >
            <div
              suppressHydrationWarning
              className="hcard__row"
              id="hcardAdvance"
              role="button"
              tabIndex={0}
              aria-label="Next highlight"
            >
              <div className="hcard__tile">
                {TILE_IMAGES.map((src, i) => (
                  <Image
                    key={src}
                    className={
                      i === 0 ? "hcard__tile-img is-active" : "hcard__tile-img"
                    }
                    data-tile-img
                    src={src}
                    alt=""
                    fill
                    sizes="128px"
                  />
                ))}
              </div>
              <div className="hcard__panel">
                <div className="hcard__slot" id="hcardSlot">
                  <div className="hcard__item" data-state="active">
                    <span className="hcard__caption">White-label</span>
                    <span className="hcard__title">
                      Your brand, our engine.
                    </span>
                  </div>
                  <div className="hcard__item" data-state="below">
                    <span className="hcard__caption">Prop firm engine</span>
                    <span className="hcard__title">Rules enforced live.</span>
                  </div>
                  <div className="hcard__item" data-state="below">
                    <span className="hcard__caption">Deployment</span>
                    <span className="hcard__title">Live in weeks.</span>
                  </div>
                </div>
                <div className="hcard__bottom">
                  <div className="hcard__dots" id="hcardDots">
                    <span className="hcard__dot is-active"></span>
                    <span className="hcard__dot"></span>
                    <span className="hcard__dot"></span>
                  </div>
                  <div className="hcard__nav">
                    <button
                      suppressHydrationWarning
                      className="hcard__prev"
                      type="button"
                      id="hcardPrev"
                      aria-label="Previous"
                    >
                      <svg className="icon">
                        <use href="#i-arrow-right" />
                      </svg>
                    </button>
                    <button
                      suppressHydrationWarning
                      type="button"
                      id="hcardNext"
                      aria-label="Next"
                    >
                      <svg className="icon">
                        <use href="#i-arrow-right" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="shell hero__status reveal"
        data-gated
        style={vars({ "--ty": "0px", "--d": "900ms" })}
      >
        <span>In-house development team</span>
        <span className="hero__status-mid">
          White-label, deployed worldwide
        </span>
        <span className="hero__status-end">
          Scroll to explore <span aria-hidden="true">↓</span>
        </span>
      </div>
    </section>
  );
}
