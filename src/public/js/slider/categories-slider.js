const categoriesSlider = new Swiper(".buttons__slider__wrapper", {
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

const filtersPrevArrow = document.querySelector('.filter__arrow__prev')
const filtersNextArrow = document.querySelector('.filter__arrow__next')


filtersNextArrow.addEventListener('click', () => {
    categoriesSlider.slideNext();
});

filtersPrevArrow.addEventListener('click', () => {
    categoriesSlider.slidePrev();
});
