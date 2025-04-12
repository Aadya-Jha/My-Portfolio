/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple: "var(--purple)",
        "black-light": "var(--black-light)",
        "black-dark": "var(--black-dark)"
      },
      fontFamily:{
        heading:["Poppins", "sans-serif"],
        body:["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

