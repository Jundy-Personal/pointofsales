/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#2c586e',
        'primary-h': '#3b7897',
        secondary: '#bed0db',
        'secondary-h': '#abbbc5',
      },
    },
  },
  plugins: [],
};
