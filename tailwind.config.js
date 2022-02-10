module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['TiemposHeadline', 'serif'],
        text: ['TiemposText', 'serif'],
        condensed: ['GraphikCond', 'sans-serif'],
        wide: ['GraphikWide', 'sans-serif'],
        caption: ['Graphik', 'sans-serif'],
      },
      colors: {
        orange: "#FF5E00",
        blue: "#201547",
        gray: "#78748E"
      }
    },
  },
  plugins: [],
}