module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      '0': '0',
      'bar': '80px',
      'panel': '350px',
      'page': '100%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
