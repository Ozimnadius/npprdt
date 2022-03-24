window.addEventListener('load', function (){
   let slider = document.querySelector('.slider__swiper');
   if (slider){
      const swiperSlider = new Swiper(slider, {
         loop: true,
         slidesPerView: 3,
         slidesPerGroup: 3,
         spaceBetween: 35,
         pagination: {
            el: '.slider__pag',
            clickable: true
         },
         autoplay: {
            delay: 5000,
         },
      });
   }
});