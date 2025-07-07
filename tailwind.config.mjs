/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Kalam"', 'cursive'],
      },
      colors: {
        'brand-teal': '#14b8a6', // Similar to teal-500
        'brand-pink': '#ec4899',
        'card-orange': '#fed7aa',
        'card-green': '#a7f3d0',
        'card-pink': '#fbcfe8',
      },
    },
  },
  plugins: [],
} 