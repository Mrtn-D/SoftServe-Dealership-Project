function countdown() {
    const countDate = new Date("May 3, 2022 00:00:00").getTime();
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
let carPics = [];
let time = 2000;

carPics[0] = "../resource/Mercedes Maybach S600.png";
carPics[1] = "../resource/Audi s4.png";
carPics[2] = "../resource/Volkswagen golf.png";
carPics[3] = "../resource/Tesla Model X.png";
carPics[4] = "../resource/Mazda 6.png";

function changePic() {
    document.slider.src = carPics[i];

    if (i < carPics.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePic()", time);
}

window.onload = changePic;