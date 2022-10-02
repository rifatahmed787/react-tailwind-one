/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f28280",

          "secondary": "#ffc9d9",

          "accent": "#55ff4c",

          "neutral": "#2D2636",

          "base-100": "#30434F",

          "info": "#3786E6",

          "success": "#26BA64",

          "warning": "#977A11",

          "error": "#E6567A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
