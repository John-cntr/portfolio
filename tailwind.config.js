import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2f6f4e",
        accent: "#8f7a3a",
        base: "#f5f4ee",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 34px rgba(47, 111, 78, 0.22)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(at 16% 10%, rgba(47, 111, 78, 0.18) 0px, transparent 50%), radial-gradient(at 86% 16%, rgba(143, 122, 58, 0.18) 0px, transparent 50%), radial-gradient(at 26% 88%, rgba(203, 193, 165, 0.25) 0px, transparent 50%)",
      },
    },
  },
  plugins: [forms],
};
