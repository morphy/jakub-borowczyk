import { glob } from "glob";

const ignore = [
  "node_modules/**",
  "src/assets/lib/**",
  "src/_site/**",
  "README.md",
  "src/Gemfile.lock"
];

const files = await glob("**/*.*", { ignore });

const generalRegex = /^((src\/_)?[0-9A-Za-z/.-]+)$/;
const jpegRegex = /(\.jpeg)$/;
const uppercaseRegex = /[A-Z]+/;

files.forEach((file) => {
  if (!generalRegex.test(file)) {
    console.log("[General]", file);
  }
});

files.forEach((file) => {
  if (jpegRegex.test(file)) {
    console.log("[Jpeg]", file);
  }
});

files.forEach((file) => {
  if (uppercaseRegex.test(file)) {
    console.log("[Uppercase]", file);
  }
});
