window.addEventListener('load', function () {
    gsap.registerPlugin(ScrollTrigger);

    const menuBtn = document.querySelector('.menu-btn');
    const headerFixed = document.querySelector('.header-fixed');
    const up = document.querySelector('.up');


    if (document.querySelector('.page__first')) {
        ScrollTrigger.create({
            trigger: ".page__first",
            start: 'top center',
            end: 'center',
            // markers: true,
            onUpdate: self => {
                if (self.isActive) {
                    headerFixed.classList.remove('active');
                    up.classList.remove('active');
                    menuBtn.classList.remove('line');
                } else {
                    headerFixed.classList.add('active');
                    up.classList.add('active');
                    menuBtn.classList.add('line')
                }
            }
        });
    }
});