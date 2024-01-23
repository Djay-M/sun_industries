/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#222c35", //"#063970",
        backgroundSecondary: "#1b232a", // "bg-blue-900"
        backgroundNavbar: "white",
        backgroundSecondaryNavbar: "#f9a34f",
        textPrimary: "white",
        textSecondary: "#ff9636",
        textNavbar: "white", //"#004152",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      sans: ["Roboto"],
      serif: ["Roboto"],
    },
  },
  plugins: [],
};
