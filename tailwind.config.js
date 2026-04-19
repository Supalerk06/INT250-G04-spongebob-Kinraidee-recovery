/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#EE1B24",
        "background-dark": "#121715",
        "card-dark": "#1c211f",
      },
    },
  },
  plugins: [],
}