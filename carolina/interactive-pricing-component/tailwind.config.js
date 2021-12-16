module.exports = {
  mode: 'jit',
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lilac: '#F1F5FE',
      purple: '#293356',
      grey: '#848EAD',
      lightGrey: '#ECF0FB',
      green: '#10D8C4',
      lightGreen: '#A4F3EB',
      darkGreen: '#24AEA1',
      white: '#FFFFFF',
      lightPurple: '#CFD8EF',
      lightOrange: '#FEEDE8',
      darkOrange: '#FF8D68',
    },
    extend: {
      fontFamily: {
        sans: 'manrope',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
