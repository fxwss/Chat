module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#36393F',
        bg: '#23272E',
        secoundary: '#40444B',
        text: '#FDF8F9'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
