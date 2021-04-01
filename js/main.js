var btn = document.getElementById('btn');
btn.onclick = function (event) {
    event.preventDefault();
    var text = document.querySelector('.header__title');
    text.classList.toggle('black__font');
}
var btnLong = document.querySelector('.btn-form');
btnLong.onclick = function (event) {
    event.preventDefault();
    btnLong.classList.toggle('btn_tr');

}

$(function () {
    $(window).scroll(function () {
        $('.section__title').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("animate__backInDown");
            }
        });
    });
    $(window).scroll(function () {
        $('.advantage').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("animate__jackInTheBox");
            }
        });
    });
})