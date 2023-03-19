/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "12px",
      md: "14px",
      base: "16px",
      xl: "18px",
      xl: "20px",
      xxl: "24px",
      xxxl: "32px",
      displayXS: "40px",
      displaySM: "48px",
      displayMD: "56px",
      displayLG: "64px",
      displayXL: "72px",
      displayXXL: "80px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
