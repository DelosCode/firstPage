/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Archivos donde usas Tailwind
    './public/**/*.html', // Opcional: archivos HTML estáticos,
  ],
  theme: {
    extend: {
      colors: {
        'bg-nav': "#16484B"
      }
    },
  },
  plugins: [],
}

