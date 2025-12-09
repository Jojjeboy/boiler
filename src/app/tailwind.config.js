/** @type {import('tailwindcss').Config} */
module.exports = {
  // Här talar vi om för Tailwind var den ska leta efter klasser (Angular-filer)
  content: [
    "./src/**/*.{html,ts}", // Denna rad inkluderar alla .html OCH .ts filer.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}