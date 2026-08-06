import type { ReactNode } from "react";

/**
 * Split auth layout: form on the left, brand-blue gradient panel on the right.
 *
 * The panel's colour comes from --accent-from / --accent / --accent-to, so it
 * re-themes with the rest of the site. Grain is an SVG overlay in CSS rather
 * than a shader, which keeps the dependency list unchanged.
 */
export function AuthSplit({
  title,
  sub,
  panelTitle,
  children,
}: {
  title: string;
  sub: string;
  /** Rendered on the blue panel, one array entry per line. */
  panelTitle: string[];
  children: ReactNode;
}) {
  return (
    <section className="authsplit">
      <div className="shell authsplit__grid">
        <div className="authsplit__form-panel">
          <div className="authsplit__form-inner">
            <h1 className="authsplit__title">{title}</h1>
            <p className="authsplit__sub">{sub}</p>
            {children}
          </div>
        </div>

        <div className="authsplit__panel">
          <div className="authsplit__panel-inner">
            <h2 className="authsplit__panel-title">
              {panelTitle.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < panelTitle.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <a className="authsplit__download" href="/contact">
              <WindowsIcon />
              <span>Book a free platform demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Social sign-in buttons. Not wired to a provider yet. */
export function AuthSocial({ verb }: { verb: string }) {
  return (
    <div className="authsplit__social">
      <button
        suppressHydrationWarning
        className="authsplit__socialbtn"
        type="button"
      >
        <GoogleIcon />
        <span>{verb} with Google</span>
      </button>
      <button
        suppressHydrationWarning
        className="authsplit__socialbtn"
        type="button"
      >
        <AppleIcon />
        <span>{verb} with Apple</span>
      </button>
    </div>
  );
}

/** Input with the label sitting inside the control, as in the reference. */
export function AuthField({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="authsplit__field">
      <input
        suppressHydrationWarning
        type={type}
        name={name}
        aria-label={label}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
      <span className="authsplit__field-label">{label}</span>
    </label>
  );
}

/** Select styled to match AuthField. */
export function AuthSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="authsplit__field">
      <select
        suppressHydrationWarning
        name={name}
        aria-label={label}
        defaultValue=""
      >
        <option value="" disabled>
          Select a platform
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="authsplit__field-label">{label}</span>
    </label>
  );
}

export function AuthCheck({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <label className="authsplit__check">
      <input suppressHydrationWarning type="checkbox" name={name} />
      <span>{children}</span>
    </label>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
        fill="#EB4335"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 12.54c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.58 1.1-.95 0-2.42-1.07-3.98-1.04-2.05.03-3.94 1.19-4.99 3.02-2.13 3.69-.54 9.16 1.53 12.15 1.01 1.46 2.22 3.1 3.81 3.04 1.53-.06 2.11-.99 3.96-.99s2.37.99 3.99.96c1.65-.03 2.69-1.49 3.69-2.96 1.16-1.69 1.64-3.33 1.66-3.41-.04-.02-3.2-1.23-3.24-4.87ZM14.03 3.66c.84-1.02 1.41-2.43 1.25-3.84-1.21.05-2.68.81-3.55 1.83-.78.9-1.46 2.34-1.28 3.72 1.35.1 2.73-.69 3.58-1.71Z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 4.7 10.7 3.6v7.7H3V4.7Zm8.8-1.25L21 2.1v9.2h-9.2V3.45ZM3 12.7h7.7v7.7L3 19.3v-6.6Zm8.8 0H21v9.2l-9.2-1.3v-7.9Z" />
    </svg>
  );
}
