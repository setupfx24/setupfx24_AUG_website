# Meridian FX — Frontend

Production-ready Next.js 15 (App Router) frontend for a forex trading site.

**Stack:** Next.js 15 · React 19 · TypeScript (strict) · Tailwind CSS v4 · TanStack Query · Zod · Vitest

---

## Getting started

```bash
cp .env.example .env.local   # optional — every variable has a dev default
npm install
npm run dev                  # http://localhost:3000
```

### Scripts

| Command                 | What it does                                      |
| ----------------------- | ------------------------------------------------- |
| `npm run dev`           | Dev server with Turbopack                         |
| `npm run build`         | Production build                                  |
| `npm start`             | Serve the production build                        |
| `npm run typecheck`     | `tsc --noEmit`                                    |
| `npm run lint`          | ESLint (flat config)                              |
| `npm run format`        | Prettier write                                    |
| `npm test`              | Vitest (jsdom + Testing Library)                  |
| `npm run test:coverage` | Vitest with v8 coverage                           |
| `npm run check`         | typecheck + lint + test — run this before pushing |

---

## Structure

```
src/
├── app/                        Routes (App Router)
│   ├── (marketing)/            Public pages — header, ticker, footer chrome
│   │   ├── page.tsx            Home
│   │   ├── markets/            Rates table + /markets/[symbol] detail (SSG + ISR)
│   │   ├── pricing/  about/  contact/
│   ├── (auth)/                 Login / register — minimal chrome, noindex
│   ├── (dashboard)/            Authenticated app shell, sidebar nav
│   ├── actions/                Server Actions ("use server")
│   ├── api/                    Route handlers (health, quotes proxy)
│   ├── layout.tsx              Root layout: fonts, metadata, providers, skip link
│   ├── error.tsx               Route error boundary
│   ├── global-error.tsx        Root-layout error boundary
│   ├── not-found.tsx  loading.tsx
│   └── sitemap.ts  robots.ts  manifest.ts
│
├── components/
│   ├── ui/                     Design-system primitives (Button, Card, Input, …)
│   ├── layout/                 Header, footer, navs, theme toggle
│   ├── markets/                Domain components (ticker, quote table/card)
│   ├── marketing/              Landing-page sections
│   ├── forms/                  Contact / login / register forms
│   └── providers/              Theme + React Query context
│
├── config/                     site.ts · navigation.ts · markets.ts
├── hooks/                      useQuotes, useMediaQuery, useMounted
├── lib/
│   ├── api/                    fetch wrapper, typed errors, Zod schemas, query keys
│   ├── validations/            Zod form schemas (shared client + server)
│   ├── utils/                  cn, formatters, URL helpers
│   ├── env.ts                  Validated environment access
│   └── metadata.ts             Per-page metadata builder
├── server/                     Server-only data access (`import "server-only"`)
├── types/                      Shared domain types
└── middleware.ts               Request id + auth redirect
```

Route groups (`(marketing)`, `(auth)`, `(dashboard)`) give each area its own layout
**without** adding a URL segment — `/login`, not `/auth/login`.

---

## Conventions

**Server first.** Components are Server Components unless they need state, effects or
browser APIs. `"use client"` goes on the smallest possible leaf — `MarketTicker`
fetches on the server; only `LiveWatchlist` and the navs ship JS.

**One place per concern.**

- Copy, URLs, legal text → `src/config/site.ts`
- Nav links → `src/config/navigation.ts`
- Colours, radii, motion → `@theme` in `src/app/globals.css`
- Env vars → `src/lib/env.ts` (ESLint blocks direct `process.env` reads elsewhere)

**Validate at every boundary.** Zod schemas in `lib/api/schemas.ts` guard network
responses; schemas in `lib/validations/` guard form input and are re-run server-side
in the Server Action — browser validation is a convenience, never a control.

**Secrets stay server-side.** `src/server/*` imports `server-only`, so importing it
from a Client Component is a build error. `env.server.*` throws if read in the browser.

**Theming.** Every colour is an HSL triple declared once in `:root` and overridden in
`.dark`, exposed to Tailwind via `@theme inline`. Components reference semantic names
(`bg-surface`, `text-bullish`) — never raw palette values — so a rebrand touches one file.

---

## Market data

`src/server/market-data.ts` is the single source of quotes. It calls
`MARKET_DATA_API_URL` when configured and otherwise falls back to a **deterministic**
synthetic generator seeded by symbol + time bucket — stable within a revalidation
window, so there is no hydration mismatch and no flickering prices.

To connect a real provider:

1. Set `MARKET_DATA_API_URL` and `MARKET_DATA_API_KEY` in `.env.local`.
2. Adjust `quoteSchema` in `src/lib/api/schemas.ts` to the provider's payload.
3. Map the response in `fetchUpstreamQuotes` if the shape differs.

The browser never talks to the provider directly — it polls `/api/quotes`, which keeps
the key server-side and centralises caching and rate limiting.

`export const revalidate` must be a **literal** in each page (Next statically analyses
it), so keep those in step with `REVALIDATE_SECONDS`.

---

## Before going live

- [ ] Replace `siteConfig` placeholders — company name, address, contact details
- [ ] Have compliance approve `siteConfig.riskDisclaimer`; add the `/legal/*` pages
- [ ] Add `public/og.png` (1200×630) and real PWA icons, then list them in `manifest.ts`
- [ ] Wire authentication — `middleware.ts` only checks for a session cookie's
      presence and must not be the only gate; verify sessions where data is read
- [ ] Add a Content-Security-Policy to `securityHeaders` in `next.config.ts` once
      third-party script origins are known
- [ ] Point the error boundaries at a real reporter (Sentry/Datadog)
- [ ] Set `NEXT_PUBLIC_SITE_URL` per environment — `robots.ts` blocks indexing on
      anything that is not `NODE_ENV=production`

---

## Accessibility

Skip link, visible focus rings, semantic landmarks, real `<table>` markup for rates,
`aria-live` regions on form results and polling status, direction conveyed by icon and
text as well as colour, and a global `prefers-reduced-motion` guard. Keep it that way.
