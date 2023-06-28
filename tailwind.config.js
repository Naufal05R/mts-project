/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx}', 'index.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#44D81F',
      },
      boxShadow: {
        card: '-6px -4px 20px rgba(0, 0, 0, 0.25), 6px 6px 20px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      }
    },
  },
  plugins: [],
}

