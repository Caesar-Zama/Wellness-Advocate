var mySwiper = new Swiper('.slideshow', {
    speed: 400,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});