const works = () => {
  const workButtons = Array.from(
    document.querySelectorAll("button[data-work]")
  );

  const works = Array.from(document.querySelectorAll("section[id]"));

  const activateWork = (id) => {
    const target = works.find((work) => work.id === id);

    works.forEach((work) => {
      work.classList.replace("opacity-1", "opacity-0");
    });

    window.setTimeout(() => {
      works.forEach((work) => {
        work.classList.replace("block", "hidden");
      });

      target.classList.replace("hidden", "block");

      window.setTimeout(() => {
        target.classList.replace("opacity-0", "opacity-1");
      }, 10);
    }, 200);
  };

  const activateButton = (target) => {
    workButtons.forEach((button) => {
      button.classList.remove("bg-white", "bg-opacity-50");
    });

    target.classList.add("bg-white", "bg-opacity-50");
  };

  workButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      activateButton(event.target);
      activateWork(event.target.dataset.work);
    });
  });
};

export default works;
