const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: "white",
          line: "#dcddde",
          font: "#1e1e1e",
          unselected: "#898c8e",
          highlight: "#3f8af7",
          content: colors.gray["100"],
        },
        dark: {
          DEFAULT: "white",
          line: "#dcddde",
          font: "#1e1e1e",
          unselected: "#898c8e",
          highlight: "#3f8af7",
          content: colors.gray["100"],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  content: ["./src/**/*.*"],
  plugins: [],
};
