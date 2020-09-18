const nord = require('tailwind-nord');

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
  plugins: [nord],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
