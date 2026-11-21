/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cenk: {
          orange: '#FF5722',
          orangeDark: '#F4511E',
          orangeLight: '#FF8A65',
          dark: '#121418',
          steel: '#1E2229',
          anthracite: '#2C3440',
          warning: '#FFB300',
          danger: '#EF4444',
        }
      },
      fontFamily: {
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        tech: ['"Space Grotesk"', 'monospace', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(to right, rgba(255, 87, 34, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 87, 34, 0.07) 1px, transparent 1px)',
        'blueprint-grid': 'linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
