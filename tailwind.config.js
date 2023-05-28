/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      "dark-bg": "#262627",
      "light-bg": "#ECECEC",

      "dark-primary": "#161616",
      "light-primary": "#FFFFFF",

      "dark-btn-bg": "#FFFFFF",
      "light-btn-bg": "#214966",

      "dark-btn-text": "#282828",
      "light-btn-text": "#FFFFFF",

      black: "#000000",
      white: "#FFFFFF",
      blue: "#214966",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
