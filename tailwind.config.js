module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        'ubuntu-bold': ['Ubuntu', 'sans-serif'],
      },
      fontWeight: {
        bold: 700,
        'extra-bold': 900,
      },
      fontSize: {
        '1.5xl': '1.375rem',
      },
      colors: {
        mainThemeColor: '#00c8aa',
        skillSectionBackground: '#ffffff',
        skillTagBackground: '#00c8aa',
        skillTagText: '#ffffff',
      },
      margin: {
        '0.6': '0.15rem', // Assuming you want mt-0.6 to equal to 0.15rem
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
