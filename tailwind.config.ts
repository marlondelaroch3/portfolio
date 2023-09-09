import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1024px",
        lgDesktop: "1440px",
      },
      colors: {
        whiteCustom: "#EDF9FE",
      },
      backgroundColor: {
        mainBgColor: "#324359",
        purpleColor: "#3D4073",
      },
      backgroundImage: {
        gradientCustom:
          "linear-gradient(90deg, rgba(30, 32, 51, 0.50) 0%, rgba(61, 64, 115, 0.50) 18.75%, rgba(90, 191, 163, 0.50) 85.45%, rgba(37, 236, 181, 0.50) 100%);",
      },
      height: {
        "85": "355px",
      },
      spacing: {
        "5c": "5%",
        "10c": "10%",
        "1/6": "16.666667%",
        "1/5": "20%",
        "1/4": "25%",
        "1/3": "33.333333%",
        "2/5": "40%",
        "1/2": "50%",
        "3/5": "60%",
        "2/3": "66.666667%",
        "3/4": "75%",
        "4/5": "80%",
        "5/6": "83.333333%",
        "1c": "100%",
      },
      keyframes: {
        clickHere: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.5)" },
        },
        float: {
          "0%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(-10px)"},
          "100%": {transform: "translateY(0)"},
          }
      },
      animation: {
        clickHere: "clickHere 1s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
export default config;
