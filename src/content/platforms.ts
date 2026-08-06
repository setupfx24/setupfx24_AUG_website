import type { FaqItem } from "@/components/site/faq";
import type { ListItem } from "@/components/site/numbered-list";

/**
 * The four flagship products.
 *
 * Single source for the home-page card grid and every /platforms/[slug] page,
 * so a copy change lands in both places at once.
 */
export type Platform = {
  slug: string;
  /** Card meta line on the home grid, and the hero eyebrow on the detail page. */
  meta: string;
  /** Card title on the home grid. */
  cardTitle: string;
  cardBody: string;
  /** Background art behind the card on the home grid. Decorative only. */
  cardImage: string;
  tags: string[];
  seo: { title: string; description: string };
  /** Hero H1, one array entry per rendered line. */
  heroTitle: string[];
  heroSub: string;
  overview: { title: string; body: string[] };
  features: { title: string; items: ListItem[] };
  console: { title: string; items: ListItem[] };
  audience: { title: string; items: string[] };
  /** Prop-firm pages only: the configurable rule set. */
  rules?: { title: string; intro: string; items: string[] };
  faq: FaqItem[];
  cta: { title: string; body: string; label: string };
};

export const PLATFORMS: Platform[] = [
  {
    slug: "forex-trading-platform",
    meta: "Global Markets",
    cardTitle: "Forex Trading Platform",
    cardBody:
      "A complete multi-asset forex trading platform for brokerages operating in international markets.",
    cardImage: "/images/box_bg1.png",
    tags: ["Liquidity Bridge", "MAM/PAMM", "Copy Trading"],
    seo: {
      title:
        "Forex Trading Platform Development | White Label Forex Software — SetupFX24",
      description:
        "Launch your forex brokerage with a white-label multi-asset trading platform. Liquidity integration, copy trading, MAM/PAMM, IB module and full back office.",
    },
    heroTitle: ["Forex Trading Platform", "for Global Brokerages"],
    heroSub:
      "A complete multi-asset trading system — branded as yours, integrated with your liquidity, and ready for real client volume.",
    overview: {
      title: "Everything a Brokerage Needs, in One System",
      body: [
        "Running a forex brokerage means managing three things at once: the client experience, the risk book, and the operations behind both. Our platform covers all three.",
        "Clients get a fast, clean trading terminal on web and mobile. Your dealing team gets real-time exposure and risk controls. Your operations team gets a back office that handles funding, verification, reporting and partner commissions without spreadsheets.",
      ],
    },
    features: {
      title: "Platform Features",
      items: [
        {
          title: "Multi-Asset Trading",
          desc: "Forex pairs, precious metals, indices, energies, commodities and crypto CFDs from a single account.",
        },
        {
          title: "Advanced Charting",
          desc: "Multiple timeframes, technical indicators, drawing tools and chart-based order placement.",
        },
        {
          title: "Complete Order Types",
          desc: "Market, limit, stop, stop-limit, trailing stops, partial close and hedging support.",
        },
        {
          title: "Liquidity Bridge Integration",
          desc: "Connect your liquidity providers with configurable routing, markup and spread control.",
        },
        {
          title: "Risk Management Engine",
          desc: "Real-time exposure monitoring, margin calls, stop-out levels and per-group risk rules.",
        },
        {
          title: "Copy Trading",
          desc: "Allow clients to follow selected strategy providers with configurable allocation.",
        },
        {
          title: "MAM / PAMM Accounts",
          desc: "Money manager structures with automated allocation and performance fee calculation.",
        },
        {
          title: "IB & Affiliate Module",
          desc: "Multi-tier partner hierarchy with automated commission tracking and payouts.",
        },
        {
          title: "Client Portal",
          desc: "Registration, KYC upload, deposits, withdrawals, account history and statements.",
        },
        {
          title: "Mobile Applications",
          desc: "Native Android and iOS trading apps under your brand.",
        },
      ],
    },
    console: {
      title: "Full Control From a Single Console",
      items: [
        { title: "Client account creation, grouping and permission management" },
        { title: "Symbol, spread, leverage, swap and commission configuration" },
        { title: "Deposit and withdrawal approval workflows" },
        { title: "Live exposure and open position monitoring" },
        { title: "Trade, revenue and client activity reports" },
        { title: "Staff roles, permissions and audit logging" },
      ],
    },
    audience: {
      title: "Built For",
      items: [
        "New brokerages launching their first platform",
        "Established brokers migrating from a limiting legacy system",
        "White-label partners who want their own technology stack",
        "Firms expanding into new markets or asset classes",
      ],
    },
    faq: [
      {
        q: "Can we connect our own liquidity provider?",
        a: "Yes. The bridge supports LP integration with configurable routing and markup.",
      },
      {
        q: "Is the platform available on mobile?",
        a: "Yes — native Android and iOS apps, published under your brand.",
      },
      {
        q: "Can we set different spreads and leverage for different client groups?",
        a: "Yes. Group-based configuration is standard.",
      },
      {
        q: "How is client data secured?",
        a: "Encrypted data handling, role-based access and audit logging are built in. Hosting and security architecture are agreed during scoping.",
      },
    ],
    cta: {
      title: "See the Forex Platform in Action",
      body: "Tell us what you are building. We will walk you through the architecture and give you a clear scope and timeline.",
      label: "Book Your Demo",
    },
  },

  {
    slug: "indian-trading-platform",
    meta: "Indian Exchanges",
    cardTitle: "Indian Trading Platform",
    cardBody:
      "A trading application built for Indian market participants, aligned with domestic exchange workflows.",
    cardImage: "/images/box_bg2.png",
    tags: ["Equity & F&O", "RMS", "Back Office"],
    seo: {
      title:
        "Indian Trading Platform Development | Stock & F&O Trading Software — SetupFX24",
      description:
        "Custom trading platform development for Indian markets — equity, F&O, currency and commodity segments with back office, RMS and mobile apps.",
    },
    heroTitle: ["Trading Platform Built", "for Indian Markets"],
    heroSub:
      "A trading application designed around Indian exchange workflows, instruments and trader expectations — delivered under your brand.",
    overview: {
      title: "Designed for How India Trades",
      body: [
        "Indian traders expect speed, clean order entry and instant access to positions and margins. Indian brokers need something else entirely: risk controls, ledger accuracy and reporting that stands up to scrutiny.",
        "Our Indian Trading Platform is built for both. Clients get a responsive terminal across web and mobile covering equity, derivatives, currency and commodity segments. Your operations team gets a back office designed around domestic broking workflows.",
      ],
    },
    features: {
      title: "Platform Features",
      items: [
        {
          title: "Multi-Segment Coverage",
          desc: "Equity, futures and options, currency derivatives and commodities in one interface.",
        },
        {
          title: "Fast Order Entry",
          desc: "Quick order windows, hotkeys, basket orders and one-click modification.",
        },
        {
          title: "Order Type Support",
          desc: "Market, limit, stop-loss, stop-loss market, bracket and cover order structures.",
        },
        {
          title: "Live Market Data",
          desc: "Real-time quotes, market depth, and watchlists with custom grouping.",
        },
        {
          title: "Charting & Analysis",
          desc: "Technical indicators, multiple timeframes and chart-based order placement.",
        },
        {
          title: "Margin & Risk Management",
          desc: "Real-time margin calculation, exposure limits, square-off rules and RMS controls.",
        },
        {
          title: "Positions & P&L",
          desc: "Live position tracking, realised and unrealised P&L, holdings view.",
        },
        {
          title: "Back Office & Ledger",
          desc: "Client ledgers, contract notes, obligation statements and settlement reporting.",
        },
        {
          title: "Client Onboarding",
          desc: "Digital account opening flow with document upload and verification workflow.",
        },
        {
          title: "Mobile Applications",
          desc: "Android and iOS apps built for Indian trading habits.",
        },
      ],
    },
    console: {
      title: "Operations Control Panel",
      items: [
        { title: "Client master, grouping and branch/sub-broker hierarchy" },
        { title: "Brokerage plan configuration per client or group" },
        { title: "Margin, exposure and RMS rule management" },
        { title: "Fund transfer, payout and ledger reconciliation" },
        { title: "Segment-wise trade and revenue reporting" },
        { title: "Role-based staff access with full audit trail" },
      ],
    },
    audience: {
      title: "Built For",
      items: [
        "Broking firms building a proprietary client-facing platform",
        "Sub-broker and authorised person networks needing branded technology",
        "Fintech startups entering the Indian retail trading space",
        "Existing brokers replacing dated third-party terminals",
      ],
    },
    faq: [
      {
        q: "Which segments does the platform support?",
        a: "Equity, F&O, currency derivatives and commodities.",
      },
      {
        q: "Can it handle a sub-broker hierarchy?",
        a: "Yes — multi-level branch and partner structures with independent brokerage plans.",
      },
      {
        q: "Do you provide the mobile apps?",
        a: "Yes, Android and iOS under your brand.",
      },
      {
        q: "Does the platform handle exchange connectivity and compliance filings?",
        a: "We build the software layer and integrate with the data and execution infrastructure you are authorised to use. Exchange memberships, regulatory registrations and compliance filings remain with your firm — please confirm requirements with your compliance advisor early in the project.",
      },
    ],
    cta: {
      title: "Build Your Indian Trading Platform",
      body: "Send us your segments, client base and back-office requirements. We will come back with a scope and a timeline.",
      label: "Schedule a Demo",
    },
  },

  {
    slug: "indian-prop-firm-platform",
    meta: "Funded Trader Model",
    cardTitle: "Indian Prop Firm Platform",
    cardBody:
      "A full prop-firm ecosystem tuned to Indian market instruments and trader expectations.",
    cardImage: "/images/box_bg3.png",
    tags: ["Challenge Engine", "Payouts"],
    seo: {
      title:
        "Indian Prop Firm Trading Platform | Funded Trader Software — SetupFX24",
      description:
        "Launch your prop firm with a complete evaluation and funded-account platform built for Indian market instruments. Challenge engine, rule automation and payouts.",
    },
    heroTitle: ["Prop Firm Platform", "for Indian Markets"],
    heroSub:
      "Run evaluations, monitor funded traders and automate payouts — on a platform built around Indian instruments and trader behaviour.",
    overview: {
      title: "The Complete Funded-Trader Ecosystem",
      body: [
        "A prop firm is three businesses in one: a marketing engine that sells challenges, a risk system that enforces rules without human error, and an operations desk that pays traders accurately and on time.",
        "Our Indian Prop Firm Platform handles all three. You define the model — challenge phases, targets, drawdown limits, instruments, pricing — and the system enforces it automatically, around the clock.",
      ],
    },
    features: {
      title: "Platform Features",
      items: [
        {
          title: "Configurable Challenge Engine",
          desc: "One-phase, two-phase or instant-funding models with parameters you control.",
        },
        {
          title: "Automated Rule Enforcement",
          desc: "Profit targets, daily loss limits, maximum drawdown, minimum trading days and consistency rules applied in real time.",
        },
        {
          title: "Live Account Monitoring",
          desc: "Every account tracked continuously, with automatic breach detection and account status changes.",
        },
        {
          title: "Trader Dashboard",
          desc: "Traders see objectives, progress, equity curve, statistics and rule status in one place.",
        },
        {
          title: "Instrument & Session Controls",
          desc: "Restrict instruments, lot sizes, holding periods or trading windows as your model requires.",
        },
        {
          title: "Payout Management",
          desc: "Payout requests, approval workflow, profit-split calculation and payment records.",
        },
        {
          title: "Checkout & Payment Integration",
          desc: "Challenge purchase flow with multiple payment methods and automated account provisioning.",
        },
        {
          title: "Affiliate & Referral System",
          desc: "Track partners, apply discount codes and calculate commissions automatically.",
        },
        {
          title: "Analytics for Operators",
          desc: "Pass rates, breach reasons, revenue by plan, trader cohort behaviour and payout exposure.",
        },
        {
          title: "Admin Console",
          desc: "Create plans, adjust rules, review accounts, manage traders and handle disputes.",
        },
      ],
    },
    rules: {
      title: "Your Model, Your Parameters",
      intro:
        "Every prop firm competes on its rule set. Yours should not be locked to a template.",
      items: [
        "Account sizes and pricing tiers",
        "Profit target percentages per phase",
        "Daily loss and overall drawdown limits (static or trailing)",
        "Minimum and maximum trading days",
        "Consistency and lot-size restrictions",
        "Profit split percentages and payout cycles",
        "Free retry, reset and scaling-plan logic",
      ],
    },
    console: {
      title: "Run the Programme From One Console",
      items: [
        { title: "Create plans, adjust rules and clone configurations" },
        { title: "Review accounts, trade history and breach events" },
        { title: "Manage traders, resets and upgrades" },
        { title: "Handle disputes with a documented audit trail" },
        { title: "Track pass rates, breach reasons and revenue by plan" },
        { title: "Monitor payout exposure across the book" },
      ],
    },
    audience: {
      title: "Built For",
      items: [
        "New prop firms launching in the Indian market",
        "Trading educators converting an audience into a funded program",
        "Existing firms outgrowing a rented or limited platform",
        "Operators running multiple brands from one back end",
      ],
    },
    faq: [
      {
        q: "Can we design our own challenge rules?",
        a: "Yes. Every parameter is configurable, and custom rule logic can be developed.",
      },
      {
        q: "How fast are rule breaches detected?",
        a: "Monitoring runs continuously, with breaches actioned automatically rather than reviewed manually.",
      },
      {
        q: "Can we run multiple plans at once?",
        a: "Yes — unlimited plans, each with independent pricing and rules.",
      },
      {
        q: "Does it handle payouts?",
        a: "The platform manages the request, approval and calculation workflow, and integrates with your payment provider for disbursement.",
      },
      {
        q: "Is this a regulated activity?",
        a: "Prop firm models sit in a developing regulatory area, and treatment varies by jurisdiction and by how the offering is structured. We supply the technology; you should take independent legal advice on how your specific model must be structured and disclosed in India.",
      },
    ],
    cta: {
      title: "Launch Your Prop Firm",
      body: "Send us your challenge model and target trader base. We will show you the engine running your rules.",
      label: "Book a Demo",
    },
  },

  {
    slug: "forex-prop-firm-platform",
    meta: "Global Funded Trading",
    cardTitle: "Forex Prop Firm Platform",
    cardBody:
      "Everything you need to launch and scale an international forex prop firm, under your own brand.",
    cardImage: "/images/box_bg4.png",
    tags: ["Multi-phase", "KYC", "Payout Automation"],
    seo: {
      title:
        "Forex Prop Firm Platform | White Label Funded Trader Software — SetupFX24",
      description:
        "Complete forex prop firm software — challenge engine, real-time rule enforcement, trader dashboard, payment integration and payout automation. Fully white-labelled.",
    },
    heroTitle: ["Forex Prop Firm Platform", "for Global Operators"],
    heroSub:
      "Everything required to sell challenges, evaluate traders, fund accounts and manage payouts — under your brand, in your rules.",
    overview: {
      title: "Built to Scale With Your Firm",
      body: [
        "The global prop firm market moves fast. Traders compare rule sets, payout speed and platform quality before they buy — and they talk publicly when any of the three disappoints.",
        "Our Forex Prop Firm Platform is engineered for that environment: automated evaluation, transparent trader-facing metrics, reliable performance during volatile sessions, and an operator console that gives you full visibility into risk and revenue.",
      ],
    },
    features: {
      title: "Platform Features",
      items: [
        {
          title: "Multi-Model Challenge Engine",
          desc: "Single-phase, two-phase, three-phase or instant funding, running simultaneously.",
        },
        {
          title: "Real-Time Rule Enforcement",
          desc: "Drawdown, daily loss, profit targets, trading days and consistency rules enforced automatically.",
        },
        {
          title: "Trader Portal",
          desc: "Objectives, live progress, statistics, certificates, payout history and support access.",
        },
        {
          title: "Trading Terminal Integration",
          desc: "Deploy with our own terminal or integrate with the trading environment your traders expect.",
        },
        {
          title: "Instrument & News Restrictions",
          desc: "Configure permitted instruments, weekend holding and news-trading rules.",
        },
        {
          title: "Scaling Plans",
          desc: "Automated account growth for consistently profitable traders.",
        },
        {
          title: "Payout Automation",
          desc: "Request workflow, profit split calculation, approval chain and payment integration.",
        },
        {
          title: "Checkout & Billing",
          desc: "Multi-currency payment options, discount codes and automatic account delivery.",
        },
        {
          title: "Affiliate Network",
          desc: "Multi-tier partner tracking, custom commission structures and performance dashboards.",
        },
        {
          title: "KYC & Verification",
          desc: "Trader identity checks integrated into onboarding and payout flows.",
        },
        {
          title: "Operator Analytics",
          desc: "Revenue by plan, pass and breach ratios, payout liability and cohort performance.",
        },
      ],
    },
    console: {
      title: "Run the Firm From One Place",
      items: [
        { title: "Create, clone and edit challenge plans in minutes" },
        { title: "Review individual accounts, trade history and breach events" },
        { title: "Approve payouts with a documented audit trail" },
        { title: "Manage traders, resets, upgrades and disputes" },
        { title: "Monitor total funded exposure across the book" },
        { title: "Configure staff roles and permissions" },
      ],
    },
    audience: {
      title: "Built For",
      items: [
        "Founders launching an international prop firm",
        "Existing firms migrating away from restrictive platforms",
        "Brokerages adding a funded-trader division",
        "Operators running multiple brands from shared infrastructure",
      ],
    },
    faq: [
      {
        q: "Can we launch with our own rule structure?",
        a: "Yes — the engine is parameter-driven, and bespoke rules can be developed.",
      },
      {
        q: "Can we run several brands on one back end?",
        a: "Yes. Multi-brand deployment is supported.",
      },
      {
        q: "How are payouts calculated?",
        a: "Automatically, based on your configured profit split and payout cycle, with full records for each transaction.",
      },
      {
        q: "Is the platform white-labelled?",
        a: "Completely. Your brand appears throughout the trader journey, from checkout to payout.",
      },
      {
        q: "What about regulation?",
        a: "Requirements differ significantly by jurisdiction and by how the offering is marketed and structured. We provide the software; obtaining appropriate legal advice and any required authorisations in the markets you serve is your responsibility.",
      },
    ],
    cta: {
      title: "Start Building Your Prop Firm",
      body: "Tell us your rule set, your markets and your payout model. We will show you the platform that runs it.",
      label: "Book a Demo",
    },
  },
];

export function getPlatform(slug: string) {
  return PLATFORMS.find((platform) => platform.slug === slug);
}
