const introSlider = document.querySelector('.intro__slider')
const galleryModal = document.querySelector('.gallery__modal')
const galleryCloseButton = document.querySelector('#gallery__close')

introSlider.addEventListener('click', show)
galleryCloseButton.addEventListener('click', hide)

function show() {
    galleryModal.classList.toggle('hidden')
    galleryModal.classList.toggle('show')
    document.querySelector('.intro-layout').style.zIndex = 99999
    document.documentElement.style.overflow = "hidden"

    galleryModal.focus()
}

function hide() {
    galleryModal.classList.toggle('hidden')
    galleryModal.classList.toggle('show')
    document.querySelector('.intro-layout').style.zIndex = 'inherit'
    document.documentElement.style.overflow = "auto"

    offerSlider.slideTo(gallerySwiper.activeIndex)
}

galleryModal.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'escape') {
        hide()
    }
})