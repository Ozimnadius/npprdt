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
    }

    close(){
        this.menu.classList.remove('active');
        this.active = false;
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