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
        wide: ['GraphikWide', 'sans-serif']
      },
      colors: {
        orange: "#FF5E00",
        gray: "rgb(32,32,32)"
      }
    },
  },
  plugins: [],
}