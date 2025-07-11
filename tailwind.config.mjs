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
        'brand-teal': {
          light: '#f0fdfa', // Corresponds to teal-50
          DEFAULT: '#14b8a6', // Corresponds to teal-500
          dark: '#0f766e', // Corresponds to teal-700
        },
        'brand-pink': '#ec4899',
        'brand-text': '#404040', // Neutral 700
        'card-orange': '#fed7aa',
        'card-green': '#a7f3d0',
        'card-pink': '#fbcfe8',
      },
    },
  },
  plugins: [],
} 