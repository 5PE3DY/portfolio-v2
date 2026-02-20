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
        bloom: {
          beige: "#F2F0E9", // De achtergrond uit de render
          gold: "#D4AF37", // Accentkleur voor Studio Bloom
        },
        bakery: {
          beige: "#F5F2ED",
          brown: "#4A3728",
          accent: "#C19A6B",
          paper: "#FAF7F2",
        },
      },
      fontFamily: {
        // Zorg dat je Playfair Display in je index.html hebt geladen!
        serif: ['"Playfair Display"', "serif"],
      },
      spacing: {
        100: "400px", // Voor de h-100 die Tailwind suggereerde
        125: "500px", // Voor de md:h-125
      },
    },
  },
  plugins: [],
};
