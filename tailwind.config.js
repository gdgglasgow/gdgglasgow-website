/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        dark:'#171717',
        light:'#d6d3d1'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};