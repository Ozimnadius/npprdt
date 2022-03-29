window.addEventListener('load', function (){
    let slider = document.querySelector('.po-functional__swiper');
    if (slider){
        const swiperSlider = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            // freeMode: true,
            centeredSlides: true,
            initialSlide: 2
        });
    }

});