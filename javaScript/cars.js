const scrollTopBtn = document.querySelector("#scrollToTop");

window.addEventListener("scroll", scrollFunc);

function scrollFunc() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    };
};

scrollTopBtn.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};


$(document).ready(function () {
    if (window.location.search.includes("car")) {
        let car = window.location.search.split("=")[1];
        let currentImg = document.querySelectorAll(`[data-car=${car}]`)[0];

        $([document.documentElement, document.body]).animate({
            scrollTop: $(currentImg).offset().top
        }, 2000);
    };

    $("article").on("mouseenter", function () {
        $(this).children(".content").css("display", "block");
        $(this).children(".stock").css("opacity", "0.2");
    });
    $("article").on("mouseleave", function () {
        $(this).children(".content").css("display", "none");
        $(this).children(".stock").css("opacity", "1");
    });

});