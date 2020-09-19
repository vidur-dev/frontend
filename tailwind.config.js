const nord = require('tailwind-nord');
const aspectRatios = require('tailwindcss-aspect-ratio');
const typography = require('@tailwindcss/typography');
const customForms = require('@tailwindcss/custom-forms');

module.exports = {
  purge: ['./pages/*.js', './components/*.js'],
  theme: {
    aspectRatio: {
      a4: [210, 297],
    },
    extend: {},
  },
  variants: {},
  plugins: [nord, aspectRatios, typography, customForms],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
