import type { CSSProperties } from "react";

/**
 * Inline CSS custom properties (--ty, --d, --sc, --o) drive the reveal
 * animations. React's CSSProperties type does not model custom properties, so
 * this keeps the cast in one place instead of at every call site.
 */
export const vars = (value: Record<string, string>) => value as CSSProperties;
