import type { Metadata } from "next";

import { ChipRow } from "@/components/site/chip-row";
import { CtaPanel } from "@/components/site/cta-panel";
import { vars } from "@/components/site/css-vars";
import { MediaSlider } from "@/components/site/media-slider";
import { NumberedList } from "@/components/site/numbered-list";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import { CONTACT_ROWS } from "@/content/contact";
import { Stats } from "@/components/site/stats";

export const metadata: Metadata = {
  title: "About SetupFX | Trading Platform Development Company",
  description:
    "SetupFX is a software development company building white-label trading platforms for forex brokers, Indian market brokers and prop firms.",
};

/** Slides for the "In short" split section. */
const ABOUT_SLIDES = [
  {
    src: "/images/about1.png",
    alt: "A SetupFX trading platform running on a client device",
  },
  {
    src: "/images/about2.png",
    alt: "A SetupFX platform build shown on screen",
  },
];

/** Shared by both split sections on this page — same team, same office. */
const TEAM_SLIDES = [
  {
    src: "/images/team1.png",
    alt: "The SetupFX team at work in the development office",
  },
  {
    src: "/images/team2.png",
    alt: "Developers reviewing a trading platform build on screen",
  },
];

const PRINCIPLES = [
  {
    title: "Ownership",
    desc: "We take responsibility for what we ship, including the parts that are hard to fix.",
  },
  {
    title: "Clarity",
    desc: "Plain timelines, plain pricing, plain answers. No jargon used to cover gaps.",
  },
  {
    title: "Longevity",
    desc: "Systems built to run for years and scale with your client base.",
  },
  {
    title: "Partnership",
    desc: "Our best client relationships are measured in years, not project cycles.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Software Development Company"
        title={["We build the technology", "behind trading businesses"]}
        sub="Not a broker. Not a reseller. A development team that ships trading platforms ready to run a real business."
      />

      <Stats />

      <section className="services">
        <div className="shell services__inner">
          <div className="section__split">
            <div>
              <div className="reveal" style={vars({ "--ty": "10px" })}>
                <span className="eyebrow">In short</span>
              </div>

              <div className="section__head">
                <h2 className="services__title lines" data-line-delay="120">
                  <span className="line">
                    <span>Trading platforms, built to launch</span>
                  </span>
                </h2>
                <p
                  className="section__intro reveal"
                  style={vars({ "--ty": "10px" })}
                >
                  We develop four platforms covering global forex markets,
                  Indian exchanges and both sides of the prop firm industry —
                  and we build custom systems when a client&apos;s model calls
                  for something different.
                </p>
                <p
                  className="section__intro reveal"
                  style={vars({ "--ty": "10px", "--d": "100ms" })}
                >
                  Every deployment is white-labelled, integrated with your
                  payments and KYC stack, and supported after go-live.
                </p>
              </div>

              <div className="reveal" style={vars({ "--ty": "16px" })}>
                <ChipRow
                  items={[
                    "Development",
                    "Branding",
                    "Integration",
                    "Deployment",
                    "Support",
                  ]}
                />
              </div>
            </div>

            <MediaSlider slides={ABOUT_SLIDES} />
          </div>
        </div>
      </section>

      <NumberedList
        eyebrow="Principles"
        title="Four things we hold to"
        items={PRINCIPLES}
      />

      <section className="services">
        <div className="shell services__inner">
          <div className="section__split">
            <div>
              <div className="reveal" style={vars({ "--ty": "10px" })}>
                <span className="eyebrow">Who you&apos;ll work with</span>
              </div>

              <div className="section__head">
                <h2 className="services__title lines" data-line-delay="120">
                  <span className="line">
                    <span>One team, start to finish</span>
                  </span>
                </h2>
                <p
                  className="section__intro reveal"
                  style={vars({ "--ty": "10px" })}
                >
                  Developers, UI/UX designers, QA engineers, DevOps specialists
                  and support staff — organised into dedicated project teams.
                </p>
                <p
                  className="section__intro reveal"
                  style={vars({ "--ty": "10px", "--d": "100ms" })}
                >
                  You&apos;ll know who is building your platform and who to call
                  when something needs attention. No account manager relaying
                  messages to a team you never meet.
                </p>
              </div>

              <div className="reveal" style={vars({ "--ty": "16px" })}>
                <ChipRow
                  items={["Development", "Design", "QA", "DevOps", "Support"]}
                />
              </div>
            </div>

            <MediaSlider slides={TEAM_SLIDES} />
          </div>
        </div>
      </section>

      <section className="services">
        <div className="shell services__inner">
          <div className="reveal" style={vars({ "--ty": "10px" })}>
            <span className="eyebrow">Get in touch</span>
          </div>

          <div className="section__head">
            <h2 className="services__title lines" data-line-delay="120">
              <span className="line">
                <span>Where to find us</span>
              </span>
            </h2>
          </div>

          <ul className="factlist reveal" style={vars({ "--ty": "16px" })}>
            {CONTACT_ROWS.map((detail) => (
              <li key={detail.label}>
                <span className="factlist__label">{detail.label}</span>
                <span className="factlist__value">
                  {detail.href ? (
                    <a href={detail.href}>{detail.value}</a>
                  ) : (
                    detail.value
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaPanel
        eyebrow="Next step"
        title="Let's talk about what you're building"
        body="Tell us your business model and target market. We'll show you the platform that fits and give you a straight answer on scope and timeline."
        ctas={[
          { label: "Book a Free Demo", whatsapp: true },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
    </SiteShell>
  );
}
