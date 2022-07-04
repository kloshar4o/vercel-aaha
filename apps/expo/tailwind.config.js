const theme = require('app/tailwind.theme')

module.exports = {
  content: ['./App.tsx', '../../packages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...theme,
  },
  plugins: [],
}
