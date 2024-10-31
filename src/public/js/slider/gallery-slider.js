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
        draggable: true
    },
    thumbs: {
        swiper: thumbsSwiper,
    },
    allowTouchMove: false,
    mousewheel: true,
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
            },
            scrollbar: {
                el: undefined,
            },
        },
        992: {},
    },
});
