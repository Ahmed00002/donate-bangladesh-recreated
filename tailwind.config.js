/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./blog.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        paraColor: "rgba(17, 17, 17, 0.7)",
      },
    },
  },
  plugins: [require("daisyui")],
};
