/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#A18A68",
        "dark-gray": "#707070",
        "gray": "#D8D8D8",
        "light-gray": "#EFEFEF",
        "error": "##D82700"
      }
    },
    screens: {
      xs: "450px",

      sm: "640px",

      md: "830px",

      lg: "1024px",

      xl: "1280px",
    },
  },
  plugins: [],
}
