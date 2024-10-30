/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tertiary': '#fa2d48',
        'primary': '#1f2235'
      }
    },
  },
  plugins: [],
}