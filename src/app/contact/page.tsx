import type { Metadata } from "next";
import Image from "next/image";

import { vars } from "@/components/site/css-vars";
import { Faq } from "@/components/site/faq";
import { NumberedList } from "@/components/site/numbered-list";
import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import { CONTACT_ROWS } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact SetupFX | Trading Platform Development Enquiries",
  description:
    "Get in touch with SetupFX for trading platform demos, project scoping and development enquiries. Reply within one business day.",
};

const PLATFORM_OPTIONS = [
  "Global Trading Platform",
  "Global Prop Firm Platform",
  "AI Trading Platform",
  "Custom Development",
  "Not sure yet",
];

const NEXT_STEPS = [
  {
    title: "We review",
    desc: "Your requirement reaches the team, not an inbox. Reply within one business day.",
  },
  {
    title: "We demo",
    desc: "A live walkthrough of the platform that fits your model — screen share, not a video.",
  },
  {
    title: "We scope",
    desc: "A written scope, timeline and quotation. No obligation at any stage.",
  },
];

const FAQS = [
  {
    q: "How long does a platform take to launch?",
    a: "It depends on scope and integrations. After the discovery call you get a written plan with dated milestones — and we hold to it.",
  },
  {
    q: "Will the platform carry SetupFX branding?",
    a: "No. Every deployment is fully white-labelled. Your brand is the only brand your clients see.",
  },
  {
    q: "Can you customise the platform to my model?",
    a: "Yes. Rules, instruments, fee structures, challenge parameters and UI can all be modified. Custom development is available.",
  },
  {
    q: "Do you provide mobile apps too?",
    a: "Yes — Android and iOS, under your developer account and branding.",
  },
  {
    q: "What happens after go-live?",
    a: "Ongoing support: monitoring, issue resolution, updates and scheduled enhancement cycles.",
  },
  {
    q: "Do you help with licensing or regulation?",
    a: "We're a technology company, not a legal consultancy. We build software that supports your compliance workflows — obtaining licences and meeting regulatory obligations in your jurisdiction stays with you, and we'd recommend specialist legal advice.",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Get in touch"
        title={["Let's talk", "about your project"]}
        sub="Send us the details. We'll come back with a demo, a scope and an honest timeline."
        chips={["Reply within 1 business day", "Free demo", "No obligation"]}
      />

      {/* ---------- Enquiry form ---------- */}
      <section className="services" id="enquiry">
        <div className="shell services__inner">
          <div className="reveal" style={vars({ "--ty": "10px" })}>
            <span className="eyebrow">Enquiry</span>
          </div>

          <div className="section__head">
            <h2 className="services__title lines" data-line-delay="120">
              <span className="line">
                <span>Send us an enquiry</span>
              </span>
            </h2>
          </div>

          <div className="enquiry__grid">
            <div>
              <div
                id="pageEnquiryWrap"
                className="reveal"
                style={vars({ "--ty": "16px" })}
              >
                <form className="cform" id="pageEnquiryForm">
                  <label className="field">
                    <span>Full name</span>
                    <input
                      suppressHydrationWarning
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </label>
                  <label className="field">
                    <span>Email address</span>
                    <input
                      suppressHydrationWarning
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="field">
                    <span>Phone / WhatsApp</span>
                    <input
                      suppressHydrationWarning
                      type="tel"
                      name="phone"
                      placeholder="Include country code"
                    />
                  </label>
                  <label className="field">
                    <span>Company name</span>
                    <input
                      suppressHydrationWarning
                      type="text"
                      name="company"
                      placeholder="Your company"
                    />
                  </label>
                  <label className="field cform__full">
                    <span>Platform of interest</span>
                    <select
                      suppressHydrationWarning
                      name="platform"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a platform
                      </option>
                      {PLATFORM_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="field cform__full">
                    <span>Message</span>
                    <textarea
                      suppressHydrationWarning
                      name="message"
                      rows={5}
                      required
                      placeholder="Your business model, target market and timeline."
                    ></textarea>
                  </label>

                  <div className="cform__bottom">
                    <p className="modal__note">
                      We reply to every enquiry within one business day.
                    </p>
                    <button
                      suppressHydrationWarning
                      className="pill pill--dark pill--arrow"
                      type="submit"
                    >
                      <span className="pill__scale" data-hover="pillScale">
                        <span className="pill__inner">
                          <span id="pageSubmitLabel">Send Enquiry</span>
                          <span className="pill__badge">
                            <svg className="icon" data-hover-arrow="up-right">
                              <use href="#i-arrow-ur" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              <div id="pageEnquirySuccess" hidden>
                <h3 className="services__title">Enquiry received</h3>
                <p className="section__intro">
                  Thanks — we&apos;ve got your enquiry. Expect a reply within
                  one business day.
                </p>
              </div>
            </div>

            <div
              className="enquiry__media reveal"
              style={vars({ "--ty": "16px", "--d": "120ms" })}
            >
              <Image
                src="/images/contact_img.png"
                alt="A contact screen rendered on a phone"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Direct contact ---------- */}
      <section className="services">
        <div className="shell services__inner">
          <div className="reveal" style={vars({ "--ty": "10px" })}>
            <span className="eyebrow">Reach us directly</span>
          </div>

          <div className="section__head">
            <h2 className="services__title lines" data-line-delay="120">
              <span className="line">
                <span>Prefer to skip the form?</span>
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

          <p className="section__outro">
            Technical support runs 24/7 for live clients.
          </p>
        </div>
      </section>

      <NumberedList
        eyebrow="The process"
        title="After you hit send"
        items={NEXT_STEPS}
      />

      <Faq eyebrow="Before you ask" title="Quick answers" items={FAQS} />
    </SiteShell>
  );
}
