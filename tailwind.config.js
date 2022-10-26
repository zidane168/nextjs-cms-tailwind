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
      }
    },
  },
  plugins: [],
}
