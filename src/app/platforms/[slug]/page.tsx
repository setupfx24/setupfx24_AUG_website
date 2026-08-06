import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChipSection } from "@/components/site/chip-section";
import { CtaPanel } from "@/components/site/cta-panel";
import { Faq } from "@/components/site/faq";
import { NumberedList } from "@/components/site/numbered-list";
import { PageHero } from "@/components/site/page-hero";
import { ProseSection } from "@/components/site/prose-section";
import { SiteShell } from "@/components/site/site-shell";
import { getPlatform, PLATFORMS } from "@/content/platforms";

/** All four products are known at build time. */
export function generateStaticParams() {
  return PLATFORMS.map((platform) => ({ slug: platform.slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) return {};

  return {
    title: platform.seo.title,
    description: platform.seo.description,
    alternates: { canonical: `/platforms/${platform.slug}` },
  };
}

export default async function PlatformPage({ params }: PageProps) {
  const { slug } = await params;
  const platform = getPlatform(slug);

  if (!platform) notFound();

  return (
    <SiteShell>
      <PageHero
        eyebrow={platform.meta}
        title={platform.heroTitle}
        sub={platform.heroSub}
        ctas={[
          { label: "Request a Demo", modal: true },
          { label: "Talk to an Expert", modal: true },
        ]}
        chips={platform.tags}
      />

      <ProseSection
        eyebrow="Overview"
        title={platform.overview.title}
        body={platform.overview.body}
      />

      <NumberedList
        eyebrow="Features"
        title={platform.features.title}
        items={platform.features.items}
      />

      {/* Prop-firm products only: the configurable rule set. */}
      {platform.rules && (
        <NumberedList
          eyebrow="Rule Set"
          title={platform.rules.title}
          intro={platform.rules.intro}
          items={platform.rules.items.map((title) => ({ title }))}
        />
      )}

      <NumberedList
        eyebrow="Admin & Back Office"
        title={platform.console.title}
        items={platform.console.items}
      />

      <ChipSection
        eyebrow="Who it's for"
        title={platform.audience.title}
        items={platform.audience.items}
      />

      <Faq
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        items={platform.faq}
      />

      <CtaPanel
        eyebrow="Next step"
        title={platform.cta.title}
        body={platform.cta.body}
        ctas={[
          { label: platform.cta.label, modal: true },
          { label: "All Platforms", href: "/platforms" },
        ]}
        micro="No obligation. No sales pressure. Just a straight conversation about your project."
      />
    </SiteShell>
  );
}
