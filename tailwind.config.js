/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-0": "#0B0B0C",
        "secondary-2": "#121212",
        "tertiary-3": "#0E0E10",
        "primary-1": "#EC617O",
        "text-1": "#EDEDED",
        "text-2": "#A8A8A8",
        "text-3": "#575757",
      },
    },
  },
  plugins: [],
};
