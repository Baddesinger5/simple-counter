let countDate = new Date("Feb 22, 2021 01:01:00").getTime();

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
    
    let video = document.querySelector('iframe');
    video.style.display = 'none';

    if (distance < 0) {
        clearInterval(result);
        let mainContent = document.querySelector('.conter-inner');
        mainContent.style.display = 'none';

        video.style.display = 'block';
    }
}, 1000);