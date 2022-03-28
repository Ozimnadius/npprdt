window.addEventListener('load', function (){
   let slider = document.querySelector('.devs__swiper');
   if (slider){
       const swiperSlider = new Swiper(slider, {
           slidesPerView: 'auto',
           spaceBetween: 40,
           centeredSlides: true,
           initialSlide: 1
       });
   }

});