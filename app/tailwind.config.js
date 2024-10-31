/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "#982720",
        crimson_light: "#b72d25",
        beige: "#E8E9E1",
        gold: "#9A9162",
      },
      backgroundImage: {
        'sojb': "url('./assets/scales-of-justice-back.png')",
      },
    },
  },
  plugins: [],
};
