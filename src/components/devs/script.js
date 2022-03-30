window.addEventListener('load', function (){
   let slider = document.querySelector('.devs__swiper');
   if (slider){
       const swiperSlider = new Swiper(slider, {
           slidesPerView: 'auto',
           spaceBetween: 40,
           centeredSlides: true,
           initialSlide: 1,
           breakpoints: {
               // when window width is >= 1280px
               1280: {
                   slidesPerView: 'auto',
                   spaceBetween: 20,
                   centeredSlides: false,
                   initialSlide: 0,
               },
               // when window width is >= 1920px
               1920: {
                   slidesPerView: 'auto',
                   spaceBetween: 40,
                   centeredSlides: true,
                   initialSlide: 1,
               }
           }
       });
   }

});