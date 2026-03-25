import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d7263d",
        accent: "#f5c542",
        base: "#0b0b10",
        ink: "#f9f4e8",
        muted: "#b8b3a7",
      },
      fontFamily: {
        sans: ["Fredoka", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(215, 38, 61, 0.45)",
        poster: "0 24px 60px rgba(0, 0, 0, 0.55)",
        sticker: "6px 6px 0 rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(at 18% 10%, rgba(215, 38, 61, 0.22) 0px, transparent 55%), radial-gradient(at 82% 12%, rgba(245, 197, 66, 0.24) 0px, transparent 55%), radial-gradient(at 26% 88%, rgba(100, 210, 255, 0.14) 0px, transparent 55%)",
        spotlight:
          "radial-gradient(circle at 30% 20%, rgba(245, 197, 66, 0.35), transparent 45%), radial-gradient(circle at 70% 10%, rgba(215, 38, 61, 0.35), transparent 50%)",
        halftone:
          "radial-gradient(rgba(249,244,232,0.10) 1px, transparent 1px)",
      },
    },
  },
  plugins: [forms],
};
