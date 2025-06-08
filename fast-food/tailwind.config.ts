// tailwind.config.js (در ریشه پروژه)
module.exports = {
  content: [
    '.src/app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['var(--font-lobster)', 'cursive'],
      },
    },
  },
  plugins: [],
};
