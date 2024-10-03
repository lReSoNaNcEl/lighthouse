
const cardSwipers = document.querySelectorAll('.card__images__swiper');


cardSwipers.forEach((swiperElement, index) => {
    const paginationBullets = swiperElement.querySelector('.card__images__pagination')

    const cardImagesSwiper = new Swiper(swiperElement, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        pagination: {
            el: paginationBullets,
            bulletActiveClass: 'active-bullet',
            clickable: true
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                loop: false,
            },
            768: {
                slidesPerView: 1,
            },
        },
    });

    const disableLinkFollow = () => {
        paginationBullets.addEventListener('onclick', (e) => e.stopPropagation())
    }

    disableLinkFollow()

    cardImagesSwiper.autoplay.stop()

    const cardImagesWrapper = swiperElement.querySelector('.card__images__wrapper');

    cardImagesWrapper.addEventListener('mouseenter', () => {
        cardImagesSwiper.autoplay.start();
    });

    cardImagesWrapper.addEventListener('mouseleave', () => {
        cardImagesSwiper.autoplay.stop();
    });
});
