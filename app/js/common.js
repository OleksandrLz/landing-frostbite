$(document).ready(function() {

    $("a.mfp_picture").click(function () {
        var picture = $(this).children(".sect_team_picture").css("background-image");
        $("#picture_team").css("background-image", picture);
    }).magnificPopup({
        src: "#picture_team",
        type: "inline"
    });

    $(".mfp_form").magnificPopup({
        src: "#form",
        type: "inline"
    });

    $('.menu a, .menu-mobile a,.angle a, .arrow a').click(function () {
        var scroll_el = $(this).attr('href');
        $('html, body').animate({scrollTop: $(scroll_el).offset().top - 100}, 500);
        return false;
    });

    $('.sandv-wrap').click(function(){
        $('.menu').slideDown()
    });
    $('.cross').click(function(){
        $('.menu').slideUp()
    });

    $(".search").click(function () {
        if ($(".search-field form p").hasClass("hidden")) {
            $(".search-field form p").removeClass("hidden");
        } else {
            $(".search-field form p").addClass("hidden");
        }
    });
    $('.hidens li h4').click(function(){
        $('.list1').css("display","block");
    });

    $(".slick_slider").slick({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        infinite: true,
        prevArrow: '<i class="slick-prev fa fa-arrow-left"></i>',
        nextArrow: '<i class="slick-next fa fa-arrow-right"></i>',
        waitForAnimate: false
    });

    $(".partners_slider").slick({
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        accessibility: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]

    });

    var i = 1;
    $(".slick-dots li button").each(function () {
        $(this).text("0" + i);
        i++
    });
});
