const email = (selector, email) => {
  const setEmail = () => {
    const emailElement = document.querySelector(selector);

    emailElement.innerText = atob(
      email
        .split("")
        .filter((char, index) => index % 2 === 0)
        .join("")
    );
  };

  window.setTimeout(setEmail, 1000);
};

export default email;
