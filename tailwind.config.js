/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'voksel-grad-1': "linear-gradient(90deg, #003399, #C289FF)",
        'voksel-grad-2': "linear-gradient(90deg, #2D56A7, #0E7DC1)",
        'voksel-blue': "#0E7DC1",
        'voksel-dark': "#001932"
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwind-fontawesome')
  ],
}