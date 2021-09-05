module.exports = {
  purge: [],
  purge: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./slices/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "small-phone": { max: "320px" },
      // => @media (max-width: 320px) { ... }

      phone: "425px",
      // => @media (min-width: 425px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }

      "big-desktop": "2560px"
      // => @media (min-width: 2560px) { ... }
    },
    extend: {
      spacing: {
        152: "44rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
