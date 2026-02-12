/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#38bdf8", // De BeadsEngine blauw
          dark: "#0f172a", // Diep donkerblauw/zwart
        },
      },
    },
  },
  plugins: [],
};
