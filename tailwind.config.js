/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fdc435",
        secondary: "#828282",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};


