$(document).ready(function () {

    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("header").addClass("green");
        } else {
            $("header").removeClass("green");
        };
    });


    $(window).scroll(function () {
        let abc = $(window).scrollTop();
        $(".zooming img").css({
            width: (100 + abc / 5) + "%"
        });
    });

    $(".wrapper").hover(function () {
        $(".dropD").slideDown(500);
    }, function () {
        $(".dropD").slideUp(500);
    });


    $(".title").click(function () {
        $(".content").toggle(300);
    });

});