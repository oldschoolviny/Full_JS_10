function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timerRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timerRemaining % 60),
        minutes = Math.floor((timerRemaining / 60) % 60),
        hours = Math.floor(timerRemaining / 60 / 60);
        return {timerRemaining, hours, minutes, seconds};
}

function updateClock() {
    let timer = getTimeRemaining();
    
    if (timer.hours < 10 ? timerHours.textContent =`0${timer.hours}`: timerHours.textContent = timer.hours);
    if (timer.minutes < 10 ? timerMinutes.textContent =`0${timer.minutes}`: timerMinutes.textContent = timer.minutes);
    if (timer.seconds < 10 ? timerSeconds.textContent =`0${timer.seconds}`: timerSeconds.textContent = timer.seconds);

    if (timer.timeRemaining > 0) {
        setTimeout(updateClock, 1000);
    } else if (timer.timerRemaining < 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
    }
}
setInterval(updateClock, 1000);
};

export default countTimer;