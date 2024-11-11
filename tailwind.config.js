/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // React components and pages
    "./public/**/*.html",            // HTML files in the public folder
    "./src/**/*.{css,scss}",         // CSS and SCSS files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
