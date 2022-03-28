window.addEventListener('load', function () {
    new Call();
});

var onloadCallback = function () {
    grecaptcha.render('g-recaptcha', {
        'sitekey': '6LfqSgwfAAAAAIe6az1OO_dkY5X5bq9TdSxWCQbf',
        'callback': verifyCallback,
    });

    if (document.querySelector('g-recaptcha2')) {
        grecaptcha.render('g-recaptcha2', {
            'sitekey': '6LfqSgwfAAAAAIe6az1OO_dkY5X5bq9TdSxWCQbf',
            'callback': verifyCallback,
        });
    }
};

var verifyCallback = function (response) {
    document.querySelector('.call__submit').classList.remove('disabled');
};

class Call {
    constructor(options) {
        let def = {
            call: document.querySelector('[data-call="call"]'),
            form: document.querySelector('[data-call="form"]'),
            suc: document.querySelector('[data-call="suc"]'),
            btns: document.querySelectorAll('[data-call="btn"]'),
            closeBtn: document.querySelector('[data-call="close"]'),
            active: false
        }

        Object.assign(this, def, options);
        this.btnsArr = Array.from(this.btns).map(i => new CallBtns(i, this));

        this.events();

    }

    events() {
        this.call.addEventListener('click', (e)=>{
            let target = e.target;

            if(!target.closest('.call__form') || target.closest('.call__close')){
                this.close();
            }
        });

        this.form.addEventListener('submit', this.submit);
    }

    open() {
        this.call.classList.add('active');
        this.active = true;
    }

    close = () => {
        this.call.classList.remove('active');
        this.call.classList.remove('sended');
        this.active = false;
    }

    submit=(e)=>{
        e.preventDefault();

        fetch(this.form.action,{
            method: 'POST',
            body: new FormData(this.form)
        }).then(response => response.json()).then( (data)=>{
            if(data.status){
                this.call.classList.add('sended');
                this.form.reset();
            }
        });
    }

}

class CallBtns {
    constructor(elem, call) {
        this.btn = elem;
        this.call = call;
        this.events();
    }

    events(){
        this.btn.addEventListener('click', this.click);
    }

    click = () => {
        this.call.open();
    }
}