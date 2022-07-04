const theme = require('app/tailwind.theme')

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ...theme,
  },
  plugins: [],
  important: 'html',
}
