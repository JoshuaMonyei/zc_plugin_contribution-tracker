module.exports = {
  prefix: 'ct-',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brand: {
          green: {
            dark: '#00B87C',
            light: '#E1FDF4'
          },
          black: '#1D1C1D',
          gray: {
            light: {
              1: '#616161',
              2: '#EFEFEF'
            }
          }
        },
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
