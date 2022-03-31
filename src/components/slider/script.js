window.addEventListener('load', function (){
   let slider = document.querySelector('.slider__swiper');
   if (slider){
      const swiperSlider = new Swiper(slider, {
         loop: true,
         slidesPerView: 2,
         slidesPerGroup: 2,
         spaceBetween: 10,
         pagination: {
            el: '.slider__pag',
            clickable: true
         },
         autoplay: {
            delay: 5000,
         },
         breakpoints: {
            // when window width is >= 768px
            768: {
               slidesPerView: 2,
               slidesPerGroup: 2,
               spaceBetween: 20,
            },
            // when window width is >= 1280px
            1280: {
               slidesPerView: 4,
               slidesPerGroup: 4,
               spaceBetween: 20
            },
            // when window width is >= 1920px
            1920: {
               slidesPerView: 3,
               slidesPerGroup: 3,
               spaceBetween: 35,
            }
         }
      });
   }
});