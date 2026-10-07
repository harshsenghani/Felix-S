import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        felix: {
          blue: "#394285",
          dark: "#21222C",
          navy: "#1a2147",
          cyan: "#8BC3DD",
          accent: "#578FA8",
          smoke: "#F4F4F4",
          platinum: "#EEEEEE",
          black: "#1D1D1D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
