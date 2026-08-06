/**
 * Is this nav item the section the visitor is currently in?
 *
 * Detail routes count as their parent section — /platforms/forex-trading-platform
 * keeps "Platforms" lit. "/" has to match exactly or it would light up
 * everywhere.
 */
export function isNavItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Primary navigation. Shared by the header bar and the overlay menu. */
export const NAV_ITEMS = [
  { label: "Home", href: "/", caret: false },
  { label: "Platforms", href: "/platforms", caret: false },
  { label: "Services", href: "/services", caret: true },
  { label: "About", href: "/about", caret: false },
  { label: "Team", href: "/team", caret: false },
  { label: "Contact", href: "/contact", caret: false },
];
