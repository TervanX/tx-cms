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
    ],
  },
  {
    rules: {
      // Disable img element warnings
      "@next/next/no-img-element": "off",
      
      // Disable unescaped entities errors
      "react/no-unescaped-entities": "off",
      
      // Disable children prop errors
      "react/no-children-prop": "off",
      
      // Make these warnings instead of errors
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "jsx-a11y/alt-text": "off",
      "react/jsx-key": "off",
      "react-hooks/exhaustive-deps": "off",
      
      // Disable HTML link for pages error
      "@next/next/no-html-link-for-pages": "off"
    }
  }
];

export default eslintConfig;