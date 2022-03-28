window.addEventListener('load', function () {
    let slider = document.querySelector('.terminal-principles__swiper');

    if (slider) {
        const swiper = new Swiper(slider, {
            pagination: {
                el: '.terminal-principles__pag',
                clickable: true
            },
            autoplay: {
                delay: 5000,
            },
        });
    }
});