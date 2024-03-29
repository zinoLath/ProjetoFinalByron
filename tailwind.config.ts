import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        verde: "#24FF00",
        rosa: "#FF00E5",
        amarelo: "#FAFF00"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        sans: ['var(--font-nexa)'],
        mine: ['Mine', '--font-mine']
      }

    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
  })],
};
export default config;
