/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      color: {
        primary: '#9C7962'
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

