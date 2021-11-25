module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lilac: '#F1F5FE',
      purple: '#293356',
      grey: '#848EAD',
      green: '#10D8C4',
      white: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        sans: 'manrope',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
