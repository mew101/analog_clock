const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();
    console.log(date)
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("hour:" + hr + " minute:" + min + " seconds:" + sec);

    let hourPosition = (hr*360/12)+(min*(360/60)/12);
    let minutePosition = (min*360/60)+(sec*(360/60)/60);
    let secondPosition = sec*360/60;



function runClock() {

    hourPosition = hourPosition+(3/360);
    minutePosition = minutePosition+(6/60);
    secondPosition = secondPosition+6;
    
    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
};

var interval = setInterval(runClock, 1000);