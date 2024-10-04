(() => {
    const postsSwiper = document.querySelectorAll('.card__images__swiper');

    const swiperSettings = {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        speed: 0,
        pagination: {
            el: '.card__images__pagination',
            bulletActiveClass: 'active-bullet',
            clickable: true
        },
        breakpoints: {
            0: {
                loop: false,
            },
            768: {
                slidesPerView: 1,
            },
        },
    }

    function inBetween(target, a, b) {
        return target >= a && target <= b;
    }

    function throttle(func, ms) {

        let isThrottled = false,
            savedArgs,
            savedThis;

        function wrapper() {

            if (isThrottled) {
                savedArgs = arguments;
                savedThis = this;
                return;
            }

            func.apply(this, arguments);

            isThrottled = true;

            setTimeout(function() {
                isThrottled = false;
                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = savedThis = null;
                }
            }, ms);
        }

        return wrapper;
    }

    const delay = 50

    postsSwiper.forEach((swiperElement) => {
        const cardImagesSwiper = new Swiper(swiperElement, swiperSettings);

        let currentZone = 0

        const slidesAmount = cardImagesSwiper.slides.length

        const containerBounds = swiperElement.getBoundingClientRect()

        function calculateZonesRestrictions() {
            const zoneWidth = containerBounds.width / slidesAmount;
            let zones = [];

            for (let i = 0; i < slidesAmount; i++) {
                const start = i * zoneWidth + containerBounds.x;
                const end = start + zoneWidth;
                zones.push({ start, end });
            }

            return zones;
        }

        const containerZones = calculateZonesRestrictions()

        function calculateCurrentZone(clientX) {

            return containerZones.findIndex(zone => inBetween(clientX, zone.start, zone.end));
        }

        const debouncedMouseMove = throttle((e) => {
            if(e.target.tagName.toLowerCase() !== 'img') return

            const newZone = calculateCurrentZone(e.clientX)
            if (newZone === currentZone) return

            currentZone = newZone

            cardImagesSwiper.slideTo(newZone)
        }, delay)


        swiperElement.addEventListener('mousemove', debouncedMouseMove)

        function resetConditions() {
            setTimeout(() => {
                cardImagesSwiper.slideTo(0)
                currentZone = 0
            }, delay)
        }

        swiperElement.addEventListener('mouseleave', resetConditions)

    });

})()