import { IconSprite } from "./icon-sprite";
import { NavMenu } from "./nav-menu";
import { PageLoader } from "./page-loader";
import { RequestModal } from "./request-modal";
import { SiteEffects } from "./site-effects";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

/** Chrome shared by every page: sprite, header, footer, overlays and effects. */
export function SiteShell({
  children,
  loader = false,
}: {
  children: React.ReactNode;
  /** The intro loader runs on the landing page only. */
  loader?: boolean;
}) {
  return (
    <>
      <IconSprite />
      {loader && <PageLoader />}
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <NavMenu />
      <RequestModal />
      <SiteEffects />
    </>
  );
}
