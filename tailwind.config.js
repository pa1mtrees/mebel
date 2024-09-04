/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'red': '#ff0000',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'custom-gray': '#cdcfd1',
      'gray-light': '#a1b3d1',
      'custom-white': '#ffffff',
      'custom-gray-text': '#63656a',
    },
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [
  ],
}

