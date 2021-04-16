// Show 3 news card onCLick
document.getElementById('load').onclick = () => {
    const items = document.getElementsByClassName('hide');

    for (i = 0; i < 6; i++) {
        if (items[i]) {
            items[i].classList.remove('hide');
        }
    }
};

$(document).ready(function() {

    $('.hero-scroll-btn').click(function() {
        $("html, body").animate({ scrollTop: $('.why-kornia').offset().top }, 1000);
    })


    $('.hamburger').click(function() {
        $('.nav').addClass('open')
        $('.owl-carousel').addClass('off')
    })
    $('.close-btn').click(function() {
        $('.nav').removeClass('open')
    })

    // var newsSlider = $('.owl-carousel');

    // newsSlider.owlCarousel({
    //     nav: false,
    //     items: 2,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     smartSpeed: 800,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         // breakpoint from 768 up
    //         200: {
    //             items: 2,
    //         }
    //     }
    // });
})