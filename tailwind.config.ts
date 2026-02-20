import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: {
          primary: "#06060f",
          secondary: "#0a0a18",
          card: "rgba(255,255,255,0.03)",
        },
        accent: {
          primary: "#6366f1",
          secondary: "#8b5cf6",
          neon: "#22d3ee",
        },
        border: {
          default: "rgba(255,255,255,0.08)",
          glow: "rgba(99,102,241,0.35)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(258,100%,56%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(195,100%,56%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(258,100%,56%,0.08) 0px, transparent 50%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(99,102,241,0.2)",
        "glow-md": "0 0 40px rgba(99,102,241,0.25)",
        "glow-lg": "0 0 60px rgba(99,102,241,0.3)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.2)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
