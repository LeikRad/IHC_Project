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

        "primary": "#38bdf8",

        "secondary": "#34d399",

        "accent": "#c4b5fd",

        "neutral": "#111827",

        "base-100": "#FFFFFF",

        "info": "#3b82f6",

        "success": "#84cc16",

        "warning": "#FF9944",

        "error": "#F87272",
      },
    },],
  },
  plugins: [require("daisyui")],
}
