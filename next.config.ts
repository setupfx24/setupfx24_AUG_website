import type { NextConfig } from "next";

/**
 * Security headers applied to every response.
 * Extend this list as you add third-party scripts (analytics, chat widgets,
 * market-data providers) — a CSP belongs here once those origins are known.
 */
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Fail the production build on type or lint errors instead of shipping them.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },

  // Do not advertise the framework in response headers.
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Add CDN / CMS hosts here, e.g.
      // { protocol: "https", hostname: "images.example.com" },
    ],
  },

  experimental: {
    // Tree-shake barrel-file imports from these packages.
    optimizePackageImports: ["lucide-react"],
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

};

export default nextConfig;
