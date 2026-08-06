import Image from "next/image";

import { vars } from "./css-vars";

export type SlideImage = { src: string; alt: string };

/**
 * Auto-advancing media slider for the right-hand column of a split section.
 *
 * Pass `slides` to fill the frames. With none it falls back to `count` empty
 * placeholder frames, so a layout can be built before the artwork exists.
 *
 * Behaviour lives in site-effects.ts keyed off [data-slider] rather than an id,
 * so a page can carry several sliders without them fighting over one selector.
 */
export function MediaSlider({
  slides = [],
  count = 3,
}: {
  slides?: SlideImage[];
  count?: number;
}) {
  const total = slides.length || count;

  return (
    <div
      className="mslider reveal"
      style={vars({ "--ty": "16px" })}
      data-slider
    >
      <div className="mslider__viewport">
        <div className="mslider__track" data-slider-track>
          {Array.from({ length: total }, (_, i) => {
            const slide = slides[i];
            return (
              <div className="mslider__slide" key={slide?.src ?? i}>
                {slide && (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mslider__dots" data-slider-dots aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span
            className={i === 0 ? "mslider__dot is-active" : "mslider__dot"}
            key={i}
          ></span>
        ))}
      </div>
    </div>
  );
}
