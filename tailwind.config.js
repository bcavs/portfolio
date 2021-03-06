module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "dark-blue": "#0A2540",
        "sky-blue": "#00D4FF",
        "electric-purple": "#635BFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
