import type { Config } from "tailwindcss";
// Palette "Lotus Pond" - change colors here only.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8F3EA", card: "#FFFFFF", pink: "#F4C6D0", leaf: "#CFE3C4",
        ink: "#1F3B2A", green: "#2F5D3A", red: "#B8283C", muted: "#5F5F58",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
