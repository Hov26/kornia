// function myFunction() {
//     var copyText = document.getElementById("myInput");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
// }

$(document).ready(function() {

    // copy hero button text
    // $('.hero-btn').click(function() {
    //     myFunction()
    // })

    // Hide ecosystem section cards on mobile
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
        $('.ecosystem .card:nth-child(n+5)').addClass('hide');
        $('#loadEco').click(function() {
            var ecoCards = $('.card.hide')
            for (i = 0; i < ecoCards.length; i++) {
                if (ecoCards[i]) {
                    ecoCards[i].classList.remove('hide');
                }
            }
            if (!$('.card').hasClass('hide')) {
                $(this).hide()
            }
        })
    }

    // Scroll page onClicking hero arrow
    $('.hero-scroll-btn').click(function() {
        $("html, body").animate({ scrollTop: $('.why-kornia').offset().top }, 1000);
    })

    // open menu
    $('.hamburger').click(function() {
        $('.nav').addClass('open')
        $('.owl-carousel').addClass('off')
    })

    // close menu
    $('.close-btn').click(function() {
        $('.nav').removeClass('open')
    })


    // Show 3 news card onCLick
    $('#load').click(function() {
        // load news card onCLick "load"

        var newsCards = $('.news-card.hide')
        for (i = 0; i < 6; i++) {
            if (newsCards[i]) {
                newsCards[i].classList.remove('hide');
            }
        }
        if (!$('.news-card').hasClass('hide')) {
            $(this).hide()
        }
    })

    // init slider
    var slider = $('.owl-carousel');
    slider.owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        autoplayHoverPause: true
    });
})