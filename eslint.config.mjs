import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "*.min.js",
      "dist/**",
      "coverage/**",
      ".turbo/**",
      ".vscode/**",
      ".github/**",
      "!.github/workflows",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Rules that should be treated as warnings instead of errors
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      
      // React specific rules
      "react-hooks/exhaustive-deps": "warn",
      
      // General rules
      "no-console": "warn",
      "no-debugger": "warn",
    },
  },
  {
    // Configuration for specific directories or file types
    files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];

export default eslintConfig;
