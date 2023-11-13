const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 2,
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,

        },

        640: {
            slidesPerView: 2,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },
});