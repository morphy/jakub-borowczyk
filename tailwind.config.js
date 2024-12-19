/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{md,markdown,liquid,html,svg}",
    "./_layouts/**/*.{md,markdown,liquid,html,svg}",
    "./_pages/**/*.{md,markdown,liquid,html,svg}",
    "./_posts/**/*.{md,markdown,liquid,html,svg}",
    "./_articles/**/*.{md,markdown,liquid,html,svg}",
    "./_data/picture.yml",
    "./assets/js/*.*"
  ],
  safelist: ["bg-opacity-40"]
};
