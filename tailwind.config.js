/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // activation du mode sombre
  content: [
    "./index.html",           // fichier HTML principal
    "./src/**/*.{js,jsx,ts,tsx}" // tous les fichiers React dans src
  ],
  theme: {
    extend: {}, // tu peux étendre ton thème ici si besoin
  },
  plugins: [],
  safelist: [
    // ajoute ici toutes les classes dynamiques que Tailwind doit inclure
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "text-red-500",
    "text-blue-500",
    "text-green-500",
  ],
};
