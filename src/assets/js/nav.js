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

  const intro = () => {
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
  };

  const showNav = () => {
    header.classList.remove("hidden");
    footer.classList.remove("hidden");

    window.setTimeout(() => {
      header.classList.remove("opacity-0");
      footer.classList.remove("opacity-0");

      video.classList.remove("scale-110", "blur-lg");
    }, 20);
  };

  const hideNav = () => {
    header.classList.add("opacity-0");
    footer.classList.add("opacity-0");
    video.classList.add("scale-110", "blur-lg");

    window.setTimeout(() => {
      header.classList.add("hidden");
      footer.classList.add("hidden");
    }, 500);
  };

  const hideArticles = (pushState = true) => {
    main.classList.add("opacity-0");

    window.setTimeout(() => {
      main.classList.add("hidden");
      articles.forEach((article) => article.classList.add("hidden"));

      showNav();
    }, 500);

    if (pushState) {
      window.history.pushState({ activeArticle: null }, null, "");
    }
  };

  const showArticle = (articleId) => {
    wrapper.addEventListener("click", hideArticles, { once: true });

    hideNav();

    const article = document.getElementById(articleId);

    window.setTimeout(() => {
      main.classList.remove("hidden");
      article.classList.remove("hidden");

      window.setTimeout(() => {
        main.classList.remove("opacity-0");
      }, 20);
    }, 500);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const articleId = event.target.dataset.article;

      showArticle(articleId);
      window.history.pushState({ activeArticle: articleId }, null, "");
    });
  });

  main.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", hideArticles);

  intro();

  window.history.replaceState({ activeArticle: null }, null, "");

  window.addEventListener("popstate", (event) => {
    if (event.state.activeArticle) {
      showArticle(event.state.activeArticle);
      return;
    }

    hideArticles(false);
  });
};

export default nav;
