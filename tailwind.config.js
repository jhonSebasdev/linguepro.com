/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./data/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ef1b16",
          dark: "#070a12",
          panel: "#0d1324",
          panel2: "#111a2e",
          ink: "#f8fafc",
          muted: "#9aa7bd",
        },
      },
      boxShadow: {
        glow: "0 22px 80px rgba(239, 27, 22, 0.24)",
        card: "0 18px 60px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
