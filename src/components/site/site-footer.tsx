import Link from "next/link";

import { BrandLogo } from "./brand-logo";
import { PixelCursorTrail } from "./pixel-cursor-trail";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Platforms", href: "/platforms" },
  { label: "Contact", href: "/contact" },
];

const PLATFORM_LINKS = [
  "Forex Trading Platform",
  "Indian Trading Platform",
  "Indian Prop Firm Platform",
  "Forex Prop Firm Platform",
];

const SOCIAL_LINKS = ["LinkedIn", "Instagram", "Facebook", "YouTube"];

export function SiteFooter() {
  return (
    <footer className="footer">
      <PixelCursorTrail />
      <div className="shell footer__inner">
        <div className="footer__cta">
          <h2 className="lines" data-line-stagger="100">
            <span className="line">
              <span>Ready to launch your</span>
            </span>
            <span className="line">
              <span>trading platform?</span>
            </span>
          </h2>
          <button
            suppressHydrationWarning
            className="pill pill--light pill--arrow"
            type="button"
            data-modal
          >
            <span className="pill__scale" data-hover="pillScale">
              <span className="pill__inner">
                Book a Free Demo
                <span className="pill__badge">
                  <svg className="icon" data-hover-arrow="up-right">
                    <use href="#i-arrow-ur" />
                  </svg>
                </span>
              </span>
            </span>
          </button>
        </div>

        <div className="footer__cols">
          <div>
            <div className="footer__brand">
              <BrandLogo light />
            </div>
            <p className="footer__tagline">
              A software development company building white-label trading
              platforms for forex brokerages, Indian market brokers and prop
              firms.
            </p>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul>
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link className="alink" href={link.href}>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul>
              {PLATFORM_LINKS.map((label) => (
                <li key={label}>
                  <Link className="alink" href="/platforms">
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-title">Social</h3>
            <ul>
              {SOCIAL_LINKS.map((label) => (
                <li key={label}>
                  <a className="alink" href="#">
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__legal">
          <p>© 2026 SetupFX24. All rights reserved.</p>
          <div className="footer__legal-links">
            <a className="alink" href="#privacy" data-legal>
              <span>Privacy</span>
            </a>
            <a className="alink" href="#terms" data-legal>
              <span>Terms</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__wm" aria-hidden="true">
        SETUPFX24
      </div>
    </footer>
  );
}
