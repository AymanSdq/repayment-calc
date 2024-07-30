/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        limeColor : "hsl(61, 70%, 52%)",
        redColor : "hsl(4, 69%, 50%)",
        colorslate100 : "hsl(202, 86%, 94%)",
        colorslate300 : "hsl(203, 41%, 72%)",
        colorslate500 : "hsl(200, 26%, 54%)",
        colorslate700 : "hsl(200, 24%, 40%)",
        colorslate900 : "hsl(202, 55%, 16%)"
      }
    },
  },
  plugins: [],
}

