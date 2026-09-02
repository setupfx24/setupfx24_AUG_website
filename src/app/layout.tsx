import type { Metadata, Viewport } from "next";

import "./site.css";

export const metadata: Metadata = {
  title: "SetupFX — Trading Platform Development Company",
  description:
    "SetupFX builds white-label trading platforms for forex brokers, Indian market brokers and prop firms. Custom development, fast deployment, 24/7 support.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/*
          Onest is loaded by URL rather than next/font so that site.css can keep
          referring to the literal family name. The lint rule below targets the
          pages router's _document and does not apply to an app-router layout.
        */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/*
        Browser extensions (ColorZilla's `cz-shortcut-listen`, Grammarly, and
        friends) stamp attributes onto <body> before React hydrates, which
        reads as a server/client mismatch. This suppresses the warning for
        <body>'s own attributes only — it does not extend to the tree below,
        so genuine mismatches in the app still surface.
      */}
      <body suppressHydrationWarning>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
