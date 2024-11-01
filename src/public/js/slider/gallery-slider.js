const thumbsSwiper = new Swiper(".thumbs__swiper", {
    spaceBetween: 15,
    direction: "vertical",
    slidesPerView: 6,
    freeMode: true,
    mousewheel: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
});

const gallerySwiper = new Swiper(".gallery__swiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    thumbs: {
        swiper: thumbsSwiper,
    },
    allowTouchMove: false,
    speed: 400,
    mousewheel: {
        sensitivity: 0.65
    },
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
            }
        },
        992: {},
    },
});


thumbsSwiper.on('click', (swiper) => {
    const clickedSlide = swiper.clickedSlide;
    const index = swiper.slides.indexOf(clickedSlide)

    setActiveSlide(index)
});

gallerySwiper.on('progress', (swiper) => {
    setActiveSlide(swiper.snapIndex);
})

function setActiveSlide(index) {
    console.log(thumbsSwiper)
    thumbsSwiper.slides.forEach(slide => slide?.classList.remove('swiper-slide-thumb-active'));
    thumbsSwiper.slideTo(index)
    thumbsSwiper.slides[index]?.classList.add('swiper-slide-thumb-active');
}