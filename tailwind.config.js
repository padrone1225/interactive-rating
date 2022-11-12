/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Orange: "hsl(25, 97%, 53%)",
        "Light-Grey": "hsl(217, 12%, 63%)",
        "Medium-Grey": "hsl(216, 12%, 54%)",
        "Dark-Blue": "hsl(213, 19%, 18%)",
        "Black-Blue": "hsl(216, 12%, 8%)",
        "Round-Back": "#37404a",
      },
      fontFamily: {
        Overpass: "Overpass",
      },
    },
  },
  plugins: [],
};
