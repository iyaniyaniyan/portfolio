/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 20px 70px rgba(15, 23, 42, 0.12)',
        glow: '0 18px 50px rgba(20, 184, 166, 0.18)',
      },
      colors: {
        ink: '#102033',
        lagoon: '#0f766e',
        ember: '#d97706',
      },
    },
  },
  plugins: [],
};
