/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        EB : 'ExtraBold',
        B: 'Bold',
        BI: 'BoldItalic',
        I: 'Italic',
        R: 'Regular',
        EBI: 'ExtraBoldItalic',
        SB: 'SemiBold',
        MR: 'MontserratRegular'

      }
    },
  },
  plugins: [],
}

