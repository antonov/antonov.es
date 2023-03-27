/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bullet-image': "url('/dot.svg')",
       },
      'fontFamily' : {
        sans: ['var(--asap_condensed-font)', ...fontFamily.serif],
      }
    },
  },
  plugins: [],
};

module.exports = config;
