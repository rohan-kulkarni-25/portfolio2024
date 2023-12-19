/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {

    },
    extend: {
      fontFamily: {
        mona_sans: ["Mona-Sans"],
      },
    },
  },
  plugins: [],
}