/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        MiniPortable: { max: "288px" },
        mobil: { min: "289px", max: "480px" },
        Tablette: { min: "481px", max: "761px" },
        Laptop: { min: "762px", max: "1025px" },
        screenLarge: { min: "1026px" },
      },
      fontFamily:{
        "Outfit":['Outfit','sans-serif'],
      },
    },
  },
  plugins: [],
};
