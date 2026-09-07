/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f5f2ec',
        sand: '#ece5d5',
        ink: '#1c1a17',
        gold: '#a07f16',
        goldlight: '#c9a227',
        muted: '#5b564c',
        stone: '#8d8778',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
