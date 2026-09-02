"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isNavItemActive, NAV_ITEMS } from "./nav-items";

/**
 * Header navigation. Client-side only because the active item is derived from
 * the current route.
 *
 * The active link drops `data-hover="navLift"`: that preset writes an inline
 * opacity of 0.8, which would otherwise beat the active rule in the cascade.
 */
export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav className="nav-primary" aria-label="Primary">
      <ul>
        {NAV_ITEMS.map((item) => {
          const active = isNavItemActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                <span data-hover={active ? undefined : "navLift"}>
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
