/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        // Add custom animations here if needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}