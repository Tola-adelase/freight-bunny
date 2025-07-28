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
    rules: {
      // Disable unused variable warnings
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      
      // Disable unescaped entities warning
      "react/no-unescaped-entities": "off",
      
      // Disable Image component warnings for now
      "@next/next/no-img-element": "off",
      
      // Disable prefer-const warnings
      "prefer-const": "off",
      
      // Disable exhaustive deps warnings
      "react-hooks/exhaustive-deps": "off",
      
      // Disable empty object type warnings
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
];

export default eslintConfig;
