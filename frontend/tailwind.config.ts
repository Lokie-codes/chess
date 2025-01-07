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
        // Light theme colors
        "white-square": "#ede8d0", // Light square color (for light theme)
        "white-square-highlight": "#adaa99", // Highlighted light square

        "black-square": "#787569", // Dark square color (for light theme)
        "black-square-highlight": "#4f4d46", // Highlighted dark square

        // Dark theme colors
        "dark-white-square": "#6b6451", // Light square color (for dark theme)
        "dark-white-square-highlight": "#877f6c", // Highlighted light square (dark theme)

        "dark-black-square": "#2c2a22", // Dark square color (for dark theme)
        "dark-black-square-highlight": "#3a3932", // Highlighted dark square (dark theme)

        // Additional colors for dark theme background & foreground
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
