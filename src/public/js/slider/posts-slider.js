const postsSwiper = new Swiper(".posts__cards__swiper", {
    loop: true,
    grabCursor: true,

    slidesPerView: 4,
    navigation: {
        nextEl: null,
        prevEl: null
    },
    touchEventsTarget: 'container',
    breakpoints: {
        0: {
            loop: false,
            slidesPerView: 2,
            spaceBetween: 26
        },
        992: {
           slidesPerView: 3,
            spaceBetween: 45,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 45,
        },
    },
});


const postsNextArrow = document.querySelector('.posts__arrow__next')
const postsPrevArrow = document.querySelector('.posts__arrow__prev')


postsNextArrow.addEventListener('click', () => {
    postsSwiper.slideNext();
});

postsPrevArrow.addEventListener('click', () => {
    postsSwiper.slidePrev();
});
