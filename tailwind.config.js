import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5a3c",
        accent: "#f7c948",
        base: "#fff7e6",
        ink: "#1f1b16",
      },
      fontFamily: {
        sans: ["Baloo 2", "Fredoka", "ui-sans-serif", "system-ui", "sans-serif"],
        fredoka: ["Fredoka", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 34px rgba(255, 90, 60, 0.35)",
        toon: "8px 8px 0 rgba(31, 27, 22, 0.9)",
        toon-lg: "12px 12px 0 rgba(31, 27, 22, 0.9)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(at 16% 10%, rgba(255, 90, 60, 0.18) 0px, transparent 55%), radial-gradient(at 86% 16%, rgba(247, 201, 72, 0.22) 0px, transparent 55%), radial-gradient(at 26% 88%, rgba(126, 217, 87, 0.18) 0px, transparent 55%)",
        "dot-pop":
          "radial-gradient(rgba(31,27,22,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [forms],
};
