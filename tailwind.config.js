/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        crimson: "#f1356d",
      },
      boxShadow: {
        item: "1px 0px 10px 5px rgba(0, 0, 0, 0.2)",
        item2: "0px 0px 2px 0.2px rgba(0,0,0,0.37)",
      },
      transitionDuration: {
        25: "25ms",
      },
    },
  },
  plugins: [],
};