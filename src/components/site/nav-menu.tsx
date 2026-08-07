"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "./brand-logo";
import { isNavItemActive, NAV_ITEMS } from "./nav-items";
import { WHATSAPP_CHAT_HREF } from "@/content/contact";

const DELAYS = ["80ms", "125ms", "170ms", "215ms", "305ms"];

export function NavMenu() {
  const pathname = usePathname();

  return (
    <div
      className="navmenu"
      id="navMenu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      hidden
    >
      <div className="shell navmenu__top">
        <div className="navmenu__brand">
          <BrandLogo light />
        </div>
        <button
          suppressHydrationWarning
          className="navmenu__close"
          type="button"
          id="menuClose"
        >
          <svg className="icon">
            <use href="#i-x" />
          </svg>
          Close
        </button>
      </div>

      <nav className="shell navmenu__nav" aria-label="Overlay">
        <ul>
          {NAV_ITEMS.map((item, i) => {
            const active = isNavItemActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  className={
                    active ? "navmenu__item is-active" : "navmenu__item"
                  }
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  data-menu-link
                  style={{ transitionDelay: DELAYS[i] }}
                >
                  <span className="navmenu__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="navmenu__label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="shell navmenu__bottom">
        <span>
          <Link className="navmenu__cta" href="/login" data-menu-link>
            Login
          </Link>
          {" · "}
          <Link className="navmenu__cta" href="/signup" data-menu-link>
            Sign Up
          </Link>
        </span>
        <a
          suppressHydrationWarning
          className="navmenu__cta"
          href={WHATSAPP_CHAT_HREF}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Free Demo →
        </a>
      </div>
    </div>
  );
}
