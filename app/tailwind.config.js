/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#c2e074", // pastel green

        "secondary": "#ffcc6c", // pastel yellow

        "accent": "#df4b57", // vermelho 

        "neutral": "#f1f2da", // branco

        "base-100": "#feffe6", // yellow tinted white

        "primary-content" : "#000000", // black

        "secondary-content" : "#000000", // black

        "accent-content" : "#000000", // black
        
        "info": "#2d32f4",

        "info-content": "#ffffff", // white

        "success": "#3eaa59",

        "success-content": "#000000", // black

        "warning": "#dbab0a",

        "warning-content": "#000000", // black

        "error": "#f85149",

        "error-content": "#000000", // black
      },
    },],
  },
  plugins: [require("daisyui")],
}
