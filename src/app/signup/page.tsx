import type { Metadata } from "next";
import Link from "next/link";

import {
  AuthCheck,
  AuthField,
  AuthSelect,
  AuthSocial,
  AuthSplit,
} from "@/components/site/auth-split";
import { SiteShell } from "@/components/site/site-shell";
import { PLATFORMS } from "@/content/platforms";

export const metadata: Metadata = {
  title: "Create an Account | SetupFX",
  description:
    "Create a SetupFX account to book a platform demo and get a written scope and timeline for your project.",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <SiteShell>
      <AuthSplit
        title="Create an account"
        sub="Plan it with us, launch it under your brand"
        panelTitle={["Think fast,", "Build faster"]}
      >
        <AuthSocial verb="Sign up" />

        <div className="authsplit__or">or</div>

        <form
          className="authsplit__fields"
          id="signupForm"
          data-stub-form
          data-stub-success="signupSuccess"
        >
          <div className="authsplit__fields authsplit__fields--two">
            <AuthField
              label="Full name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
            />
            <AuthField
              label="Company"
              name="company"
              placeholder="Your company"
              autoComplete="organization"
              required={false}
            />
          </div>

          <div className="authsplit__fields authsplit__fields--two">
            <AuthField
              label="Work email"
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
            />
            <AuthField
              label="Phone"
              name="phone"
              type="tel"
              placeholder="Include country code"
              autoComplete="tel"
              required={false}
            />
          </div>

          <AuthSelect
            label="Platform"
            name="platform"
            options={[
              ...PLATFORMS.map((platform) => platform.cardTitle),
              "Custom Development",
              "Not sure yet",
            ]}
          />

          <AuthField
            label="Password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
          />

          <div className="authsplit__terms">
            <AuthCheck name="noEmails">
              I don&apos;t want to receive emails about SetupFX product updates
            </AuthCheck>
            <AuthCheck name="terms">
              By creating an account, you agree to our{" "}
              <Link href="/legal/terms">Terms and Conditions</Link> and{" "}
              <Link href="/legal/privacy">Privacy Policy</Link>
            </AuthCheck>
          </div>

          <button
            suppressHydrationWarning
            className="authsplit__submit"
            type="submit"
          >
            <span data-submit-label>Create account</span>
          </button>

          <p className="authsplit__alt">
            Already have an account? <Link href="/login">Sign in</Link>
          </p>
        </form>

        <div id="signupSuccess" hidden>
          <p className="authsplit__alt">
            Accounts are not connected to a live system yet. Our team will be in
            touch — or <Link href="/contact">send us an enquiry</Link>.
          </p>
        </div>
      </AuthSplit>
    </SiteShell>
  );
}
