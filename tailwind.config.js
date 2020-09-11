module.exports = {
  purge: [],
  theme: {
    extend: {
      width: {
        'viewport': '100vw'
      },
      height: {
        'viewport': '100vh'
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwind-nord')
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
