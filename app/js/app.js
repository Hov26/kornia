$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.nav').addClass('open')
        $('.owl-carousel').addClass('off')
    })
    $('.close-btn').click(function() {
        $('.nav').removeClass('open')
    })

    var cards = $('.news-card.hide')

    $('.load-more-btn').click(function() {
        // console.log("$('.news-container').find('news-card.hide')", $('.news-container').find('news-card.hide'))
        // $('.news-container').find('.news-card').removeClass('hide')

        console.log("$('.news-container').find('.news-card')", cards.length)
        cards.each(function(idx) {
            if (cards.hasClass('hide')) {
                console.log('idx', idx)
                $(this).addClass('ssssss')
            }
        })
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