const categoriesSlider = new Swiper(".buttons__slider__wrapper", {
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



categoriesSlider.on('slideChange', (swiper) => {

    if(swiper.isBeginning) {
        filtersPrevArrow.style.visibility = 'hidden';
    } else {
        filtersPrevArrow.style.visibility = 'visible';
    }

    if (swiper.isEnd) {
        filtersNextArrow.style.visibility = 'hidden';
    } else {
        filtersNextArrow.style.visibility = 'visible';
    }
})





filtersNextArrow.addEventListener('click', () => {
    categoriesSlider.slideNext();
});

filtersPrevArrow.addEventListener('click', () => {
    categoriesSlider.slidePrev();
});
