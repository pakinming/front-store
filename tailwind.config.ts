import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#48CAE4",
        secondary: "#6196DD",
      },

      //  TODO: fix: gradient bg base color
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },

      // background-image: linear-gradient(to right bottom, #48cae4, #3dbee6, #40b2e7, #4ea4e4, #6196dd);

      backgroundImage: {
        "linear-gradient":
          "linear-gradient(to right bottom, #48cae4, #3dbee6, #40b2e7, #4ea4e4, #6196dd)",
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["light", "dark"],
  },
};
export default config;
