/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        raised: "#121211",
        paper: "#f3eee6",
        sand: "#e4ddd0",
        muted: "#8c867b",
        line: "rgba(243,238,230,0.12)",
        accent: "#eae6de",
        mist: "#eae6de",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", "serif"],
        syne: ["Syne", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
      transitionTimingFunction: {
        studio: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-12px,0)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        floaty: "floaty 8s ease-in-out infinite",
        "spin-slow": "spinSlow 28s linear infinite",
      },
    },
  },
  plugins: [],
};
