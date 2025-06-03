const email = () => {
  const emailElement = document.getElementById("email");

  const email =
    "aNmIFCrEdTWRIYuFaU3CJK6OeFXFNN6IdCGE9TmRLYmFJUvCcKmO9F3FYN3IpC5EaT0RBYnFbUWCFKpObFCF5NjIbC2E0T=";

  emailElement.innerText = atob(
    email
      .split("")
      .filter((char, index) => index % 2 === 0)
      .join("")
  );
};

export default email;
