/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'ink-black': '#0a0a0a',
        'paper-white': '#f5f5f5',
        'gold-accent': '#d4af37',
      }
    },
  },
  plugins: [],
}
