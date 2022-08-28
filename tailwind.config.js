/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-background': '#111213',
        'brand': '#5F62F1'
      },
    },
  },
  plugins: [],
}