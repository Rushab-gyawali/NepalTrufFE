/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Update this to match your file paths
  darkMode: 'class', // Optional: Enable dark mode
  theme: {
    extend: {}, // Extend default styles
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ], // Add Tailwind plugins if needed
};
