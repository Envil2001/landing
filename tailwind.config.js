/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-background': '#111213',
        'input': '#18191c',
        'input-text': '#757575',
        'text-body': '#686C78',
        'primary': '#1A1B1E',
        'brand': '#5F62F1',
        'small-btn': 'rgba(36, 38, 44, 0.4)'
      },
    },
  },
  plugins: [],
}