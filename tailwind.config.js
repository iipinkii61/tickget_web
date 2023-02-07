/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        back: "#2E2B2B",
        purpling: "#7572FF",
        lavender: "#B166CC",
        warning: "#F4C856",
        danger: "#F94C57",
        bluer: "#69A6F9",
        mygray: "#D9D9D9",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
