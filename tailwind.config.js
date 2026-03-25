import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        accent: "#6b7280",
        base: "#f7f7f7",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 34px rgba(0, 0, 0, 0.18)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(at 16% 10%, rgba(0, 0, 0, 0.04) 0px, transparent 50%), radial-gradient(at 86% 16%, rgba(0, 0, 0, 0.035) 0px, transparent 50%), radial-gradient(at 26% 88%, rgba(0, 0, 0, 0.045) 0px, transparent 50%)",
      },
    },
  },
  plugins: [forms],
};
