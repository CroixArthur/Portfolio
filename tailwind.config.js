/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
    "./src/**/*"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#16A34A',
          dark: '#22C55E'
        }
      }
    },
  },
  plugins: [
    plugin(function({ matchUtilities }) {
      matchUtilities(
        {
          "bg-radial-gradient": (value) => ({
            backgroundImage: `radial-gradient(${value})`
          })
        },
        {
          supportsNegativeValues: false
        }
      )
    })
  ],
  darkMode: 'class'
}
