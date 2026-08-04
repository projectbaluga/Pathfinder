/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F4FF',
          100: '#EBE9FE',
          200: '#D7D4FD',
          300: '#B9B3FC',
          400: '#9489FA',
          500: '#5A4FF3', // Base Docy Indigo
          600: '#4A3FE0', // Darker Docy Indigo
          700: '#3D31C7',
          800: '#3327A3',
          900: '#2C2183',
        },
        accent: {
          50: '#FFFBE6',
          100: '#FFF5CC',
          200: '#FFE999',
          300: '#FFD766',
          400: '#FFBE33',
          500: '#FBA919', // Docy Accent Orange
          600: '#D9890F',
          700: '#B3690B',
          800: '#8C4D08',
          900: '#663605',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #6D5DF6 0%, #4A3FE0 100%)',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(80, 70, 230, 0.15)',
        'soft-lg': '0 20px 50px -12px rgba(80, 70, 230, 0.22)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        'pill': '9999px',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
