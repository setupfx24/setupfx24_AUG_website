import type { Metadata } from "next";
import Link from "next/link";

import { CardGrid, type GridCard } from "@/components/site/card-grid";
import { ComparisonTable } from "@/components/site/comparison-table";
import { CtaPanel } from "@/components/site/cta-panel";
import { NumberedList } from "@/components/site/numbered-list";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import { PLATFORMS } from "@/content/platforms";

export const metadata: Metadata = {
  title:
    "Trading Platforms | Forex, Indian Market & Prop Firm Software — SetupFX",
  description:
    "Four white-label trading platforms — forex, Indian markets, and prop firm software for both. Built, branded and deployed by SetupFX.",
};

/** Same source as the home grid and the detail pages, so copy stays in sync. */
const PLATFORM_CARDS: GridCard[] = PLATFORMS.map((platform) => ({
  meta: platform.meta,
  title: platform.cardTitle,
  body: platform.cardBody,
  tags: platform.tags,
  href: `/platforms/${platform.slug}`,
  image: platform.cardImage,
  wide: platform.wide,
}));

const INCLUDED = [
  {
    title: "Trading terminal",
    desc: "Web and mobile. Charting, order entry, positions and account history.",
  },
  {
    title: "Admin back office",
    desc: "Users, funds, risk parameters, reports and audit logs in one console.",
  },
  {
    title: "Risk engine",
    desc: "Real-time exposure, limits and automated controls that run without supervision.",
  },
  {
    title: "Client portal",
    desc: "Onboarding, KYC upload, deposits, withdrawals and statements.",
  },
  {
    title: "Reporting suite",
    desc: "Trade, revenue, exposure and performance dashboards.",
  },
  {
    title: "White-label branding",
    desc: "Your logo, colours, domain and app listings. Nothing points back to us.",
  },
];

const MODULES = [
  {
    title: "CRM & client management",
    desc: "Leads, pipelines and client lifecycle in one place.",
  },
  {
    title: "Payment gateways",
    desc: "Multiple providers, automated deposits and withdrawal approvals.",
  },
  {
    title: "KYC & AML",
    desc: "Document upload, verification workflows and audit trails.",
  },
  {
    title: "Copy & social trading",
    desc: "Let clients follow selected strategies.",
  },
  {
    title: "IB & affiliate system",
    desc: "Multi-tier partners with automated commission tracking.",
  },
  {
    title: "Mobile apps",
    desc: "Native Android and iOS, published under your brand.",
  },
  {
    title: "Liquidity integration",
    desc: "Connect your LPs with configurable routing.",
  },
  {
    title: "Analytics",
    desc: "Revenue, exposure, cohort and performance dashboards.",
  },
];

export default function PlatformsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Four flagship platforms"
        title={["Trading platforms,", "built and branded", "as yours"]}
        sub="Complete systems — terminal, back office, risk engine and reporting. Deployed under your name, configured to your business model."
        ctas={[
          { label: "Book a Free Demo", whatsapp: true },
          { label: "Compare Platforms", href: "#compare" },
        ]}
        chips={["Forex", "Indian Markets", "Prop Firms", "Custom Builds"]}
      />

      <CardGrid
        eyebrow="Our products"
        title="Four platforms. One technology partner."
        intro="Each one is a full system, not a template. Run one, or several under a single brand."
        cards={PLATFORM_CARDS}
      />

      <NumberedList
        eyebrow="Standard in every build"
        title="The core system ships with all four"
        intro="These are not add-ons. Every platform we deliver includes them."
        items={INCLUDED}
      />

      <ComparisonTable
        eyebrow="Side by side"
        title="Which platform fits your business?"
        outro={
          <>
            Still deciding? Send us your business model — we&apos;ll tell you
            which one fits, and tell you honestly if we&apos;re not the right
            fit.{" "}
            <Link className="alink" href="/contact">
              <span>Talk to our team →</span>
            </Link>
          </>
        }
      />

      <NumberedList
        eyebrow="Extend the core"
        title="Add the modules your model needs"
        items={MODULES}
      />

      <CtaPanel
        eyebrow="Next step"
        title="See the platform before you commit"
        body="Book a walkthrough. We'll show you the live system, the admin panel, and give you a written scope and timeline."
        ctas={[
          { label: "Book a Free Demo", whatsapp: true },
          { label: "WhatsApp Us", whatsapp: true },
        ]}
        micro="No obligation. No sales pressure."
      />
    </SiteShell>
  );
}
