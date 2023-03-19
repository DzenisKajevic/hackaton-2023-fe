/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#142214",
        secondary: "#ffffff",
        accent: "#EAFF5F",
        text: "#757575",
        grey: "#B4C0CE",
        grey2: "#757575",
        grey3: "#343333",
        grey4: "#CDCDCD",
        lgrey: "#F3F3F3",
        blue: "#00A3FF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ms: "530px",
      ss: "620px",
      sm: "768px",
      smd: "850px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
