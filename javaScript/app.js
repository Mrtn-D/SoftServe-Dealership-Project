function countdown() {
    const countDate = new Date("June 28, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;

};
setInterval(countdown, 1000);


let i = 0;
let carPics =
    [{ name: "mercedes", value: "../resource/Mercedes Maybach S600.png" },
    { name: "audi", value: "../resource/Audi s4.png" },
    { name: "vw", value: "../resource/Volkswagen golf.png" },
    { name: "tesla", value: "../resource/Tesla Model X.png" },
    { name: "mazda", value: "../resource/Mazda 6.png" }];
let time = 1500;
let slideshow;



function changePic() {
    document.slider.src = carPics[i].value;
    document.slider.setAttribute("data-car", carPics[i].name);
    if (i < carPics.length - 1) {
        i++;
    } else {
        i = 0;
    }
    slideshow = setTimeout("changePic()", time);
}

window.onload = changePic;

$(document).ready(function () {

    $("#carSlider").mouseenter(function () {
        clearInterval(slideshow);
    });

    $("#carSlider").mouseleave(function () {
        slideshow = setTimeout("changePic()", time);
    });

    $("#carSlider").click(function () {
        let currentCar = $("#carSlider").attr("data-car");
        window.location.href = `/html/cars.html?car=${currentCar}`
    });


    $(window).scroll(function () {
        let ind = $(window).scrollTop();
        $(".zooming img").css({
            width: (100 + ind / 5) + "%"
        });
    });

});