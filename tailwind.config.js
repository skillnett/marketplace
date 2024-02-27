/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xsm: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Gilroy", "sans-serif"],
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    container: {
      center: true,
      padding: {
        xsm: "1rem",
        sm: "2rem",
        lg: "1rem",
        xl: "0rem",
      },
      width: "1252px",
    },
    colors: {
      primaryTeal: "#05494C",
      primaryFooter: "#05494C",
      accentRed: "#E0383D",
      accentGreen: "#2DC008",
      accentYellow: "#FFCA02",
      accentOrange: "#FFAE34",
      fontGreyLight: "#888888",
      fontGrey: "#222222",
      fontBlack: "#000000",
      lightColor: "#ffffff",
      inputBg: "#f3f6f6",
      dropdownText: "#bcbaba",
      borderCard: "#C4C0C0",
      location: "9FA3A3",
      referencesBg: "#FFFCF0",
    },
    borderRadius: {
      full: "9999px",
      4: "0.25rem" /* 4px */,
      10: "0.625rem" /* 10px */,
      15: "0.938rem" /* 15px */,
      20: "1.25rem" /* 20px */,
      25: "1.563rem" /* 25px */,
      35: "2.188rem" /* 35px */,
    },
    boxShadow: {
      searchShadow:
        " 16px 16px 8px 0 rgba(0, 0, 0, 0.04), -16px 0 8px 0 rgba(0, 0, 0, 0.04)",
      cardShadow: "0 12px 9px 0 rgba(0, 0, 0, 0.05)",
      referencesShadow: "0 12px 8px 0 rgba(0, 0, 0, 0.05)",
    },
  },
  plugins: [],
};
