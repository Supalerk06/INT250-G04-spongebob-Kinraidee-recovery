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
        secondary: "#f97316", 
        danger: "#f97316",    
        "background-dark": "#121715",
        "card-dark": "#1c211f",
      },
    },
  },
  plugins: [],
}