module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      'pack-train': "url('../public/cyber-bg.jpg')",
    },
    fontFamily: {
      Merriweather:["Merriweather"],
      LibreBaskerville:["Libre Baskerville"],
      Oswald:['Oswald'],
      Rubik:['Rubik'],
      SignikaNegative:['Signika Negative']
     },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
