/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          50: '#C19D56',
          70: '#ece2cc'
        }
      }
    },
    screens: {
        'xs': {'min': '280px', 'max': '639px'},
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1024px'},
        'lg': {'min': '1025px', 'max': '1366px'},
        'xl':{'min': '1367px'}, 
      },
  },
  plugins: [],
}
