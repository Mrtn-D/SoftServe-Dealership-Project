$(document).ready(function () {

    $(".wrapper").mouseenter(function () {
        $(".dropD").slideDown(500);
    });

    $(".wrapper").mouseleave(function (){
        $(".dropD").slideUp(500);
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("header").addClass("stickyNav");
        } else {
            $("header").removeClass("stickyNav");
        };
    });

});