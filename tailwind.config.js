/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212", //background color
        secondary: "#1e1e1e", //background color for boxes
        secondaryHover: "#2a2a2a",
        secondaryBorder: "rgba(33, 150, 243, 0.5)", //border on hover on boxes ac
        buttonbg: "#1e1e1e",
        buttonsHover: "#4a5568",
        tertiaryColor: "#4299e1",
        tertiaryColorHover: "#3182ce",
        headerText: "#ffffff",
        secondaryText: "#a0aec0",
      },
    },
  },
  plugins: [],
};
