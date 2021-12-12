const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        beige: '#f1e9e5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
