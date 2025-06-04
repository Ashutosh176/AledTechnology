/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf3',
          100: '#ccd5e7',
          200: '#99abd0',
          300: '#6682b8',
          400: '#3358a1',
          500: '#0a2463', // Main primary color
          600: '#091d50',
          700: '#07163c',
          800: '#050e29',
          900: '#020715',
        },
        secondary: {
          50: '#ebf7fc',
          100: '#d6eef9',
          200: '#aedef3',
          300: '#85cded',
          400: '#5dbde7',
          500: '#3e92cc', // Main secondary color
          600: '#2674a3',
          700: '#1d577a',
          800: '#133952',
          900: '#0a1c29',
        },
        accent: {
          50: '#fff5ed',
          100: '#ffeadb',
          200: '#ffd5b6',
          300: '#ffc192',
          400: '#ffac6d',
          500: '#ff8c42', // Main accent color
          600: '#cc7035',
          700: '#995428',
          800: '#66381b',
          900: '#331c0d',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};