/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(90deg, #9572FC 25%, #43E7AD 50%, #E1D55D 75%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 67.08%)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};