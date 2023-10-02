
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


let nuTid = new Date().getTime();
let skolSlut = CountDownDate;
let skolStart = new Date("Aug 21, 2023, 08:30:00").getTime();

let skolTid = skolSlut - skolStart;
console.log(skolTid / (1000*3600*24))
let skolSpender = nuTid - skolStart;
console.log(skolSpender / (1000*3600*24));

let progProlle = 100 * (skolSpender / skolTid);
console.log(progProlle);
const progBarEl = document.getElementById("progBar");
progBarEl.style.setProperty("width",progProlle + "%","important");
//progBarEl.innerText = Math.round(progProlle*10)/10 + "%"; 
progBarEl.getElementsByTagName("div")[0].innerText = Math.round(progProlle*10)/10 + "%"; 


let clicks = 0
function nybildClick() {
    if (clicks % 2 == 0) {
        fetBildEl.style.display = "block";
    }
    if (clicks % 2 !=0){
        fetBildEl.style.display = "none ";
    }
    
    clicks = clicks + 1;
    console.log(clicks);
}
const buttonEl = document.getElementById("button");
const fetBildEl = document.getElementById("fetBild");
buttonEl.addEventListener("click", nybildClick);



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

