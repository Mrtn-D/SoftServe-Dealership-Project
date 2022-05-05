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
}