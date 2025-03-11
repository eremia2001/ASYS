import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint komplett deaktivieren, indem wir eine leere Konfiguration exportieren
const eslintConfig = [
  {
    ignores: ["**/*"], // Alle Dateien ignorieren
  }
];

export default eslintConfig;
