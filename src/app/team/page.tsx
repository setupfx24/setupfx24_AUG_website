import type { Metadata } from "next";

import { CtaPanel } from "@/components/site/cta-panel";
import { NumberedList } from "@/components/site/numbered-list";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import { TeamGrid } from "@/components/site/team-grid";

export const metadata: Metadata = {
  title: "Our Team | SetupFX",
  description:
    "The developers, designers, QA engineers and support staff who build and run SetupFX trading platforms.",
  alternates: { canonical: "/team" },
};

/**
 * Disciplines rather than named individuals — the site does not publish staff
 * names or photographs yet, and inventing them would be a credibility risk.
 */
const DISCIPLINES = [
  {
    title: "Platform Development",
    desc: "Engineers who build the trading terminal, the matching and risk logic, and the back office behind them.",
  },
  {
    title: "UI/UX Design",
    desc: "Designers working on dense, fast interfaces — order entry, dashboards and mobile layouts.",
  },
  {
    title: "Quality Assurance",
    desc: "Functional, load and user acceptance testing before anything reaches a live client.",
  },
  {
    title: "DevOps & Infrastructure",
    desc: "Deployment, monitoring, scaling and uptime for platforms running real order volume.",
  },
  {
    title: "Integrations",
    desc: "Payment gateways, KYC and AML providers, liquidity feeds and CRM systems.",
  },
  {
    title: "Client Support",
    desc: "The people who answer after go-live — issue resolution, updates and enhancement cycles.",
  },
];

export default function TeamPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Team"
        title={["The people behind", "the platforms"]}
        sub="Alone we can do so little; together we can do so much. Every build is run by a dedicated project team, so you always know who is working on your platform and who to call."
        ctas={[
          { label: "Work With Us", whatsapp: true },
          { label: "About the Company", href: "/about" },
        ]}
        bgImage="/images/about_banner.png"
      />

      <TeamGrid
        eyebrow="Who you'll work with"
        title="The team behind your build"
        intro="Organised into four disciplines. Every project gets named contacts from each, so you always know who is working on your platform."
      />

      <NumberedList
        eyebrow="Meet our team"
        title="Teamwork makes the platform work"
        intro="Six disciplines, organised into a dedicated team for every build."
        items={DISCIPLINES}
      />

      <CtaPanel
        eyebrow="Next step"
        title="Want this team on your project?"
        body="Tell us what you are building. We will put the right people on it and give you a written scope and timeline."
        ctas={[
          { label: "Book a Free Demo", whatsapp: true },
          { label: "Contact Us", href: "/contact" },
        ]}
        micro="No obligation. No sales pressure. Just a straight conversation about your project."
      />
    </SiteShell>
  );
}
