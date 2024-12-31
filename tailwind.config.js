module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#a8d49b",
        "primary-dark": "rgba(46, 45, 43, 1)",
        "primary-blue": "#b4cfeb",
        "dark-gray": "#2e2d2b",
        "medium-gray": "#343a40",
        "light-gray": "#98a6ad",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        heading: ['"Raleway"', "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at bottom left, rgba(1, 49, 1, 0.3) 0%, rgba(1, 102, 102, 0.5) 40%, rgba(15, 49, 49, 0.9) 70%, rgba(20, 20, 20, 1) 100%)",
      },
    },
  },
  plugins: [],
};
