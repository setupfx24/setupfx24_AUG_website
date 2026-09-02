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
  /** Renders across both columns of the card grid. */
  wide?: boolean;
  /** Prop-firm pages only: the configurable rule set. */
  rules?: { title: string; intro: string; items: string[] };
  faq: FaqItem[];
  cta: { title: string; body: string; label: string };
};

export const PLATFORMS: Platform[] = [
  {
    slug: "forex-trading-platform",
    meta: "Global Markets",
    cardTitle: "Global Trading Platform",
    cardBody:
      "A complete multi-asset forex trading platform for brokerages operating in international markets.",
    cardImage: "/images/box_bg1.png",
    tags: ["Liquidity Bridge", "MAM/PAMM", "Copy Trading"],
    seo: {
      title:
        "Global Trading Platform Development | White Label Forex Software — SetupFX",
      description:
        "Launch your forex brokerage with a white-label multi-asset trading platform. Liquidity integration, copy trading, MAM/PAMM, IB module and full back office.",
    },
    heroTitle: ["Global Trading Platform", "for Global Brokerages"],
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
        {
          title: "Client account creation, grouping and permission management",
        },
        {
          title: "Symbol, spread, leverage, swap and commission configuration",
        },
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
      title: "See the Global Trading Platform in Action",
      body: "Tell us what you are building. We will walk you through the architecture and give you a clear scope and timeline.",
      label: "Book Your Demo",
    },
  },

  {
    slug: "indian-trading-platform",
    meta: "Indian Exchanges",
    cardTitle: "Global Prop Firm Platform",
    cardBody:
      "A trading application built for Indian market participants, aligned with domestic exchange workflows.",
    cardImage: "/images/box_bg2.png",
    tags: ["Equity & F&O", "RMS", "Back Office"],
    seo: {
      title:
        "Global Prop Firm Platform | Funded Trader Software — SetupFX",
      description:
        "Custom trading platform development for Indian markets — equity, F&O, currency and commodity segments with back office, RMS and mobile apps.",
    },
    heroTitle: ["Global Prop Firm Platform", "for Global Operators"],
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
    slug: "ai-trading-platform",
    meta: "AI & Algorithmic Trading",
    cardTitle: "AI Trading Platform",
    cardBody:
      "Build AI-driven strategies and run them as live algorithms — research, backtest and automate execution under your own brand.",
    cardImage: "/images/box_bg3.png",
    // Spans both columns of the card grid.
    wide: true,
    tags: ["AI Strategy Builder", "Algo Trading", "Backtesting"],
    seo: {
      title: "AI Trading Platform Development | Algo Trading Software — SetupFX",
      description:
        "AI trading platform development — strategy builder, algorithmic execution, backtesting and risk controls, delivered white-label under your brand.",
    },
    heroTitle: ["AI Trading Platform", "strategies that run themselves"],
    heroSub:
      "We build the AI strategy layer and the algorithmic engine that executes it — researched, backtested and deployed under your own brand.",
    overview: {
      title: "From Strategy Idea to Live Algorithm",
      body: [
        "Most trading businesses have strategy ideas long before they have a way to run them. The gap is the engineering: turning a thesis into rules a machine can follow, testing it against history, and executing it reliably when the market moves.",
        "Our AI Trading Platform closes that gap. Strategies are built with AI assistance, validated against historical data, and deployed as live algorithms with the risk controls and monitoring a real book needs.",
      ],
    },
    features: {
      title: "Platform Features",
      items: [
        {
          title: "AI Strategy Builder",
          desc: "Describe the logic you want and refine it with AI assistance, without writing the engine yourself.",
        },
        {
          title: "Algorithmic Execution",
          desc: "Strategies run as live algorithms with configurable order routing, sizing and scheduling.",
        },
        {
          title: "Backtesting Engine",
          desc: "Validate a strategy against historical data before a single order reaches the market.",
        },
        {
          title: "Paper Trading",
          desc: "Run a finished strategy against live prices with simulated fills before committing capital.",
        },
        {
          title: "Signal & Indicator Library",
          desc: "Technical indicators and derived signals available as building blocks inside any strategy.",
        },
        {
          title: "Risk Controls",
          desc: "Per-strategy exposure caps, drawdown limits and automatic shut-off when a rule is breached.",
        },
        {
          title: "Portfolio of Strategies",
          desc: "Run several algorithms side by side with allocation and correlation visible in one view.",
        },
        {
          title: "Performance Analytics",
          desc: "Returns, drawdown, win rate and per-strategy attribution, tracked continuously.",
        },
        {
          title: "Broker & Data Integration",
          desc: "Connect the market data feed and execution venue your business is authorised to use.",
        },
        {
          title: "API Access",
          desc: "Programmatic access for teams that want to extend the platform or plug in their own models.",
        },
      ],
    },
    console: {
      title: "Operate the Engine From One Console",
      items: [
        { title: "Deploy, pause and roll back strategies without a release" },
        { title: "Monitor live positions, fills and latency across every algorithm" },
        { title: "Set exposure, drawdown and instrument limits per strategy" },
        { title: "Review backtest and live performance side by side" },
        { title: "Manage users, permissions and API keys" },
        { title: "Full audit trail of every deployment and parameter change" },
      ],
    },
    audience: {
      title: "Built For",
      items: [
        "Brokerages adding automated trading for their clients",
        "Prop firms running systematic strategies in-house",
        "Fintech founders launching an algo trading product",
        "Trading desks moving from manual execution to automation",
      ],
    },
    faq: [
      {
        q: "Do we need a quant team to use it?",
        a: "No. The strategy builder is designed so a trader can express logic with AI assistance. A quant team can go further through the API, but is not a requirement.",
      },
      {
        q: "Can we bring our own models?",
        a: "Yes. The platform exposes an API so your own models and signals can drive strategies alongside the built-in tools.",
      },
      {
        q: "How is a strategy tested before it goes live?",
        a: "Backtesting against historical data, then paper trading against live prices with simulated fills. Both run inside the platform.",
      },
      {
        q: "Which markets and brokers does it support?",
        a: "We integrate the market data and execution infrastructure your business is authorised to use. The venues are agreed during scoping.",
      },
      {
        q: "Does an AI strategy guarantee profit?",
        a: "No. AI and automation remove manual error and let you test ideas properly — they do not remove market risk. Past backtest performance is not a prediction of future results.",
      },
    ],
    cta: {
      title: "Build Your AI Trading Platform",
      body: "Tell us the strategies you want to run and the markets you trade. We will show you the engine and give you a scope and timeline.",
      label: "Book a Demo",
    },
  },

];

export function getPlatform(slug: string) {
  return PLATFORMS.find((platform) => platform.slug === slug);
}
