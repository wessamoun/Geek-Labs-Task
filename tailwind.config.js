/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      accentColor: "#53ACFF",
      orange: "#D94111",
      green: "#118F4B",
      white: "#FFFFFF",
      bGray1: "#181818",
      bGray2: "#202020",
      bGray3: "#313131",
      bGray4: "#3d3c3c",
      text2: "#FFFFFF4D",
      text3: "#979797",
      text4: "#737373"
      
    },
    extend: {},
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
],
};
