/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: "rgba(0,0,0,0)",
        dark: "rgba(46,45,41,1)",
        bronze: "rgba(214,157,112,1)",
        accent: "rgba(214,157,112,1)",
      },
    },
  },
  plugins: [],
};
