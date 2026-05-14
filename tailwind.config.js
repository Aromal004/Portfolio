/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'code': ['Fira Code', 'monospace'],
        'body': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'cyber-cyan':   '#00f5d4',
        'cyber-blue':   '#4361ee',
        'cyber-purple': '#7b2fff',
        'cyber-green':  '#39ff14',
        'dark-primary': '#050914',
        'dark-secondary': '#080d1e',
        'dark-card':    '#0c1221',
      },
    },
  },
  plugins: [],
}
