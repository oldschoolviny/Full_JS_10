window.addEventListener('DOMContentLoaded', function(){
    'use strict';

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
}
  countTimer('22 december 2019');

  // Меню
  const toggleMenu = () => {
    const menu = document.querySelector('menu'),
          body = document.body;

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('close-btn') || target.tagName === 'A') {
        handlerMenu();
      }

      target = target.closest('.menu');
      if (target) {
        handlerMenu();
      } else if (!target) {
        menu.classList.remove('active-menu');
      }
    });
  };

  toggleMenu();

  // popup
  const togglePopup = () => {
      const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                let fat = document.documentElement.clientWidth;
                console.log('fat: ', fat);

        if (fat >= 480) {
            popup.style.display = 'block';
            popupContent.animate([
                { transform: 'translateX(0px)' }, 
                { transform: 'translateX(-100px)' },
                { transform: 'translateX(100px)' },
                { transform: 'translateX(0px)' }
            ], {
                duration: 1000,
                iterations: 2
            });
        } else {
            popup.style.display = 'block';
        }
    });
});

    popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    });
};

    togglePopup();

// табы
  const tabs = () => {
      const tabHeader = document.querySelector('.service-header'),
            tab = document.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.service-header-tab');
        
        if (target.classList.contains('service-header-tab')) {
            tab.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i);
                }
            });
        }
    });
};

  tabs();
});