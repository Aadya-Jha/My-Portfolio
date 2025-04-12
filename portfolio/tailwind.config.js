/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple: "var(--purple)"
      },
      fontFamily:{
        heading:["Poppins", "sans-serif"],
        body:["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

