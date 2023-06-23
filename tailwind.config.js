module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', // This line is updated
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: ['dark'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
