new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3e3,
  },
  effect: "cards",
});


new Swiper(".city-banners-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 10000
  },
  slidesPerView: 1,
  spaceBetween: 20,
})