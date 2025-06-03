import email from "./email";
import nav from "./nav";
import gallery from "./gallery";
import works from "./works";

window.addEventListener("load", () => {
  if (document.readyState === "complete") {
    nav();
    email();
    gallery();
    works();
  }
});
