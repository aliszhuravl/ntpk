$(document).ready(function() {
    $('.main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        arrows: false,
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('.slp').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1500,
        arrows: true,
        dots: false,
        autoplay: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: $('#bp'),
        nextArrow: $('#bn'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});