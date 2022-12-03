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
          hover: colors.gray["200"],
        },
        dark: {
          DEFAULT: "#1a1c1e",
          line: "#2d3436",
          content: colors.neutral["100"],
          font: "#fcfcfc",
          highlight: "#3f8af7",
          unselected: "#898c8e",
          hover: colors.gray["800"],
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
