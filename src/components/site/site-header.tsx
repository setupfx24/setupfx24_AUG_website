import Link from "next/link";

import { BrandLogo } from "./brand-logo";
import { vars } from "./css-vars";
import { PrimaryNav } from "./primary-nav";
import { WHATSAPP_CHAT_HREF } from "@/content/contact";

export function SiteHeader() {
  return (
    <header
      className="header reveal"
      data-gated
      style={vars({ "--ty": "-14px", "--d": "150ms" })}
    >
      <div className="shell header__bar">
        <Link href="/" aria-label="SetupFX — home">
          <span className="brand" data-hover="brandLogo">
            <BrandLogo priority />
          </span>
        </Link>

        <PrimaryNav />

        <div className="header__right">
          {/* Same destination as every "Book a Free Demo" on the site. */}
          <a
            className="authbtn authbtn--solid"
            href={WHATSAPP_CHAT_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span data-hover="menuBtn">Get Started</span>
          </a>
          {/* Below 1200px the primary nav is hidden, so this stays the way in. */}
          <button
            suppressHydrationWarning
            className="menu-btn"
            type="button"
            id="menuOpen"
            aria-haspopup="dialog"
          >
            <span data-hover="menuBtn">
              <svg className="icon">
                <use href="#i-grid" />
              </svg>
              <span className="menu-btn__label">Menu</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
