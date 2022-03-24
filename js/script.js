//USER


// common.js
const jsTools = {
    getNumber: function (str) {
        return parseInt(str.replace(/[^\d]/g, ''));
    },
    getWindowWidth: function () {
        return document.documentElement.clientWidth;
    },
    getNumberFormat: function (number, decimals, dec_point, thousands_sep) {
        var i, j, kw, kd, km;
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ",";
        }
        if (thousands_sep == undefined) {
            thousands_sep = ".";
        }
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
        return km + kw + kd;
    }
};

const media = {
    mobile: window.matchMedia("(max-width: 767.98px)"),

}

window.addEventListener("load", function () {

    $('.input[type="tel"]').inputmask("+7(999)999-99-99");

});

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

window.addEventListener('load', function (){
   new Menu();
});

class Menu {
    constructor(options) {
        let def = {
            menu: document.querySelector('[data-menu="menu"]'),
            btns: document.querySelectorAll('[data-menu="btn"]'),
            title: document.querySelector('[data-menu="title"]'),
            active: false
        };

        Object.assign(this, def, options);

        this.btnsObj = Array.from(this.btns).map(i => new MenuBtn(i, this));
        this.title.innerHTML = document.title;
    }

    open(){
        this.menu.classList.add('active');
        this.active = true;
        document.body.classList.add('ovh');
    }

    close(){
        this.menu.classList.remove('active');
        this.active = false;
        document.body.classList.remove('ovh');
    }
}

class MenuBtn {
    constructor(elem, menu) {
        this.btn = elem;
        this.menu = menu;

        this.events();
    }

    events() {
        this.btn.addEventListener('click', this.click);
    }

    click = () => {
        if (this.menu.active) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.menu.open();
    }

    close() {
        this.menu.close();
    }
}
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
window.addEventListener('load', function () {
    document.querySelector('.up').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });
});
//# sourceMappingURL=script.js.map