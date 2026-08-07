import type { Metadata } from "next";

import { ChipRow } from "@/components/site/chip-row";
import { CtaPanel } from "@/components/site/cta-panel";
import { vars } from "@/components/site/css-vars";
import { NumberedList } from "@/components/site/numbered-list";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";

export const metadata: Metadata = {
  title: "Trading Software Development Services | SetupFX24",
  description:
    "Custom trading software development, white-label deployment, mobile apps, API and payment integration, and ongoing support from SetupFX24.",
};

const SERVICES = [
  {
    title: "Custom trading software",
    desc: "Purpose-built systems designed around your instruments, workflows and revenue model.",
  },
  {
    title: "White-label deployment",
    desc: "Complete branding, configuration and launch of any of our four platforms under your identity.",
  },
  {
    title: "Mobile app development",
    desc: "Native Android and iOS trading apps, built for performance and published under your accounts.",
  },
  {
    title: "API & third-party integration",
    desc: "Liquidity feeds, market data, payment gateways, KYC providers, CRM systems and internal tools.",
  },
  {
    title: "UI/UX for trading products",
    desc: "Interfaces designed for dense data and fast decisions. Tested with traders, not just designers.",
  },
  {
    title: "Maintenance & support",
    desc: "Uptime monitoring, issue resolution, security updates and scheduled feature releases.",
  },
];

const PROCESS = [
  {
    title: "Discovery & scoping",
    desc: "We map your business model, markets, instruments and revenue structure, then turn it into a technical scope.",
  },
  {
    title: "Branding & configuration",
    desc: "Your identity applied across terminal, admin, apps and emails. Trading rules and commercials configured.",
  },
  {
    title: "Development & integration",
    desc: "Core build plus payment, KYC, liquidity and CRM connections. Progress demos, not silence.",
  },
  {
    title: "Testing & UAT",
    desc: "Functional testing, load testing and a full acceptance round with your team before any real client sees it.",
  },
  {
    title: "Go live & support",
    desc: "Deployment, staff training, documentation handover — then continuous monitoring and support.",
  },
];

const INTEGRATIONS = [
  "Payment gateways",
  "KYC & AML providers",
  "Liquidity providers",
  "Market data feeds",
  "CRM systems",
  "SMS & email services",
  "Analytics tools",
  "Custom APIs",
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="What we build"
        title={["Development services", "beyond the platform"]}
        sub="When your business model needs something our standard products don't cover, we build it."
        ctas={[
          { label: "Request a Proposal", whatsapp: true },
          { label: "Book a Call", href: "/contact" },
        ]}
        chips={[
          "Custom development",
          "White-label",
          "Mobile apps",
          "Integrations",
          "Support",
        ]}
      />

      <NumberedList
        eyebrow="Services"
        title="Six things we deliver well"
        items={SERVICES}
      />

      <NumberedList
        eyebrow="Process"
        title="From requirement to live platform in five steps"
        items={PROCESS}
      />

      <section className="services">
        <div className="shell services__inner">
          <div className="reveal" style={vars({ "--ty": "10px" })}>
            <span className="eyebrow">Connected during the build</span>
          </div>

          <div className="section__head">
            <h2 className="services__title lines" data-line-delay="120">
              <span className="line">
                <span>We handle the plumbing</span>
              </span>
            </h2>
            <p
              className="section__intro reveal"
              style={vars({ "--ty": "10px" })}
            >
              Integrations are part of the project, not left as your problem
              afterwards.
            </p>
          </div>

          <div className="reveal" style={vars({ "--ty": "16px" })}>
            <ChipRow items={INTEGRATIONS} />
          </div>
        </div>
      </section>

      <CtaPanel
        eyebrow="Next step"
        title="Tell us what you need built"
        body="Send us the requirement. We'll come back with a scope, a timeline and an honest answer on whether we're the right team for it."
        ctas={[
          { label: "Request a Proposal", whatsapp: true },
          { label: "Book a Call", href: "/contact" },
        ]}
      />
    </SiteShell>
  );
}
