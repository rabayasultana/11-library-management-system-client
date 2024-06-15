/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#198754",
      },
      fontFamily: {
        lato: '"Lato", sans-serif',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

