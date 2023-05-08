/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '25rem',
        '128': '32rem',
        '144': '45rem',
        '250': '55rem',
        '256': '64rem',
      },
    },
  },
  plugins: [],
}
