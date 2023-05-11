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

        "primary": "#344e41", // dark green, meio embaçado

        "secondary": "#3a5a40", //green, mais vivo

        "accent": "#588157", // green fusco

        "neutral": "#dad7cd", // branco

        "base-100": "#b5c49c", // verde claro

        "info": "#3b82f6",

        "success": "#84cc16",

        "warning": "#FF9944",

        "error": "#F87272",
      },
    },],
  },
  plugins: [require("daisyui")],
}
