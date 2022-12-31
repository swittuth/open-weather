/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        appear_1st: 'appear 1s ease-in-out infinite',
        appear_2nd: 'appear 1s ease-in-out 0.33s infinite',
        appear_3rd: 'appear 1s ease-in-out 0.66s infinite',
      },
    },
  },
  plugins: [],
};
