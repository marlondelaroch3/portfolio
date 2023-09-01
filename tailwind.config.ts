import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        whiteCustom: "#EDF9FE",
      },
      backgroundImage: {
        gradientCustom:
          "linear-gradient(90deg, rgba(30, 32, 51, 0.50) 0%, rgba(61, 64, 115, 0.50) 18.75%, rgba(90, 191, 163, 0.50) 85.45%, rgba(37, 236, 181, 0.50) 100%);",
      },
      height: {
        "85": "355px",
      },
      keyframes: {
        "clickHere":{
          '0%' : {transform: "scale(1)"},
          '100%': {transform: "scale(0.5)"}
        }
      },
      animation: {
        "clickHere": "clickHere 1s ease-in-out infinite"
      }
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
