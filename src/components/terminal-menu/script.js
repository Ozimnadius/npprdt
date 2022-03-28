window.addEventListener('load', function () {
    let slider = document.querySelector('.terminal-menu__swiper');

    if (slider) {
        const swiper = new Swiper(slider, {
            pagination: {
                el: '.terminal-menu__pag',
                clickable: true
            },
            autoplay: {
                delay: 5000,
            },
        });
    }
});