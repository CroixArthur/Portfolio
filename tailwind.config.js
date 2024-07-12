/** @type {import('tailwindcss').Config} */
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
  plugins: [],
  darkMode: 'class'
}

