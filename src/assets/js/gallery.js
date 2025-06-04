const gallery = (selector) => {
  const galleries = document.querySelectorAll(selector);

  galleries.forEach((gallery) => {
    lightGallery(gallery, {
      plugins: [lgZoom, lgThumbnail, lgHash],
      galleryId: gallery.dataset.galleryId,
      licenseKey: "0000-0000-000-0001"
    });
  });
};

export default gallery;
