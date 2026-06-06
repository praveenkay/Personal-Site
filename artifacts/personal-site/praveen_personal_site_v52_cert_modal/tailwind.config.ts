import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        paper: "#F7F4ED",
        ink: "#111111",
        muted: "#666666",
        line: "#E3DDD0",
        card: "#FFFCF5",
        accent: "#1D4ED8"
      },
      boxShadow: {
        soft: "0 18px 70px rgba(17, 17, 17, 0.08)"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        rise: "rise 650ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
