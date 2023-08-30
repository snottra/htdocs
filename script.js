
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

const clockEl = document.getElementById("clock");
const countdownEl = document.getElementById("student_countdown");

setInterval(() => {
    const date = new Date();
    let dateTime = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    clockEl.innerText = dateTime;
    
}, 1);


let CountDownDate = new Date("Jun 2, 2024, 06:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();

    let timeLeftUnix = CountDownDate - now;
   
    
    var dagar = Math.floor(timeLeftUnix / (1000 * 60 * 60 * 24));
    var timmar = Math.floor((timeLeftUnix % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuter = Math.floor((timeLeftUnix % (1000 * 60 * 60)) / (1000 * 60));
    var sekunder = Math.floor((timeLeftUnix % (1000 * 60)) / 1000);

    let timeLeft = (dagar + " dagar " + timmar + " timmar " + minuter + " minuter " + sekunder + " sekunder");

    countdownEl.innerText = timeLeft;
}, 1);

