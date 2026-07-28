import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0A0A0A",
          neon: "#FF6A00",
          neonDeep: "#C24800",
          neonSoft: "#FFB018",
          card: "#141414",
          border: "#2A2A2A"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Anton'", "Impact", "sans-serif"]
      },
      boxShadow: {
        cta: "0 0 0 1px rgba(255,106,0,0.5), 0 0 40px -8px rgba(255,106,0,0.75)"
      }
    }
  },
  plugins: []
};

export default config;
