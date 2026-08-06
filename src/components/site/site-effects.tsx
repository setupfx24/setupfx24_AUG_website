"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { initSite } from "@/lib/site-effects";

/**
 * Mounts every interactive behaviour once the markup is in the DOM. Renders
 * nothing — the sections above it are plain server-rendered HTML.
 *
 * Keyed on the pathname: a client-side route change swaps the page markup
 * without remounting the shell, so the effects have to re-bind to the new DOM.
 */
export function SiteEffects() {
  const pathname = usePathname();
  useEffect(() => initSite(), [pathname]);
  return null;
}
