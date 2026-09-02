import type { ListItem } from "@/components/site/numbered-list";

/**
 * The four service lines shown in the home-page "What we do best" list.
 *
 * Single source for that list and for every /services/[slug] page, so a copy
 * change lands in both places at once.
 */
export type Service = {
  slug: string;
  /** Row title on the home list, and the hero eyebrow on the detail page. */
  rowTitle: string;
  /** Row description on the home list. */
  rowDesc: string;
  seo: { title: string; description: string };
  /** Hero H1, one array entry per rendered line. */
  heroTitle: string[];
  heroSub: string;
  chips: string[];
  overview: { title: string; body: string[] };
  included: { title: string; items: ListItem[] };
  cta: { title: string; body: string; label: string };
};

export const SERVICES: Service[] = [
  {
    slug: "trading-platform-development",
    rowTitle: "Trading Platform Development",
    rowDesc: "Complete terminals, back office and risk systems.",
    seo: {
      title: "Trading Platform Development | SetupFX",
      description:
        "Complete trading platform development — terminal, admin back office, risk engine and reporting, built around your instruments and business model.",
    },
    heroTitle: ["Trading platform", "development, end to end"],
    heroSub:
      "Complete terminals, back office and risk systems — designed around your instruments, workflows and revenue model.",
    chips: ["Terminal", "Back office", "Risk engine", "Reporting"],
    overview: {
      title: "One system doing three jobs",
      body: [
        "Running a trading business means managing three things at once: the client experience, the risk book, and the operations behind both. We build all three as a single system rather than three that have to be glued together later.",
        "Clients get a fast, clean terminal on web and mobile. Your dealing team gets real-time exposure and controls. Your operations team gets a back office that handles funding, verification, reporting and partner commissions without spreadsheets.",
      ],
    },
    included: {
      title: "What the build covers",
      items: [
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
      ],
    },
    cta: {
      title: "Scope your platform build",
      body: "Tell us your instruments, markets and business model. We'll come back with a technical scope and a dated timeline.",
      label: "Book a Free Demo",
    },
  },
  {
    slug: "white-label-deployment",
    rowTitle: "White Label Solution",
    rowDesc: "Fully branded platforms delivered under your identity.",
    seo: {
      title: "White-Label Trading Platform Deployment | SetupFX",
      description:
        "Complete branding, configuration and launch of any SetupFX platform under your identity — your logo, domain, app listings and trading rules.",
    },
    heroTitle: ["White-label deployment,", "branded as yours"],
    heroSub:
      "Complete branding, configuration and launch of any of our four platforms under your identity.",
    chips: ["Your brand", "Your domain", "Your app listings", "Your rules"],
    overview: {
      title: "Nothing points back to us",
      body: [
        "Your logo, your colours, your domain, your app store listing. The platform your clients use carries your identity from the login screen to the withdrawal confirmation email.",
        "Trading rules, symbols, leverage and commission structures are configured to your commercials before launch — not left as settings for you to work out afterwards.",
      ],
    },
    included: {
      title: "What deployment covers",
      items: [
        {
          title: "Brand application",
          desc: "Identity applied across the terminal, admin panel, mobile apps and emails.",
        },
        {
          title: "Trading configuration",
          desc: "Symbols, spreads, leverage, swaps and commission structures set to your model.",
        },
        {
          title: "Environment setup",
          desc: "Cloud hosting, domains, certificates and monitoring configured for launch.",
        },
        {
          title: "App store publishing",
          desc: "Android and iOS listings prepared under your developer accounts.",
        },
        {
          title: "Staff training",
          desc: "Handover, documentation and walkthroughs for the team running it day to day.",
        },
      ],
    },
    cta: {
      title: "Launch under your own brand",
      body: "Send us your identity and your commercials. We'll show you the platform running as yours before anything goes live.",
      label: "Book a Free Demo",
    },
  },
  {
    slug: "integration-services",
    rowTitle: "Integration Services",
    rowDesc: "Payments, KYC, liquidity, CRM and third-party APIs.",
    seo: {
      title: "Trading Platform Integration Services | SetupFX",
      description:
        "Payment gateways, KYC and AML providers, liquidity feeds, market data, CRM systems and custom APIs — integrated during the build, not after it.",
    },
    heroTitle: ["Integrations, handled", "during the build"],
    heroSub:
      "Payments, KYC, liquidity, CRM and third-party APIs — connected as part of the project, not left as your problem afterwards.",
    chips: [
      "Payment gateways",
      "KYC & AML",
      "Liquidity",
      "Market data",
      "CRM",
      "Custom APIs",
    ],
    overview: {
      title: "We handle the plumbing",
      body: [
        "A trading platform is only as usable as the systems around it. Deposits have to clear, identities have to be verified, prices have to arrive, and your sales team has to see the client record.",
        "We connect those systems during the build and test them as part of the acceptance round, so the platform arrives working end to end rather than working in isolation.",
      ],
    },
    included: {
      title: "What we connect",
      items: [
        {
          title: "Payment gateways",
          desc: "Multiple providers, automated deposits and withdrawal approval workflows.",
        },
        {
          title: "KYC & AML providers",
          desc: "Document upload, verification workflows and audit trails.",
        },
        {
          title: "Liquidity providers",
          desc: "Bridge integration with configurable routing, markup and spread control.",
        },
        {
          title: "Market data feeds",
          desc: "Real-time quotes and depth for the instruments you offer.",
        },
        {
          title: "CRM systems",
          desc: "Leads, pipelines and client lifecycle connected to the platform record.",
        },
        {
          title: "SMS, email and analytics",
          desc: "Notifications, transactional mail and the reporting tools your team already uses.",
        },
      ],
    },
    cta: {
      title: "Tell us what needs connecting",
      body: "Send us the providers you already work with. We'll confirm what integrates cleanly and what needs custom work.",
      label: "Talk to Our Team",
    },
  },
  {
    slug: "maintenance-support",
    rowTitle: "Maintenance & Support",
    rowDesc: "Monitoring, updates and enhancement cycles after go-live.",
    seo: {
      title: "Trading Platform Maintenance & Support | SetupFX",
      description:
        "Uptime monitoring, issue resolution, security updates and scheduled enhancement cycles for live trading platforms built by SetupFX.",
    },
    heroTitle: ["Support that continues", "after go-live"],
    heroSub:
      "Monitoring, updates and enhancement cycles — part of the relationship, not an upsell after the invoice clears.",
    chips: [
      "Monitoring",
      "Issue resolution",
      "Security updates",
      "Enhancements",
    ],
    overview: {
      title: "Go-live is the start, not the finish",
      body: [
        "Most vendors sell you a licence and disappear. A live trading platform needs someone watching it, patching it and improving it while real clients are using it.",
        "You stay with the team that built your system, so an issue does not start with someone reading your architecture for the first time.",
      ],
    },
    included: {
      title: "What support covers",
      items: [
        {
          title: "Uptime monitoring",
          desc: "Continuous checks with alerting on the services that matter most.",
        },
        {
          title: "Issue resolution",
          desc: "A route to the team that built your platform, not an anonymous ticket queue.",
        },
        {
          title: "Security updates",
          desc: "Dependency and platform patching on a scheduled cycle.",
        },
        {
          title: "Feature releases",
          desc: "Enhancement cycles planned with you and shipped on an agreed cadence.",
        },
        {
          title: "Change reporting",
          desc: "Regular updates on what changed, what is queued and what needs a decision.",
        },
      ],
    },
    cta: {
      title: "Keep your platform running",
      body: "Already live and unhappy with your current support? Tell us what is breaking and how quickly it gets fixed today.",
      label: "Talk to Our Team",
    },
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
