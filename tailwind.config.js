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
      fontFamily: {
        //Reconeta: ['Reconeta'],
        sans: ['Recoleta', 'sans-serif'],
        //serif: ['Recolata', 'serif'],
      },
      // that is animation class
      animation: {
        fade: 'fadeIn 500ms ease',
      },
      backgroundImage: (theme) => ({
        collage: "url('../public/images/collage.png')",
        idcol: "url('../public/images/idcol.png')",
      }),
      keyframes: (theme) => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  /* corePlugins: {
    preflight: false,
  }, */
};
