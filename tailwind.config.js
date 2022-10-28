/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'vilh-blue': '#00F',
        'highlight': '#888bf7',
        'theme':  '#00bfff',
      }, 
      screens: {
        'xs': '320px',  // @media (min-width: 320px) { ... }
      },

      spacing: {
        '20px': '20px',
        '10px': '10px',
        '5px': '5px',
      }
    },
  },
  plugins: [],
}
