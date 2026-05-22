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
          dark: "#08090d",
          ink: "#111216",
          muted: "#6f7787",
        },
      },
      boxShadow: {
        glow: "0 22px 80px rgba(239, 27, 22, 0.22)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
