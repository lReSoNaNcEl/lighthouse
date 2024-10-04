const categorySlider = new Swiper(".buttons__slider__wrapper", {
    grabCursor: true,
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            spaceBetween: 8
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 8
        },
        1200: {
            slidesPerView: 'auto',
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


categorySlider.on('reachEnd', () => {
    filtersPrevArrow.style.visibility = 'visible';
    filtersNextArrow.style.visibility = 'hidden';
})

categorySlider.on('reachBeginning', () => {
    filtersPrevArrow.style.visibility = 'hidden';
    filtersNextArrow.style.visibility = 'visible';
})

categorySlider.on('fromEdge', () => {
    filtersPrevArrow.style.visibility = 'visible';
    filtersNextArrow.style.visibility = 'visible';
})




filtersNextArrow.addEventListener('click', () => {
    categorySlider.slideNext();
});

filtersPrevArrow.addEventListener('click', () => {
    categorySlider.slidePrev();
});
