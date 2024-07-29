const gallery = document.getElementById("gallery");

let zoomCount = 0;
const maxZoomCount = 2;

gallery.addEventListener("click", (e) => {
  if (zoomCount !== maxZoomCount) e.preventDefault();

  switch (zoomCount) {
    case 1: {
      gallery.classList.remove("gallery__grid--2");
      gallery.classList.add("gallery__grid--1");
      zoomCount++;
      return;
    }
    case 2:
      return;
    default: {
      gallery.classList.remove("gallery__grid--3");
      gallery.classList.add("gallery__grid--2");
      zoomCount++;
      return;
    }
  }
});
