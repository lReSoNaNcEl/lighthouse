const offerSlider = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3e3,
  },
  effect: "cards",
});

const offerSliderContainer = document.querySelector(".intro__slider");
const galleryModal = document.querySelector(".gallery__modal");
const galleryCloseButton = document.querySelector("#gallery__close");

const show = (e) => {
  const slideIndex = e.target.parentElement.getAttribute('data-swiper-slide-index');
  gallerySwiper.slideTo(slideIndex);
  toggleModal("99999", "hidden");
  galleryModal.focus();
};

const hide = () => {
  toggleModal("inherit", "auto");
  offerSlider.slideTo(gallerySwiper.activeIndex);
};

offerSliderContainer.addEventListener("click", show);
galleryCloseButton.addEventListener("click", hide);

const toggleModal = (zIndex, overflow) => {
  galleryModal.classList.toggle("hidden");
  galleryModal.classList.toggle("show");

  document.querySelector(".intro-layout").style.zIndex = zIndex;
  document.documentElement.style.overflow = overflow;
};

galleryModal.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "escape") {
    hide();
  }
});
