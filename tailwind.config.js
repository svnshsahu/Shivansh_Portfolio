/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        void: "#0A0A0F",
        surface: "#13131A",
        "surface-2": "#1B1B24",
        border: "rgba(255, 255, 255, 0.08)",

        // Purple accent system
        purple: {
          primary: "#8B5CF6",
          glow: "#A78BFA",
          deep: "#5B21B6",
          soft: "rgba(139, 92, 246, 0.12)",
        },

        // Text
        text: {
          primary: "#F4F4F6",
          muted: "#9B9BA8",
          faint: "#5C5C68",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px 0 rgba(139, 92, 246, 0.35)",
        "glow-sm": "0 0 20px 0 rgba(139, 92, 246, 0.25)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, -4%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 2%) scale(0.98)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
