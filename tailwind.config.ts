import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        terracotta: "#B5502A",
        anthracite: "#1C1B19",
        creme: "#F7F3EC",
      },
      fontFamily: {
        titre: ["var(--font-fraunces)", "serif"],
        texte: ["var(--font-public-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
