import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        paper: "#F7F5EF",
        ink: "#09090B",
        slate: "#52525B",
        line: "#E4E0D7",
        card: "#FFFEFA",
        executive: "#111827",
        blue: "#1D4ED8"
      },
      boxShadow: {
        soft: "0 30px 90px rgba(9, 9, 11, 0.08)",
        crisp: "0 1px 0 rgba(9, 9, 11, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
