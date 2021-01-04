let countDate = new Date("May 30, 2021 15:12:25").getTime();

let result = setInterval(function() {

    let currentlyDate = new Date().getTime();
    
    let distance = countDate - currentlyDate;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector('#day').innerHTML = days;
    document.querySelector('#hour').innerHTML = hours;
    document.querySelector('#min').innerHTML = minutes;
    document.querySelector('#sec').innerHTML = seconds;
    
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);