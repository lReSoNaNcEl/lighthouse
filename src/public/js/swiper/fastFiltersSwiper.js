const fastFiltersSwiper = new Swiper(".buttons_slider_wrapper", {
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            spaceBetween: 8
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 8
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 14
        }
    },
    navigation: {
        nextEl: null,
        prevEl: null,
    },
});

const prevArrow = document.querySelector('.filter-arrow-prev')
const nextArrow = document.querySelector('.filter-arrow-next')


nextArrow.addEventListener('click', () => {
    fastFiltersSwiper.slideNext();
});

prevArrow.addEventListener('click', () => {
    fastFiltersSwiper.slidePrev();
});
