window.addEventListener("load", () => {
  if (document.readyState === "complete") {
    const wrapper = document.getElementById("wrapper");
    const video = document.getElementById("video");

    const header = document.getElementById("header");
    const main = document.getElementById("main");
    const footer = document.getElementById("footer");

    const inner = document.getElementById("inner");
    const closeButton = document.getElementById("close");

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

    /* Navigation */

    const articles = Array.from(document.querySelectorAll("article[id]"));

    const buttons = Array.from(
      document.querySelectorAll("button[data-article]")
    );

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

    /* Gallery */

    const galleries = Array.from(
      document.getElementsByClassName("lightgallery")
    );

    galleries.forEach((gallery) => {
      lightGallery(gallery, {
        plugins: [lgZoom, lgThumbnail, lgHash],
        galleryId: gallery.dataset.galleryId,
        licenseKey: "0000-0000-000-0001"
      });
    });

    /* Email */

    const emailElement = document.getElementById("email");

    const email =
      "aNmIFCrEdTWRIYuFaU3CJK6OeFXFNN6IdCGE9TmRLYmFJUvCcKmO9F3FYN3IpC5EaT0RBYnFbUWCFKpObFCF5NjIbC2E0T=";

    emailElement.innerText = atob(
      email
        .split("")
        .filter((char, index) => index % 2 === 0)
        .join("")
    );

    /* Works */

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
  }
});
