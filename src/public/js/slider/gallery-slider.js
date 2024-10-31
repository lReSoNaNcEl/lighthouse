const thumbsSwiper = new Swiper(".thumbs__swiper", {
    spaceBetween: 15,
    direction: "vertical",
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
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

let prevProgress
let reachEnd

const lastIndex = gallerySwiper.slides.length - 1


thumbsSwiper.on('click', (swiper, event) => {
    const clickedSlide = swiper.clickedSlide; // Получаем кликнутый слайд

    const index = swiper.slides.indexOf(clickedSlide)
    
    if (index === lastIndex) {
        removeActiveClasses()
        setActiveSlide(index)
    }
});

gallerySwiper.on('scroll', (swiper) => {
    const currentProgress = swiper.progress


    if (currentProgress === 1) {
        removeActiveClasses()
        setActiveSlide(lastIndex)

        reachEnd = true
    }

    if (reachEnd && currentProgress < prevProgress) {
        removeActiveClasses()
        setActiveSlide(lastIndex - 1)

        reachEnd = false
    }

    prevProgress = currentProgress

});

function setActiveSlide(index) {
    thumbsSwiper.slideTo(lastIndex)
    thumbsSwiper.slides[index].classList.add('swiper-slide-thumb-active');
}

function removeActiveClasses() {
    thumbsSwiper.slides.forEach(slide => slide.classList.remove('swiper-slide-thumb-active'));
}