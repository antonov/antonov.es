const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bullet-image': "url('/dot.svg')",
       },
      'fontFamily' : {
        sans: ['var(--asap_condensed-font)', ...fontFamily.sans],
      }
    },
  },
  plugins: [],
};

module.exports = config;
