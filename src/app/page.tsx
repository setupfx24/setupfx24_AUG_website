import { About } from "@/components/site/about";
import { Band } from "@/components/site/band";
import { Hero } from "@/components/site/hero";
import { Platforms } from "@/components/site/platforms";
import { Services } from "@/components/site/services";
import { SiteShell } from "@/components/site/site-shell";
import { Stats } from "@/components/site/stats";

export default function HomePage() {
  return (
    <SiteShell loader>
      <Hero />
      <About />
      <Band />
      <Platforms />
      <Services />
      <Stats />
    </SiteShell>
  );
}
