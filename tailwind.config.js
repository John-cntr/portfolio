import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7a18",
        accent: "#06b6d4",
        base: "#fffaf5",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 34px rgba(59, 130, 246, 0.18)",
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(at 16% 10%, rgba(255, 122, 24, 0.18) 0px, transparent 50%), radial-gradient(at 86% 16%, rgba(255, 179, 118, 0.2) 0px, transparent 50%), radial-gradient(at 26% 88%, rgba(255, 210, 178, 0.25) 0px, transparent 50%)",
      },
    },
  },
  plugins: [forms],
};
