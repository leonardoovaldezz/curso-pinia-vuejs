/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: '#4caf50',  // Verde para representar éxito
        secondary: '#607d8b',  // Gris azulado para representar secundario
        accent: '#ff9800',  // Naranja para representar acento
        error: '#f44336',  // Rojo para representar error
        primary: '#2196f3',  // Azul para representar el principal
      }
    },
  },

  plugins: [],
}

