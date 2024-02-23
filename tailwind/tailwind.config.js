/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        '200': '200px',
        'sm': '200px',
        'md': '300px',
        'lg': '400px',
        'xl': '500px',
      }
    }
    },
  variants: {},

  plugins: [
    require('flowbite/plugin')
  ],
}


