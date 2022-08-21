/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryDark: "#262833",
        secondaryOrange: "#262833",
        secondaryGreen: "#4ACFAC",
        secondaryPurple: "#7E8CE0",
        secondaryBlue: "#36C7D0",
        secondaryPink: "FFA48E",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        md: "3rem",
        l: "4rem",
        xl: "8rem",
      },
      width: {
        small: "5rem",
      },
    },
  },
  plugins: [],
};
