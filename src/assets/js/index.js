import email from "./email";
import nav from "./nav";
import gallery from "./gallery";
import works from "./works";
import tab from "./tab";

window.addEventListener("load", () => {
  if (document.readyState === "complete") {
    nav();
    works();

    email(
      "#email",
      "aNmIFCrEdTWRIYuFaU3CJK6OeFXFNN6IdCGE9TmRLYmFJUvCcKmO9F3FYN3IpC5EaT0RBYnFbUWCFKpObFCF5NjIbC2E0T="
    );

    gallery(".lightgallery");

    tab("repertuar");
    tab("galeria");
  }
});
