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
        /* collage: "url('../public/images/collage.png')", */
        collage: "url('../public/images/idcollage.png')",
        greenCloud: "url('../public/images/green-cloud.png')",
        pinkCloudBottom: "url('../public/images/pink-cloud-bottom.png')",
        pinkCloudUp: "url('../public/images/pink-cloud-up.png')",
        purpleCloudBottom: "url('../public/images/purple-cloud-bottom.png')",
        purpleCloudUp: "url('../public/images/purple-cloud-up.png')",
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
