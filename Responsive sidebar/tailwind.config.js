/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }

      'xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'lg': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'md': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'sm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'ms': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      's': {'max': '450px'},
      // => @media (max-width: 450px) { ... }

      'vs': {'max': '300px'},
      // => @media (max-width: 300px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
