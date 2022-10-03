/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FCF3EC'
      }
    ,fontFamily: {
      khand: ["Khand", "sans-serif"],
      array: ["Array", "sans-serif"]
    }
    },
  },
  plugins: [],
};
