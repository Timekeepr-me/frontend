// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./shared/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3a3a3a",
        secondary: "#535353",
        ternary: "#ffeb85",
        buttonPrimary: "#000",
        buttonText: "#ffeb85",
        buttonShadow: "#ffeb85",
      },
      boxShadow: {
        yellow: "3px 5px 2px 2px #ffeb85",
      },
    },
  },
  plugins: [],
};
