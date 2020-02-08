function modal() {
    var modal = document.querySelector("#orderModal");
    var btn = document.querySelector("#orderBtn");
    var modalClose = document.querySelector("#closeMod");
    var body = document.querySelector("body");


    btn.addEventListener('click', function () {
        modal.className += " modal__active";
        body.style.overflow = 'hidden';
    });

    modalClose.addEventListener('click', function () {
        modal.className = 'modal';
        body.style.overflow = 'auto';
    });

    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.className = 'modal';
            body.style.overflow = 'auto';
        }
    });
}

modal();