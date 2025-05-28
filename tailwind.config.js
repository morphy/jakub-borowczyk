/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/_includes/**/*.{md,markdown,liquid,html,svg}",
    "./src/_layouts/**/*.{md,markdown,liquid,html,svg}",
    "./src/_pages/**/*.{md,markdown,liquid,html,svg}",
    "./src/_posts/**/*.{md,markdown,liquid,html,svg}",
    "./src/_articles/**/*.{md,markdown,liquid,html,svg}",
    "./src/_data/picture.yml",
    "./src/assets/js/*.*"
  ],
  safelist: ["bg-opacity-40"]
};
