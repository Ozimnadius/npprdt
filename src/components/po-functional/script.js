window.addEventListener('load', function (){
    let slider = document.querySelector('.po-functional__swiper');
    if (slider){
        const swiperSlider = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            // freeMode: true,
            centeredSlides: false,
            initialSlide: 0,
            breakpoints: {
                // when window width is >= 1920px
                1920: {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    // freeMode: true,
                    centeredSlides: true,
                    initialSlide: 2,
                }
            }
        });
    }

});