import Link from "next/link";

import { BrandLogo } from "./brand-logo";
import { vars } from "./css-vars";
import { PrimaryNav } from "./primary-nav";

export function SiteHeader() {
  return (
    <header
      className="header reveal"
      data-gated
      style={vars({ "--ty": "-14px", "--d": "150ms" })}
    >
      <div className="shell header__bar">
        <Link href="/" aria-label="SetupFX24 — home">
          <span className="brand" data-hover="brandLogo">
            <BrandLogo priority />
          </span>
        </Link>

        <PrimaryNav />

        <div className="header__right">
          <Link className="authbtn authbtn--ghost" href="/login">
            <span data-hover="menuBtn">Login</span>
          </Link>
          <Link className="authbtn authbtn--solid" href="/signup">
            <span data-hover="menuBtn">Sign Up</span>
          </Link>
          {/* Below 1024px the primary nav is hidden, so this stays the way in. */}
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
