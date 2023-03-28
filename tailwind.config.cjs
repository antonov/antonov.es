/** @type {import('tailwindcss').Config} */

// @ts-ignore
const defaultTheme = require("tailwindcss/defaultTheme");


const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bullet-image': "url('/dot.svg')",
       },
      'fontFamily' : {
        sans: ['var(--asap_condensed-font)', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
};

module.exports = config;
