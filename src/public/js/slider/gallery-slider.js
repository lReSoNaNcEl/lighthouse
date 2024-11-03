const thumbsSwiper = new Swiper(".thumbs__swiper", {
  spaceBetween: 15,
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  breakpoints: {
    0: {
      slidesPerView: "auto",
    },
    992: {
      slidesPerView: "auto",
    },
  },
});

const gallerySwiperOptions = {
  mousewheel: {
    sensitivity: 0.65,
  },
  allowTouchMove: true,
  freeMode: true,
  thumbs: {
    swiper: thumbsSwiper,
  },
  zoom: true,
  breakpoints: {
    0: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      freeMode: false,
      allowTouchMove: true,
      direction: "horizontal",
      mousewheel: false,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        modifierClass: "gallery__pagination__",
      },
      scrollbar: {
        el: undefined,
      },
    },
    480: {
      direction: "vertical",
      slidesPerView: "auto",
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      zoom: false,
      speed: 400,
    },
  },
};

let gallerySwiper = new Swiper(".gallery__swiper", gallerySwiperOptions);

thumbsSwiper.on("click", (swiper) => {
  const clickedSlide = swiper.clickedSlide;
  const index = swiper.slides.indexOf(clickedSlide);

  setActiveSlide(index);
});

gallerySwiper.on("progress", (swiper) => {
  setActiveSlide(swiper.snapIndex);
});

function setActiveSlide(index) {
  thumbsSwiper.slides.forEach((slide) =>
    slide?.classList.remove("swiper-slide-thumb-active"),
  );
  thumbsSwiper.slideTo(index);
  thumbsSwiper.slides[index]?.classList.add("swiper-slide-thumb-active");
}
