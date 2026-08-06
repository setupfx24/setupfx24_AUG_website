import { BrandLogo } from "./brand-logo";

/** Intro loader. Fills 0 → 100, then gates the hero reveals. */
export function PageLoader() {
  return (
    <div className="loader" id="loader" role="status" aria-live="polite">
      <div className="loader__center">
        <div className="loader__brand">
          <BrandLogo light priority />
        </div>
      </div>
      <div className="loader__progress">
        <div className="loader__track">
          <div className="loader__fill" id="loaderFill"></div>
        </div>
        <div className="loader__meta">
          <span>Loading</span>
          <span className="loader__count tabular" id="loaderCount">
            000
          </span>
        </div>
      </div>
    </div>
  );
}
