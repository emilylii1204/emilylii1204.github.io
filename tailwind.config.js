/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    container:{
    	center:true,
    },
  },
  plugins: [],
}

