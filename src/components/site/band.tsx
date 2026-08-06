import Link from "next/link";

import { vars } from "./css-vars";

export function Band() {
  return (
    <section className="band" aria-label="We build better">
      <ul className="shell band__list">
        <li className="reveal" style={vars({ "--ty": "28px", "--d": "0ms" })}>
          <span className="band__tile band__tile--light" data-hover="bandTile">
            We
          </span>
        </li>
        <li className="reveal" style={vars({ "--ty": "28px", "--d": "120ms" })}>
          <span className="band__tile band__tile--accent" data-hover="bandTile">
            Build
          </span>
        </li>
        <li className="reveal" style={vars({ "--ty": "28px", "--d": "240ms" })}>
          {/* The arrow tile is the band's call to action. */}
          <Link href="/platforms" aria-label="View our platforms">
            <span className="band__tile band__tile--dark" data-hover="bandTile">
              <svg className="icon" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
            </span>
          </Link>
        </li>
        <li className="reveal" style={vars({ "--ty": "28px", "--d": "360ms" })}>
          <span className="band__tile band__tile--ghost" data-hover="bandTile">
            Better
          </span>
        </li>
      </ul>
    </section>
  );
}
