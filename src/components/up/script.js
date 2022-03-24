window.addEventListener('load', function () {
    document.querySelector('.up').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });
});