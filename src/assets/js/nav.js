const nav = () => {
  const wrapper = document.getElementById("wrapper");
  const video = document.getElementById("video");

  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");

  const inner = document.getElementById("inner");
  const closeButton = document.getElementById("close");

  const articles = Array.from(document.querySelectorAll("article[id]"));

  const buttons = Array.from(document.querySelectorAll("button[data-article]"));

  /* Fade in header and footer */

  window.setTimeout(() => {
    header.classList.remove("opacity-0");
    footer.classList.remove("opacity-0");
  }, 200);

  /* Uncollapse header */

  window.setTimeout(() => {
    inner.classList.remove("collapsed");
  }, 400);

  /* Fade in video */

  window.setTimeout(() => {
    wrapper.classList.add("bg-opacity-50");
  }, 1000);

  const hideArticles = () => {
    /* Hide main */

    main.classList.add("opacity-0");

    window.setTimeout(() => {
      main.classList.add("h-0", "invisible");

      /* Show header and footer */

      header.classList.remove("opacity-0", "h-0", "invisible");
      footer.classList.remove("opacity-0", "h-0", "invisible");

      /* Unblur and unscale video */

      video.classList.remove("scale-110", "blur-lg");
    }, 500);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      /* Hide all articles */

      articles.forEach((article) => {
        article.classList.add("hidden");
      });

      /* Show selected article */

      document
        .getElementById(event.target.dataset.article)
        .classList.remove("hidden");

      /* Blur and scale video */

      video.classList.add("scale-110", "blur-lg");

      /* Hide header and footer */

      header.classList.add("opacity-0");
      footer.classList.add("opacity-0");

      window.setTimeout(() => {
        header.classList.add("h-0", "invisible");
        footer.classList.add("h-0", "invisible");

        /* Show main */

        main.classList.remove("opacity-0", "h-0", "invisible");
      }, 500);

      wrapper.addEventListener("click", hideArticles, { once: true });
      closeButton.addEventListener("click", hideArticles, { once: true });
    });
  });

  /* Prevent clicks on main from closing the popup */

  main.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

export default nav;
