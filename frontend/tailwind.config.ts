import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light": "#ede8d0",
        "light-highlight": "#c9c5b1",
        "dark": "#787569",
        "dark-highlight": "#4f4d46"
      },
    },
  },
  plugins: [],
} satisfies Config;
