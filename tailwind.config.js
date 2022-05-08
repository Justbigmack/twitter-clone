module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': 'rgb(231, 233, 234)',
        'dark-gray': 'rgb(113, 118, 123)',
        'gray-subtle': 'rgb(47, 51, 54)',
      }
    },
  },
  plugins: [],
};
