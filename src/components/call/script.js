window.addEventListener('load', function () {

    let form = new Call('.call');

    document.querySelectorAll('[data-call="btn"]').forEach(i => new CallBtns(i, form));
});

var onloadCallback = function () {
    grecaptcha.render('g-recaptcha', {
        'sitekey': '6LfqSgwfAAAAAIe6az1OO_dkY5X5bq9TdSxWCQbf',
        'callback': verifyCallback,
    });

    if (document.querySelector('#g-recaptcha2')) {
        grecaptcha.render('g-recaptcha2', {
            'sitekey': '6LfqSgwfAAAAAIe6az1OO_dkY5X5bq9TdSxWCQbf',
            'callback': verifyCallback2,
        });
    }
};

var verifyCallback = function (response) {
    document.querySelector('.call__submit').classList.remove('disabled');
};
var verifyCallback2 = function (response) {
    document.querySelector('.contacts-feed__submit').classList.remove('disabled');
};


class Call {
    constructor(selector = '[data-call="call"]', options) {

        let call = document.querySelector(selector);

        let def = {
            call: call,
            form: call.querySelector('[data-call="form"]'),
            suc: call.querySelector('[data-call="suc"]'),
            closeBtn: call.querySelector('[data-call="close"]'),
            active: false
        }

        Object.assign(this, def, options);


        this.events();
    }

    events() {

        this.call.addEventListener('click', (e) => {
            let target = e.target;

            if (!target.closest('[data-call="form"]') || target.closest('[data-call="close"]')) {
                this.close();
            }
        });

        this.form.addEventListener('submit', this.submit);

    }

    open() {
        this.call.classList.add('active');
        this.active = true;
        document.body.classList.add('ovh');
    }

    close = () => {
        this.call.classList.remove('active');
        this.call.classList.remove('sended');
        this.active = false;
        document.body.classList.remove('ovh');
    }

    submit = (e) => {
        e.preventDefault();

        fetch(this.form.action, {
            method: 'POST',
            body: new FormData(this.form)
        }).then(response => response.json()).then((data) => {
            if (data.status) {
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

    events() {
        this.btn.addEventListener('click', this.click);
    }

    click = () => {
        this.call.open();
    }
}