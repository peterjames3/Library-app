/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      fontfamily: "Ubuntu, sans-serif",
    },
    Screen: {
      sm: "740px",
      md: "765px",
      lg: "1000px",
      xl: "1440px",
    },

    extend: {
      colors: {
        Marineblue: "hsl(213, 96%, 18%)",
        Purplishblue: "hsl(243, 100%, 62%)",
        Pastelblue: "hsl(228, 100%, 84%)",
        Lightblue: "hsl(206, 94%, 87%)",
        Strawberryred: " hsl(354, 84%, 57%)",
        Coolgray: "hsl(231, 11%, 63%)",
        Lightgray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};