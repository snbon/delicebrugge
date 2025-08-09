/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        chocolate: '#4e342e',
        burgundy: '#7a0019',
        cream: '#f9f5f0',
        gold: '#b08968',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      backgroundImage: {
        'spotlight':
          'radial-gradient(600px 300px at 20% 0%, rgba(255, 255, 255, 0.15), transparent), radial-gradient(800px 400px at 100% 10%, rgba(249, 115, 22, 0.08), transparent)',
      },
    },
  },
  plugins: [],
};

