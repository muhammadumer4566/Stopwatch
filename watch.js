let stopwatch = document.querySelector('.stopwatch');
let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timerId = null;

startbtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTime, 10);
});

stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
});

resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    resetStopwatch();
});

function startTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }     
    }

    let hrString = hours < 10 ? `0${hours}` : hours;
    let minString = minutes < 10 ? `0${minutes}` : minutes;
    let secString = seconds < 10 ? `0${seconds}` : seconds;
    let milliString = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
    
    stopwatch.innerHTML = `${hrString}:${minString}:${secString}:${milliString}`;
}

function resetStopwatch() {
    stopwatch.innerHTML = `00:00:00:00`;
    milliseconds = seconds = minutes = hours = 0;
}
