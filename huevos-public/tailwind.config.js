/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lima': {
          '50': '#f0fce9',
          '100': '#def7d0',
          '200': '#bff0a6',
          '300': '#97e472',
          '400': '#74d447',
          '500': '#59c52b',
          '600': '#3d941c',
          '700': '#30711a',
          '800': '#2a5a1a',
          '900': '#254d1a',
          '950': '#102a09',
      },
      
      }
    },
  },
  plugins: [],
}

