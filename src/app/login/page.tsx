import type { Metadata } from "next";
import Link from "next/link";

import {
  AuthCheck,
  AuthField,
  AuthSocial,
  AuthSplit,
} from "@/components/site/auth-split";
import { SiteShell } from "@/components/site/site-shell";

export const metadata: Metadata = {
  title: "Login | SetupFX",
  description:
    "Sign in to your SetupFX account to reach your project team and platform documentation.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <SiteShell>
      <AuthSplit
        title="Sign in to your account"
        sub="Track your build, raise tickets, review deployments"
        panelTitle={["Think fast,", "Build faster"]}
      >
        <AuthSocial verb="Sign in" />

        <div className="authsplit__or">or</div>

        <form
          className="authsplit__fields"
          id="loginForm"
          data-stub-form
          data-stub-success="loginSuccess"
        >
          <AuthField
            label="Email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
          />
          <AuthField
            label="Password"
            name="password"
            type="password"
            placeholder="Your password"
            autoComplete="current-password"
          />

          <div className="authsplit__terms">
            <AuthCheck name="remember">
              Keep me signed in on this device
            </AuthCheck>
          </div>

          <button
            suppressHydrationWarning
            className="authsplit__submit"
            type="submit"
          >
            <span data-submit-label>Sign In</span>
          </button>

          <p className="authsplit__alt">
            Don&apos;t have an account? <Link href="/signup">Create one</Link>
          </p>
        </form>

        <div id="loginSuccess" hidden>
          <p className="authsplit__alt">
            Sign-in is not connected to an account system yet. Our team will be
            in touch — or <Link href="/contact">send us an enquiry</Link>.
          </p>
        </div>
      </AuthSplit>
    </SiteShell>
  );
}
