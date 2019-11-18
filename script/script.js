window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinuts = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
                return {hours, minutes, seconds};
        }

        function updateClock(){
            let timer = getTimeRemaining();
        
                timerHours.textContent = timer.hours;
                timerMinuts.textContent = timer.minutes;
                timerSeconds.textContent = timer.seconds;

              
                setTimeout(updateClock, 1000);
            
        }

        updateClock();
    }

    countTimer('31 december 2018');

});