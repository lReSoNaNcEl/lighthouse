const thumbsSwiper = new Swiper(".thumbs__swiper", {
    spaceBetween: 15,
    direction: "vertical",
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

const gallerySwiper = new Swiper(".gallery__swiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    thumbs: {
        swiper: thumbsSwiper,
    },
    mousewheel: true,
    breakpoints: {
        0: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            freeMode: false,
            direction: "horizontal",
            mousewheel: false
        },
        992: {},
    },
});
