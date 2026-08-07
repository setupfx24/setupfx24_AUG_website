import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaPanel } from "@/components/site/cta-panel";
import { NumberedList } from "@/components/site/numbered-list";
import { PageHero } from "@/components/site/page-hero";
import { ProseSection } from "@/components/site/prose-section";
import { SiteShell } from "@/components/site/site-shell";
import { getService, SERVICES } from "@/content/services";

/** All four service lines are known at build time. */
export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <SiteShell>
      <PageHero
        eyebrow={service.rowTitle}
        title={service.heroTitle}
        sub={service.heroSub}
        ctas={[
          { label: "Request a Proposal", whatsapp: true },
          { label: "All Services", href: "/services" },
        ]}
        chips={service.chips}
      />

      <ProseSection
        eyebrow="Overview"
        title={service.overview.title}
        body={service.overview.body}
      />

      <NumberedList
        eyebrow="Scope"
        title={service.included.title}
        items={service.included.items}
      />

      <CtaPanel
        eyebrow="Next step"
        title={service.cta.title}
        body={service.cta.body}
        ctas={[
          { label: service.cta.label, whatsapp: true },
          { label: "Contact Us", href: "/contact" },
        ]}
        micro="No obligation. No sales pressure."
      />
    </SiteShell>
  );
}
