/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#f16e00',
          100: '#f16e00',
          200: '#f16e00',
          300: '#f16e00',
          400: '#f16e00',
          500: '#f16e00',
          600: '#f16e00',
          700: '#f16e00',
          800: '#f16e00',
          900: '#f16e00',
        },
      },
    },
  },
  plugins: [],
}
