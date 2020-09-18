const nord = require('tailwind-nord');
const aspectRatios = require('tailwindcss-aspect-ratio');
const typography = require('@tailwindcss/typography');

module.exports = {
  purge: [],
  theme: {
    extend: {
      width: {
        viewport: '100vw',
      },
      height: {
        viewport: '100vh',
      },
    },
  },
  variants: {},
  plugins: [nord, aspectRatios, typography],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
