module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000438",
        accent: "#FF0000",
        secondary: "#F2F2F2",
        softOrange: "#FF6B35",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Spectral", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};