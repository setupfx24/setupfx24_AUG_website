import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "coverage/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      // Force every env read through the validated `env` object in src/lib/env.ts,
      // so a missing variable fails at boot rather than at request time.
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "MemberExpression[object.object.name='process'][object.property.name='env']",
          message:
            "Import the validated `env` object from '@/lib/env' instead of reading process.env directly.",
        },
      ],
    },
  },
  {
    files: ["src/lib/env.ts", "**/*.config.{ts,mjs,js}", "vitest.setup.ts"],
    rules: { "no-restricted-syntax": "off" },
  },
  {
    // Tests render primitives in isolation; a bare <a> there is the subject
    // under test, not a real navigation.
    files: ["**/*.{test,spec}.{ts,tsx}"],
    rules: { "@next/next/no-html-link-for-pages": "off" },
  },
];

export default eslintConfig;
