/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '@keyframes slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        '.slider': {
          // animation: 'slide 20s linear infinite',
        },
        '.slick-dots li button:before': {
          content: '""',
          color: '#f3f3f3', // This is the 'white-100' color from your configuration
        },
        '.slick-dots li.slick-active button:before': {
          color: '#aaa6c3', // This is the 'secondary' color from your configuration
        },
      });
    },
  ],
};
