/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        play: ['Playfair Display', "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
      },
    },
  },
  plugins: [],
}