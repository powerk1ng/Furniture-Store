/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('https://www.decorilla.com/online-decorating/wp-content/uploads/2020/11/nyc-furniture-stores-lazzoni.jpg')"
      }
    },
  },
  plugins: [],
}
