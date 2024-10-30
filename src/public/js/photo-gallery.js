
const introSlider = document.querySelector('.intro__slider')
const galleryModal = document.querySelector('.gallery__modal')
const galleryCloseButton = document.querySelector('#gallery__close')

introSlider.addEventListener('click', () => {
    galleryModal.classList.toggle('hidden')
    galleryModal.classList.toggle('show')
    document.querySelector('.intro-layout').style.zIndex = 99999
    document.documentElement.style.overflow = "hidden"
})

galleryCloseButton.addEventListener('click', () => {
    galleryModal.classList.toggle('hidden')
    galleryModal.classList.toggle('show')
    document.querySelector('.intro-layout').style.zIndex = undefined
    document.documentElement.style.overflow = "auto"

    offerSlider.slideTo(gallerySwiper.activeIndex)
})