let i = 0;
let text = "MD Dealership © is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers.Launched in 2015 and headquartered in Sofia, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers.";

function typing() {
    if (i < text.length) {
        document.getElementById("aboutUs").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 10)
    }
};
typing()


$(document).ready(function () {

    $(".title").click(function () {
        $(".content").toggle(400,).animate({opacity: '1'});
    });
});