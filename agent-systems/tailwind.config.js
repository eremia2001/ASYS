/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13B7A5",
        secondary: "#013941",
        "primary-dark": "#00CCCC",
        black: "#0a0a0a",
        white: "#ededed",
        cyan: {
          500: "#00FFFF",
          900: "#006666",
        },
        blue: {
          600: "#0060FF",
        },
        teal: {
          600: "#00BBBB",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
