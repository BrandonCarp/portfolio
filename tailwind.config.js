/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xms: "320px",
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primaryDark: "#111114",
        secondaryDark: "#131316",
        secondaryOrange: "#262833",
        secondaryGreen: "#4ACFAC",
        secondaryPurple: "#7E8CE0",
        secondaryPurpleLight: "#adb6eb",
        secondaryBlue: "#36C7D0",
        secondaryPink: "#FFA48E",
        linkedInColor: "#0072b1",
        lightGrey: "#808080",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1.35rem",
        baselg: "1.68rem",
        md: "2.5rem",
        l: "2.8rem",
        xl: "3.5rem",
        spsml: "2rem",
        spmd: "3.5rem",
        spl: "4rem",
      },
      width: {
        small: "5rem",
      },
      listStyle: {
        circle: "circle",
      },
    },
  },
  plugins: [],
};
