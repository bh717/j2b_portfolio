module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000'
      },
      backgroundImage: {
        'home': "url('/earth.jpg')",
        'stars': "url('/stars.jpg')"
      },
      fontFamily: {
        home: ["home", "regular"],
        nav: ["nav", "regular"],
      },
    },
  },
  plugins: [],
}
