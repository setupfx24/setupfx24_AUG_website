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
  { label: "Home", href: "/" },
  { label: "Platforms", href: "/platforms" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
