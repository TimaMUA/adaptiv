const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp')
});

$('.scroll-to-massage').click(function(e){
    e.preventDefault();
    let target = $(this).data('massage');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});

// Появление кнопки вверх
$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if (scrolled > 300) {
        $('#back-to-top').addClass('active');
    }
    else {
        $('#back-to-top').removeClass('active');
    }
});
// Действие кнопки вверх
$('#back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 1000)
});